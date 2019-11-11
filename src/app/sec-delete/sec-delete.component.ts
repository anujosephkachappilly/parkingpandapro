import { Component, OnInit } from '@angular/core';
import { Slot } from '../slot';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sec-delete',
  templateUrl: './sec-delete.component.html',
  styleUrls: ['./sec-delete.component.css']
})
export class SecDeleteComponent implements OnInit {
  public slots: Slot[];
  slo: Slot;
  constructor(private slotservice: DataService) { }

  ngOnInit() {
    this.getSlots();
  }

  getSlots() {
    this.slotservice.viewSlots().subscribe(
      (data) => {
        this.slots = data;
      }
    );
  }

  delete(sno) {

    this.slotservice.getById(sno).subscribe((data) => {
      this.slo = data;
    })
    // this.slo.block=null;
    this.slo.status = true;
    this.slo.carId = null;
    this.slo.driverName = null;
    this.slo.noOfMembers = null;
    this.slo.fromPlace = null;
    this.slo.parkingDate = null;
    this.slo.parkingTime = null;

    this.slotservice.updateSinglePlot(this.slo).subscribe(
      () => { });

    this.getSlots();
  }



}