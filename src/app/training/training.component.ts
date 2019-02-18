import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTrain = false;
  exerciseSubscription: Subscription;

  constructor(private trainService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainService.exerciseChanged.subscribe(ex => {
      if(ex)  
        this.ongoingTrain = true;
      else 
        this.ongoingTrain = false;
    });
  }

}
