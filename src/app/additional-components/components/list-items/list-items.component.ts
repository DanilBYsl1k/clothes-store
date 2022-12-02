import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCardsAction } from '../../reduce/action/getCartAction';
import { GetCardsService } from '../../services/get-cards.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(private store:Store, private service:GetCardsService) { }

  ngOnInit(): void {
    this.initialization()
  }
  initialization(){
    this.store.dispatch(getCardsAction())
  }
}
