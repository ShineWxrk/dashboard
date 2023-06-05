import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryDAOArray } from '../data/dao/impl/CategoryDAOArray';
import { TaskDAOArray } from '../data/dao/impl/TaskDAOArray';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories)

  taskDaoArray = new TaskDAOArray()
  categoryDaoArray = new CategoryDAOArray()
  constructor() { }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll()
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll()
  }

  getCategories(): Category[] {
    this.categorySubject.next(TestData.categories)
    return TestData.categories;
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {
    let tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks)
  }

  searchTasks(category: Category, searchText?: string, status?: boolean, priority?: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority)
  }
}
