import { Component, OnInit } from '@angular/core';
import { CatalogService } from '@catalog/services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  searchSubscription: Subscription = new Subscription();
  filters = {};
  products = [];

  loading = false;
  totalItems = 0;
  page = 1;
  limit = 60;


  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {

  }

  getProducts() {
    this.loading = true;
    this.filters['page'] = this.page;

    this.searchSubscription.unsubscribe();
    this.searchSubscription = this.catalogService.getProducts(this.filters)
                                       .subscribe(res => {
      this.products   = res.data;
      this.totalItems = res.meta.total_items;
      this.limit      = res.meta.limit;
      this.loading    = false;
    });
  }

  filtersChange(filters) {
    this.filters = filters;
    this.page = 1;
    this.getProducts();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getProducts();
  }

  onNext(): void {
    this.page++;
    this.getProducts();
  }

  onPrev(): void {
    this.page--;
    this.getProducts();
  }
}
