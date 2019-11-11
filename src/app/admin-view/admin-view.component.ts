import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slot } from '../slot';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  public slots: Slot[];
  slo: Slot;
  constructor(
    private slotservice: DataService
  ) { }

  ngOnInit() {
    this.slotservice.viewSlots().subscribe(
      (data) => { 
        this.slots = data;
        console.log(this.slots);
      }      
    );
  }
  delete(sno) {

    this.slotservice.getById(sno).subscribe((data) => {
      this.slo = data;
    })


    this.slotservice.remove(this.slo).subscribe(
      () => { });
  }
}

