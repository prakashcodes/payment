
import { createAction, props } from '@ngrx/store';
import { cardInfoDTOModel } from '../models/card-info.model'

export const PostCardInfo = createAction(
  '[card-payment] PostCardInfo',
  props<{ payload: any}>()
);

export const PostCardInfoSuccess = createAction(
  '[card-payment] PostCardInfoSuccess',
  props<{ value: any}>()
);

export const PostCardInfoFail = createAction(
  '[card-payment] PostCardInfoFail',
  props<{ error: any}>()
);
