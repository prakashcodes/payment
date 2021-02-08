import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { CardInfoService } from '../service/card-info.service'

import { PostCardInfo } from './cards.action';
import * as actions from './cards.action';
@Injectable()
export class CardInfoEffects {

  constructor(private ccActions: Actions, private ccService: CardInfoService) { }

  saveCoreCompletionDetailsEffect = createEffect(() =>
    this.ccActions.pipe(
      ofType(actions.PostCardInfo),
      switchMap(({ payload }) => this.ccService.postCardInfo(payload)
        .pipe(
          map((response: any) => {
            return actions.PostCardInfoSuccess({ value: response });
          }),
          catchError(error => of(actions.PostCardInfoFail(error)))
        ))
    ));
}
