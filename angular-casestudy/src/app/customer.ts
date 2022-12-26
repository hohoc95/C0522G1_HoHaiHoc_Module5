export class Customer {
id: number;
name: string;
gender: number;
idCarrd: string;
phone: string;
customertype: string;

  constructor(id: number, name: string, gender: number, idCarrd: string, phone: string, customertype: string) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.idCarrd = idCarrd;
    this.phone = phone;
    this.customertype = customertype;
  }
}
