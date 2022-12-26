import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  facilityList = new Array();

  constructor() {
    this.facilityList.push({
      facilityId: 1, facilityName: 'home', facilityArea: 131,
      facilityCost: 343, maxPeople: 12, standardRoom: 'fdsf', description: 'sff'
      , poolArea: 213, numberOfFloors: 23, facilityFree: 'xe đạp', rentType: 'sds'
      , facilityType: 'villa'
    });
    this.facilityList.push({
      facilityId: 2, facilityName: 'villa', facilityArea: 131,
      facilityCost: 343, maxPeople: 12, standardRoom: 'fdsf', description: 'sff'
      , poolArea: 213, numberOfFloors: 23, facilityFree: 'xe đạp', rentType: 'sds'
      , facilityType: 'villa'
    });
  }
  getAll() {
    return this.facilityList;
  }
}
