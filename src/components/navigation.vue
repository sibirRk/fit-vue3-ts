<template>
  <div id="navigation" class="d-flex justify-content-between align-items-center mb-4">
    <b-button
      variant="outline-primary"
      @click="currentExIndex--"
      :disabled="currentExIndex === 0"
    >
      &larr;
    </b-button>
    <b-form-group label="Текущая неделя" class="text-center">
      <b-form-radio-group
        v-model="week"
        :options="['1', '2', '3', '4']"
        name="radio-inline"
        plain
      ></b-form-radio-group>
    </b-form-group>
    
    <b-button
      variant="outline-primary"
      @click="currentExIndex++"
      :disabled="currentExIndex + 1 === collection.length"
    >
      &rarr;
    </b-button>
  </div>
</template>

<script>
import { useCurrentExIndex } from '@/composition/currentExIndex';
import { useWeek } from '@/composition/week';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Navigation',
  setup() {
    const store = useStore();
    const collection = computed(() => store.state.collection);

    return {
      ...useCurrentExIndex(),
      ...useWeek(),
      collection
    }
  },
}
</script>