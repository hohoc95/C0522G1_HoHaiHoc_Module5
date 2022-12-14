import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RentType} from '../../model/rent-type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  facilityFormGroup: FormGroup;
  facilityId: number;
  facilityTypeDisplay: string;
  rentTypeList: RentType[];

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.findAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });

    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    // });
    this.facilityId = Number(this.activatedRoute.snapshot.params.id);

    this.facilityService.getById(this.facilityId).subscribe(value => {
      this.facilityFormGroup = new FormGroup({
        facilityName: new FormControl(value.facilityName, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        facilityArea: new FormControl(value.facilityArea, [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        rentCost: new FormControl(value.rentCost, [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        maxPeople: new FormControl(value.maxPeople, [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        standardRoom: new FormControl(value.standardRoom),
        descriptionOtherConvenience: new FormControl(value.descriptionOtherConvenience),
        poolArea: new FormControl(value.poolArea),
        numberOfFloors: new FormControl(value.numberOfFloors),
        facilityFree: new FormControl(value.facilityFree),
        rentType: new FormControl(value.rentType, Validators.required),
        facilityType: new FormControl(value.facilityType, Validators.required),
        facilityImage: new FormControl(value.facilityImage, Validators.required)
      });

      this.facilityTypeDisplay = value.facilityType.facilityTypeName;
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityFormGroup.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Ch???nh s???a th??nh c??ng!',
        text: 'D???ch v???: ' + facility.facilityName,
        imageUrl: facility.facilityImage,
        imageHeight: 250,
        imageWidth: 400,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.router.navigateByUrl('facility/list');
    }, error => {
      console.log(error);
    }, () => {
      console.log('C???p nh???t d???ch v??? th??nh c??ng!');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }}
