import { Injectable } from '@angular/core';
import { Slot } from './slot';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  slots1:Slot;
public slots:Array<Slot>=[
  {sno:1,floor:1,block:'A',toc:'SUV',pf:20,status:true,carId:null,driverName:null,fromPlace:null,noOfMembers:null,parkingDate:null,parkingTime:null},
  {sno:2,floor:1,block:'B',toc:'Sedan',pf:10,status:true,carId:null,driverName:null,fromPlace:null,noOfMembers:null,parkingDate:null,parkingTime:null},
  {sno:3,floor:2,block:'D',toc:'SUV',pf:20,status:true,carId:null,driverName:null,fromPlace:null,noOfMembers:null,parkingDate:null,parkingTime:null}
]
  constructor() { }
  viewSlots():Observable<Slot[]>
  {
     return new Observable(
       (observer)=>{
         observer.next(this.slots);
         observer.complete();
       }
     );
  }
  addSlots(slot:Slot):Observable<any>
  {
     return new Observable(
       (observer)=>{
        //  alert(slot.sno+"slot num");
        //  alert(slot.floor+"slot f");
        //  alert(slot.block+"slot b");
        //  alert(slot.toc+"slot toc");
        //  alert(slot.pf+"slot pf");
         if(slot.sno==null||slot.floor==null||slot.block==null||slot.toc==null||slot.pf==null)
         {
           alert("Please enter the full details");
         }
         else{
           this.slots.push(slot);
           observer.complete();
         }
       }
     )
  }

  updatePlot(slots: Slot):Observable<Slot> {
    let result:Observable<Slot>=new Observable(
      (observer)=>{
        this.slots.splice(this.slots.indexOf(slots),1);
        this.slots.push(slots);
        observer.complete();
      }
    );
    return result;
  }

  updateSinglePlot(slots: Slot):Observable<Slot> {
    let result:Observable<Slot>=new Observable(
      (observer)=>{

        this.slots.forEach((element, index) => {
          if(element.sno === slots.sno) {
            this.slots[index] = slots;
          }
      });
      observer.complete();

      }
    );
    return result;
  }






  getById(sno : number): Observable<Slot>{
    return new Observable(
      (observer) => {
        //console.log(this.contact)
        observer.next(this.slots.find( i => i.sno ==sno));
              observer.complete();
      }
    )
  }
  
  remove(slots: Slot) :Observable<any>{
    
    return new Observable(
      (observer)=>{
        var index=this.slots.indexOf(slots);
        if(index>-1)
        {
          this.slots.splice(index,1);
          alert("Deletion Success")
        }
        observer.complete();
      }
    )
  }
}

