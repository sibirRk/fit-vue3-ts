import { createStore } from 'vuex';
import axios from 'axios';
import { IStoreState } from '@/types/';
import { IExercise } from '@/types/'

const state: IStoreState = {
  collection: [],
  week: localStorage.getItem('fit-week') || '1',
  weeks: [1, 2, 3, 4],
  currentExIndex: 0,
}

export default createStore({
  state,

  mutations: {
    setCollection(state, payload): void {
      state.collection = payload;
    },
    setWeek(state, payload): void {
      if (payload && payload !== state.weeks.length + 1) {
        localStorage.setItem('fit-week', payload);
        state.week = payload;
      }
    },
    setCurrentExIndex(state, payload): void {
      if (payload >= 0 && payload !== state.collection.length + 1) {
        state.currentExIndex = payload;
      }
    },
    setWeight(state, payload): void {
      state.collection[state.currentExIndex].weight = payload;
    },
  },

  getters: {
    currentEx(state): IExercise {
      const { collection, currentExIndex } = state;
      return collection[currentExIndex];
    },
  },

  actions: {
    getCollection({ commit }): void {
      axios.get('/exercises').then(({ data }) => {
        commit('setCollection', data);
      });
    },
    setWeight({ commit, getters }, payload): void {
      axios.put(`/exercises/${getters.currentEx.id}`, {
        weight: payload,
      });
      commit('setWeight', payload);
    },
  },
});
