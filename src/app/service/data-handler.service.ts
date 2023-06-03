import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories)
  constructor() { }

  getCategories(): Category[] {
    this.categorySubject.next(TestData.categories)
    return TestData.categories;
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks)
  }
}
