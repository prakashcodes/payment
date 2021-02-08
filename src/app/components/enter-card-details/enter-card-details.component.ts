import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors  } from '@angular/forms';
import { cardInfoDTOModel } from '../../models/card-info.model'
import * as actions from '../../state/cards.action';

@Component({
  selector: 'app-enter-card-details',
  templateUrl: './enter-card-details.component.html',
  styleUrls: ['./enter-card-details.component.css']
})
export class EnterCardDetailsComponent implements OnInit {

  public cardInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private smstore: Store<cardInfoDTOModel>) { }

  ngOnInit(): void {

    const sendData = {
      name: "ssdsdv"
    };



    this.cardInfoForm = this.formBuilder.group({
      cardNumber: [, Validators.required],
      cardName: [,Validators.required],
      expiryDate: [, this.expiryDateValidation],
      securityCode: [],
      cardAmount: [,Validators.required]
    });
  }
  expiryDateValidation(control: FormControl): ValidationErrors {
  let result: ValidationErrors;
  const value = control.value || '';
  if ( new Date(value) < new Date()) {
    return { dateError: 'Invalid card details'};
  }
  return result;
  }

  proceed() {
    this.cardInfoForm.markAllAsTouched();

    const payload = {
      cardNum: this.cardInfoForm.get('cardNumber').value,
      cardName: this.cardInfoForm.get('cardName').value,
      dateExpiry: this.cardInfoForm.get('expiryDate').value,
      securityCode: this.cardInfoForm.get('securityCode').value,
      amount: this.cardInfoForm.get('cardAmount').value,
    }

    console.log(payload);
    this.smstore.dispatch(actions.PostCardInfo({ payload }));

  }

  isValidData(control){
    const valid = this.cardInfoForm.controls[control].invalid && (this.cardInfoForm.controls[control].touched);
    return valid;
  }

}
