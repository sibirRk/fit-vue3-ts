import { computed } from 'vue';
import { useStore } from 'vuex';

export function useCurrentExIndex() {
  const store = useStore();
  const currentExIndex = computed({
    get: () => store.state.currentExIndex,
    set(value) {
      store.commit('setCurrentExIndex', value)
    }
  });

  return {
    currentExIndex
  }
}