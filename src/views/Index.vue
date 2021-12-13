<template>
  <div v-if="collection && currentEx">
    <small>{{currentExIndex + 1}}/{{collection.length}}</small>
    <h3>{{ currentEx.name }}</h3>

    <b-form-group label="Текущий вес" class="mb-4">
      <b-form-input
        :value="+weight"
        autocomplete="off"
        type="number"
        v-debounce:1500ms="changeWeight"
      ></b-form-input>
    </b-form-group>

    <p>
      <strong>Подходы: </strong>
      <span>{{ currentEx.weeks[week - 1] }}</span>
    </p>

    <b-img class="w-75 mb-4" :src="currentEx.img" fluid />

    <p class="mb-2" v-html="currentEx.description"></p>

    <template v-if="collection">
      <b-form-group>
        <b-form-checkbox v-model="showAllColumns"><strong class="ps-3">Показать все недели</strong></b-form-checkbox>
      </b-form-group>

      <b-table striped hover :items="tableItems" :fields="fields" responsive="true" />
    </template>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useCurrentExIndex } from '@/composition/currentExIndex';

export default {
  name: 'IndexPage',
  components: {},

  setup() {
    const showAllColumns = ref(false);

    const store = useStore();
    store.dispatch('getCollection');
    
    const collection = computed(() => store.state.collection);
    const week = computed(() => store.state.week);
    const currentEx = computed(() => store.getters.currentEx);

    const tableItems = computed(() => collection.value.map(item => ({
        name: item.name,
        ...item.weeks.reduce((acc, value, index) => {
          acc[`week${+index + 1}`] = value;
          return acc;
        }, {})
    })));

    const weight = computed(() => currentEx.value.weight || '');

    const fields = computed(() => Object.keys(tableItems.value[0]).reduce((acc, key) => {
      if (key === 'name') acc.push({ key: 'name', label: 'Упражнение' });

      if (showAllColumns.value) {
        if (key.includes('week')) {
          acc.push({ key, label: `Н${key.replace('week', '')}`, })
        }
      } else {
        if (key === `week${week.value}`) {
          acc.push({ key, label: `Н ${week.value}`, })
        }
      }

      return acc;
    }, []));

    function changeWeight(value) {
      store.dispatch('setWeight', +value);
    }

    return {
      showAllColumns,
      collection,
      week,
      currentEx,
      tableItems,
      weight,
      fields,
      changeWeight,
      ...useCurrentExIndex()
    };
  },
};
</script>
