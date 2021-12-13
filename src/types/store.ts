import { IExercise } from './exercises';

export interface IStoreState {
  collection: IExercise[],
  week: string;
  weeks: number[];
  currentExIndex: number;
}