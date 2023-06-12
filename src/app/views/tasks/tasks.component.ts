import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditTaskDailogComponent } from 'src/app/dialog/edit-task-dailog/edit-task-dailog.component';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category']
  dataSource: MatTableDataSource<Task>

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator
  @ViewChild(MatSort, {static: false}) sort: MatSort

  tasks: Task[]

  @Input('tasks')
  set SetTasks(tasks: Task[])  {
    this. tasks = tasks
    this.fillTable()
  }

  @Output()
  updateTask = new EventEmitter<Task>()

  constructor(private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource()
    this.fillTable()
  }

  toogleTaskCompleted(task: Task) {
    task.completed = !task.completed
  }

  getPriorityColor(task: Task) {
    if (task.completed) {
      return '#eaeaea'
    }

    if (task.priority && task.priority.color) {
      return task.priority.color
    }

    return '#fff'
  }

  private fillTable() {
    if(!this.tasks) {
      return
    }

    this.dataSource.data = this.tasks
    this.addTableObjects()

    this.dataSource.sortingDataAccessor = (task: Task, colName: string) => {
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : 0;
        }
        case 'category': {
          return task.category ? task.category.title : '';
        }
        case 'date': {
          return task.date ? new Date(task.date).getTime() : 0;
        }
        case 'title': {
          return task.title;
        }
        default: {
          return '';
        }
      }
    }
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  openEditTaskDialog(task: Task) {
    const dialogRef = this.dialog.open(EditTaskDailogComponent, {data: [task, 'Edit task'], autoFocus: false})
    dialogRef.afterClosed().subscribe(result => {
      if(result as Task) {
        this.updateTask.emit(task)
        return
      }
    })
    this.updateTask.emit(task)
  }
}

