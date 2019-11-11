import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Slot } from '../slot';

@Component({
  selector: 'app-sec-allot',
  templateUrl: './sec-allot.component.html',
  styleUrls: ['./sec-allot.component.css']
})
export class SecAllotComponent implements OnInit {
  public slots: Slot[];
  constructor(private slotservice: DataService
    ) { }

  ngOnInit() {
    this.slotservice.viewSlots().subscribe(
      (data) => { 
        this.slots = data;
        console.log(this.slots);
      }      
    );
  }

}
