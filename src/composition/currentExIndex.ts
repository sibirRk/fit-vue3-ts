/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, WritableComputedRef } from 'vue';
import { useStore } from 'vuex';

export function useCurrentExIndex(): { currentExIndex: WritableComputedRef<number>} {
  const store = useStore();
  const currentExIndex = computed({
    get: (): number => store.state.currentExIndex,
    set(value): void {
      store.commit('setCurrentExIndex', value)
    }
  });

  return {
    currentExIndex
  }
}