import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutAction } from 'src/app/auth/reduce/action/logoutActionState';
import { disabledSelector, loadingSelector, registerSelector } from 'src/app/auth/reduce/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store) { }
  register$=this.store.select(registerSelector)
  logout$=this.store.select(disabledSelector)

  phoneMenu=false
  ngOnInit(): void {

  }
  logout(){
    this.store.dispatch(logoutAction())
  }
}
