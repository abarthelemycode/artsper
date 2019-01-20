import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'block-product',
  templateUrl: './block-product.component.html',
  styleUrls: ['./block-product.component.scss']
})
export class BlockProductComponent implements OnInit {

  @Input('product') product:Object

  constructor() { }

  ngOnInit() {

  }
}
