export interface IExercise {
  created_at: string;
  description: string;
  id: number;
  img: string;
  name: string;
  updated_at: string;
  weeks: string[];
  weight: number;
}

export interface IExerciseTableItem {
  name: string;
  week1?: string;
  week2?: string;
  week3?: string;
  week4?: string;
}