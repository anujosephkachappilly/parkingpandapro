import { Time } from '@angular/common';

export class Slot
{
    sno:number;
    floor:number;
    block:string;
    toc:string;
    pf:number;
    status:boolean;
    carId:string;
    driverName:string;
    fromPlace:string;
    noOfMembers:number;
    parkingDate: Date;
    parkingTime: Time;
}