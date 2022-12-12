import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCardsAction } from '../../reduce/action/getCartAction';
import { itemSelector } from '../../reduce/selector';
import { GetCardsService } from '../../services/get-cards.service';
import { Icard } from '../../types/Cards.interface';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  constructor(private store:Store, private service:GetCardsService) { }
  @Input()quatityCards:number
  cardsList$:Observable<Icard[]>=this.store.select(itemSelector)
  ngOnInit(): void {
    this.initialization()
  }
  initialization(){
    this.store.dispatch(getCardsAction())
  }
}
