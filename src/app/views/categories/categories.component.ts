import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories: Category[]

  @Output()
  selectCategory = new EventEmitter<Category>()
  selectedCategory: Category

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {

  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category)

    if(this.selectedCategory === category) {
      return
    }

    this.selectedCategory = category
    this.selectCategory.emit(this.selectedCategory)

  }
}
