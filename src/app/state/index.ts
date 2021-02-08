import { createFeatureSelector, createSelector } from '@ngrx/store';
const reducerFeatureState = createFeatureSelector<any>('cardservice');

export const getToastMessage = createSelector(reducerFeatureState, state => {
    return state.toastMessage;
});

export const getSavedCardInfo = createSelector(reducerFeatureState, state => {
    return state.cardInfo;
});
