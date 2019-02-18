import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();

  private availableExercises: Exercise[] = [
    { exId: 'crunches', exName: 'Crunches', exDuration: 30, exCalories: 8 },
    { exId: 'touch-toes', exName: 'Touch Toes', exDuration: 180, exCalories: 15 },
    { exId: 'side-lunges', exName: 'Side Lunges', exDuration: 120, exCalories: 18 },
    { exId: 'burpees', exName: 'Burpees', exDuration: 60, exCalories: 8 }
  ];   

  private inProgressExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.inProgressExercise = this.availableExercises.find(ex => ex.exId === selectedId);
    this.exerciseChanged.next({...this.inProgressExercise});
  }
}