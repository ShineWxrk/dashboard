import { Component, ViewContainerRef, ComponentFactoryResolver, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-edit-task-dailog',
  templateUrl: './edit-task-dailog.component.html',
  styleUrls: ['./edit-task-dailog.component.css']
})
export class EditTaskDailogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditTaskDailogComponent>, @Inject(MAT_DIALOG_DATA)private data: [Task, string]) {}

  private dialogTitle: string
  task: Task

  ngOnInit() {
    this.task = this.data[0]
    this.dialogTitle = this.data[1]

    console.log(this.task)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    // Handle dialog confirm action here.
    this.dialogRef.close();
  }
}

