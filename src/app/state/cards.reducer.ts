import { Action, createReducer, on  } from '@ngrx/store';
import * as actions from './cards.action';
import { cardInfoDTOModel } from '../models/card-info.model'

export const initialState = {
  toastMessage: '',
  cardInfo: {}
};

export const reducerCardService = createReducer(initialState,

  on(actions.PostCardInfo, (state, { payload }) => {
    return {
        ...state,
        cardInfo: payload
    };
}),

    on(actions.PostCardInfoSuccess, (state, { value }) => {
        return {
            ...state,
            toastMessage: value
        };
    }),
    on(actions.PostCardInfoFail, (state, { error }) => {
      return {
          ...state,
          toastMessage: error
      };
  })
)
