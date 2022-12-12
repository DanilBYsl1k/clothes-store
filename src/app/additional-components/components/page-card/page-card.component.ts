import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cardPageAction } from '../../reduce/action/cardPageAction';
import {  itemSelector } from '../../reduce/selector';
import { Icard } from '../../types/Cards.interface';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  constructor(private store:Store, private param:ActivatedRoute){}
  cardId=this.param.snapshot.paramMap.get('id')
  cardSelector=this.store.select(itemSelector)
  item:Icard
  quantity:number=1
  price:number
  activeColor=""
  activeLi:string
  activeSize:string
  ngOnInit(): void {
    this.initialization(Number(this.cardId))
    this.cardSelector.pipe().subscribe((data:Icard[])=>{
      this.item=Object(data)
      this.price=this.item.price
    })
  }
  initialization(number:number){
    this.store.dispatch(cardPageAction({request:number}))
  }
  quantityFun(string:string){
    this.price=this.item.price
    if(string=='plus'){
      this.quantity++
    }
    else if(string=="minus"){
      this.quantity--
    }
    this.price=this.price*this.quantity
    return this.price
  }
  activeColorFun(color:string){
    this.activeColor=color
  }
  activeList(elem:any){
    this.activeLi=elem.textContent
    console.log(this.activeLi)
  }
  activeSizeFun(elem:any){
    this.activeSize=elem
    console.log(this.activeSize)
  }
}
