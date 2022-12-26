import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityServiceService} from '../service/facility-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  facility: Facility[] = [];

  constructor(private facilityService: FacilityServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facility = this.facilityService.getAll();
  }
}
