import { Observable, of } from "rxjs";
import { Category } from "src/app/model/Category";
import { Priority } from "src/app/model/Priority";
import { Task } from "src/app/model/Task";
import { TestData } from "../../TestData";
import {TaskDAO} from "../interface/TaskDAO";

export class TaskDAOArray implements TaskDAO {
    search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
        throw new Error("Method not implemented.");
    }
    getCompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getUncompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCount(): Observable<number> {
        throw new Error("Method not implemented.");
    }
    add(T: Task): Observable<Task> {
      throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Task> {
      throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    update(T: Task): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Task[]> {
      return of(TestData.tasks)
    }


}
