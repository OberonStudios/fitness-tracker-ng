export interface Exercise {
  exId: string;
  exName: string;
  exDuration: number;
  exCalories: number;
  exDate?: Date;
  exState?: 'completed' | 'cancelled' | null;
}