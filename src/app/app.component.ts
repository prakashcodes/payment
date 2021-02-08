import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cardInfoDTOModel } from './models/card-info.model';

import * as selector from './state/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'cardInfo';
  public showMessage: Observable<string>;
  public responseData : cardInfoDTOModel;
  constructor(private smstore: Store<cardInfoDTOModel>, private router: Router) {

  }

  ngOnInit() {

    this.showMessage = this.smstore.pipe(select(selector.getToastMessage));

   this.smstore.pipe(select(selector.getSavedCardInfo)).subscribe(obj => {
      if (obj) {
        this.responseData =  obj;
      }
    });
  }

  OnSelect() {
    this.router.navigate(['enter-card']);
  }
}
