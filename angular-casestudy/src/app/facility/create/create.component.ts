import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  facilityFormGroup: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });

  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  facilityType: FacilityType = {
    id: 4,
    facilityTypeName: ''
  };

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilityType().subscribe(value => {
      this.facilityTypeList = value;
    });

    this.facilityService.findAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.addFacility(facility).subscribe(() => {
      this.facilityFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Dịch vụ: ' + facility.facilityName,
        imageUrl: 'http://imgarcade.com/1/mangekyou-sharingan-gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.router.navigateByUrl('facility/list');
      console.log('Thêm mới dịch vụ thành công!');
    });
  }}
