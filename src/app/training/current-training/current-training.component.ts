import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainExit = new EventEmitter();
  currentProgress = 0;
  timer: number;

  constructor(private dialog: MatDialog) { }

  startTimer() {
    this.timer = setInterval(() => {
      this.currentProgress += 20;
      if (this.currentProgress >= 100) {
        clearInterval(this.timer);
      }
    },1000);
  }

  ngOnInit() {
    this.startTimer();
  }

  
  onStopClick() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.currentProgress
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.trainExit.emit();
      } else {
        this.startTimer();
      }
    })
  }

}
