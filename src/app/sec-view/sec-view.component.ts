import { Component, OnInit } from '@angular/core';
import { Slot } from '../slot';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sec-view',
  templateUrl: './sec-view.component.html',
  styleUrls: ['./sec-view.component.css']
})
export class SecViewComponent implements OnInit {
  public slots: Slot[];
  flag:false;
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


}
