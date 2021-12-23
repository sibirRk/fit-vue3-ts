/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, ComputedRef, WritableComputedRef } from 'vue';
import { useStore } from 'vuex'

export function useWeek(): {
  weeks: ComputedRef<number[]>,
  week: WritableComputedRef<string>
 } {
  const store = useStore();
  const weeks = computed(() => store.state.weeks);
  const week = computed({
    get: (): string => store.state.week,
    set(value): void {
      store.commit('setWeek', value);
    }
  })

  return {
    weeks,
    week,
  }
}