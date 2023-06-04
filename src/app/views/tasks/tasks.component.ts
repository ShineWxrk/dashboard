import {AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  @Input()
  tasks: Task[]

  constructor(private dataHandler: DataHandlerService) {
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
    this.dataSource.data = this.tasks
    this.addTableObjects()

    // @ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null
        }
        case 'category': {
          return task.category ? task.category.title : null
        }
        case 'date': {
          return task.date ? task.date : null
        }
        case 'title': {
          return task.title
        }
      }
    }
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
}

