import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { UserObjService } from '../services/user-obj.service';

@Component({
  selector: 'app-page-become-a-chef-form',
  templateUrl: './page-become-a-chef-form.component.html',
  styleUrls: ['./page-become-a-chef-form.component.css'],
})
export class PageBecomeAChefFormComponent implements OnInit {
chefSignUpForm : FormGroup;

  constructor(
    private userObj: UserObjService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.chefSignUpForm = this.formBuilder.group({
      foommyImage: [''],
      chefName: [''],
      placeDesc: [''],
      theDiningArea: [''],
      additionalInfo: [''],
      availableDays: [''],
      availableTimes: [''],
      contactEmail: [''],
      contactPhone: [''],
      city: [''],
      state: [''],
      howToGetThere: [''],
           diningOptions:this.formBuilder.array([this.formBuilder.control('')]),
      paymentMethod:this.formBuilder.array([this.formBuilder.control('')]),
      availability: [''],
      seatingCapacity: [''],
      advanceReservation: [''],
      prepTime: [''],
      cuisineType: [''],
    });
  }
}
