import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './sec-form.component.html',
  styleUrls: ['./sec-form.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  carTypeSelected = false;
  submitted = false;
  floors: number[];

  displayData:boolean;
  secAllotData: import("c:/Users/Aswin/Documents/parking panda/parkingPanda/src/app/slot").Slot;

  constructor(private formBuilder: FormBuilder, private slotservice: DataService, private actRoute: ActivatedRoute,private route: Router) {
  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params) => {
        let id = params.sno;
        // if (id) {
          this.slotservice.getById(id).subscribe(
            (data) => { this.secAllotData = data; }
          );
        // }
        // else {
        //   this.isNew = true;
        //   this.slots = new Slot();
        // }
      }

    );
    
    this.registerForm = this.formBuilder.group({
      carId: ['', Validators.required],
      floor: [''],
      sno: [''],
      block: [''],
      driverName: ['', Validators.required],
      parkingDate: ['', Validators.required],
      parkingTime: ['', Validators.required],
      fromPlace: ['', Validators.required],
      noOfMembers: ['', Validators.required],
      toc: [''],
      pf:['']

    });

    
      this.registerForm.patchValue({
        floor: this.secAllotData.floor,
        sno: this.secAllotData.sno,
        block: this.secAllotData.block,
        toc: this.secAllotData.toc,
        pf: this.secAllotData.pf,

      });
    
  }
  

  // onVehicleChange(event) {
  //   console.log(event.target.value);
  //   const carType = event.target.value;
  //   if (carType === 'Sedan') {
  //     this.floors = [1, 2, 3];
  //   } else
  //     if (carType === 'SUV') {
  //       this.floors = [4, 5, 6];
  //     } else
  //       if (carType === 'Hatchback') {
  //         this.floors = [7, 8, 9];
  //       }
  //   this.carTypeSelected = true;
  // }

  onSubmit() {
   
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const dataToSend= this.registerForm.value;
    dataToSend.status = false;
    this.slotservice.updateSinglePlot(dataToSend).subscribe(
      () => { }
    );
    this.route.navigateByUrl("/sec-allot");
  }
}
