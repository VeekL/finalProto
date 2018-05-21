import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from './../data-service.service';

@Component({
  selector: 'app-inner-picker',
  templateUrl: './inner-picker.component.html',
  styleUrls: ['./inner-picker.component.css']
})
export class InnerPickerComponent implements OnInit {
  VidID = -1;
  public generalList = [];

  constructor(private route: ActivatedRoute, private DataFetcher: DataServiceService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('vidID');
      this.initializeGenList(id);
    })

  }

  initializeGenList(id){
    VidID = id;
    this.generalList = this.DataFetcher.getInnerPickerList(id);
  }

}
