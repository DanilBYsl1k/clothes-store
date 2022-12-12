import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingSelector, preloaderSelector } from 'src/app/additional-components/reduce/selector';

@Component({
  selector: 'app-maine-page',
  templateUrl: './maine-page.component.html',
  styleUrls: ['./maine-page.component.scss']
})
export class MainePageComponent implements OnInit {

  constructor(private store:Store) { }
  quatityCards:number=8
  loading$=this.store.select(loadingSelector)
  preloader$=this.store.select(preloaderSelector)

  ngOnInit(): void {
  }

}
