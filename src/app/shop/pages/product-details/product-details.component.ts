import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  view;
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  public getMoreDetails(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
