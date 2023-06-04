import { Component, OnInit } from '@angular/core';
import { Category } from './model/Category';
import { Task } from './model/Task';
import { DataHandlerService } from './service/data-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'Todo';
  tasks: Task[]
  categories: Category[]

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks)
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }
}
