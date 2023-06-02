import {Category} from '../model/Category'
import {Priority} from '../model/Priority'
import {Task} from '../model/Task'

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Job'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Studies'},
    {id: 4, title: 'Rest'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Finance'},
    {id: 7, title: 'Food'},
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#21fc80'},
    {id: 2, title: 'Medium', color: '#ffde3c'},
    {id: 3, title: 'High', color: '#426dff'},
    {id: 4, title: 'Maximum', color: '#f64040'},
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Test 1',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2023-06-01')
    },
    {
      id: 2,
      title: 'Test 2',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2023-06-02')
    },
    {
      id: 3,
      title: 'Test 3',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2023-06-03')
    },
  ]
}
