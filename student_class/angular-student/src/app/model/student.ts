import {Class} from "./class";

export interface Student {
  id?:number;
  studentName?:string;
  studentGender?:number;
  studentAge?:number;
  studentAddress?:string
  studentPoint?:number;
  class?: Class;
}
