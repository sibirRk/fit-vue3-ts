/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed } from 'vue';
import { useStore } from 'vuex'

export function useWeek(): any {
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