import { computed } from 'vue';
import { useStore } from 'vuex'

export function useWeek() {
  const store = useStore();
  const weeks = computed(() => store.state.weeks);
  const week = computed({
    get: () => store.state.week,
    set(value) {
      store.commit('setWeek', value);
    }
  })

  return {
    weeks,
    week,
  }
}