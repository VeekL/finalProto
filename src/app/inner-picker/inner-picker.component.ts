import { Component, OnInit } from '@angular/core';
import {DataServiceService} from './../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inner-picker',
  templateUrl: './inner-picker.component.html',
  styleUrls: ['./inner-picker.component.css']
})
export class InnerPickerComponent implements OnInit {
  order: string;

  public generalList = [];

  constructor() { }

  ngOnInit() {}







}
