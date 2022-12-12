import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { itemSelector } from 'src/app/additional-components/reduce/selector';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private store:Store) { }
  quatityCards=this.store.select(itemSelector)
  length:number
  ngOnInit(): void {
    this.quatityCards.subscribe((data)=>{
      this.length=data.length
      console.log(data)
    })
  }


}
