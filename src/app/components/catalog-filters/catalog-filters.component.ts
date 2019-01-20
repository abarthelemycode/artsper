import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.scss']
})
export class CatalogFiltersComponent implements OnInit {
  @Output() filtersChange = new EventEmitter();

  searchForm: FormGroup;
  products = []
  categories = [
    { "id":6, "name":"Peinture"},
    { "id":9, "name":"Photographie"},
    { "id":5, "name":"Sculpture"},
    { "id":23, "name":"Dessin"},
    { "id":15, "name":"Edition"},
  ]

  prices = [
    { "id":"0-500", "name":"< 500 €"},
    { "id":"500-1000", "name":"500 € - 1000 €"},
    { "id":"1000-2500", "name":"1000 € - 2500 €"},
    { "id":"2500-5000", "name":"2500 € - 5000 €"},
    { "id":"5000-10000", "name":"5000 € -10000 €"},
    { "id":"10000-50000", "name":"10000 € - 50000 €"}
  ]
  sorts = [
    { "id":1, "name":"Alphabétique (A-Z)"},
    { "id":2, "name":"Alphabétique (Z-A)"},
    { "id":3, "name":"Prix croissant"},
    { "id":4, "name":"Prix décroissant"},
    { "id":11, "name":"Ajoutées récemment"},
    { "id":13, "name":"Popularité"}
  ]
  ipps = [ 60, 100, 200]


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
        search:[''],
        id_category: [6],
        price: ['0-500'],
        sort: [11],
        ipp: [60],
        statuses: [['status2']],
    });
    this.eventFilters(null)
  }

  get form() { return this.searchForm.controls; }


  getFilters(){
    let filters = {
        "search": this.form.search.value,
        "id_category" : this.form.id_category.value,
        "sort" : this.form.sort.value,
        "ipp" : this.form.ipp.value,
        "price": this.form.price.value,
        "statuses": ["status2"],
    }
    return filters
  }

  eventFilters(e){
    let filters = this.getFilters()
    this.filtersChange.emit(filters)
  }

}
