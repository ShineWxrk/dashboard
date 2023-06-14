import { Component, ViewContainerRef, ComponentFactoryResolver, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/model/Category';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-edit-task-dailog',
  templateUrl: './edit-task-dailog.component.html',
  styleUrls: ['./edit-task-dailog.component.css']
})
export class EditTaskDailogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditTaskDailogComponent>, @Inject(MAT_DIALOG_DATA)private data: [Task, string], private dataHandler: DataHandlerService,) {}

  task: Task

  categories: Category[]
  tmpCategory: Category

  dialogTitle: string
  tmpTitle: string

  ngOnInit() {
    this.task = this.data[0]
    this.dialogTitle = this.data[1]

    this.tmpTitle = this.task.title
    if (this.task.category != undefined) {
      this.tmpCategory = this.task.category
    }
    this.dataHandler.getAllCategories().subscribe(items => this.categories = items)
  }

  onConfirm(): void {
    this.task.title = this.tmpTitle
    this.task.category = this.tmpCategory
    this.dialogRef.close(this.task)
  }

  onCansel(): void {
    // Handle dialog confirm action here.
    this.dialogRef.close(null);
  }
}

