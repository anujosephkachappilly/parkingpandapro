import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Slot } from '../slot';
// import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  isNew: boolean;
  slots: Slot;
  parkingSlotForm: FormGroup;
  listData: Slot[];
  constructor(private formBuilder: FormBuilder, private slotservice: DataService, private route: Router
    , private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params) => {
        let id = params.sno;
        if (id) {
          this.isNew = false;
          this.slotservice.getById(id).subscribe(
            (data) => { this.slots = data; }
          );
        }
        else {
          this.isNew = true;
          this.slots = new Slot();
        }
      }

    );
  }
  addSlot() {
    if (this.isNew) {
      this.slotservice.viewSlots().subscribe(
        (data) => { this.listData = data; }
      );

      let isReplica = false;
      this.listData.forEach(space => {
        if (space.sno == this.slots.sno) {
          isReplica = true;
          alert('slot already exists');
        }
      });
      if (!isReplica) {
        alert("Submision successfull");
        this.slots.status = true;
        this.slots.parkingTime=null;
        this.slots.fromPlace=null;
        this.slots.noOfMembers=null;
        this.slots.parkingDate=null;
        this.slots.carId=null;
        this.slots.driverName=null;
        this.slotservice.addSlots(this.slots).subscribe(
          () => { }
        );
        this.route.navigateByUrl("/admin-view");

      }

    }
    else {
     
      this.slots.status = true;
        this.slots.parkingTime=null;
        this.slots.fromPlace=null;
        this.slots.noOfMembers=null;
        this.slots.parkingDate=null;
        this.slots.carId=null;
        this.slots.driverName=null;
        
      this.slotservice.updatePlot(this.slots).subscribe(
        () => { }
      );
      this.route.navigateByUrl("/admin-view");
    }

  }

}
