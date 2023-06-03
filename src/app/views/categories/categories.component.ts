import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: Category
  categories: Category[]

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.categorySubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category)
    this.selectedCategory = category
  }
}
