import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  facilityName?: string;
  facilityArea?: number;
  rentCost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  rentType?: RentType;
  facilityType?: FacilityType;
  facilityImage?: string;
}
