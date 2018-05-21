import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-picker-vid',
  templateUrl: './main-picker-vid.component.html',
  styleUrls: ['./main-picker-vid.component.css']
})
export class MainPickerVidComponent implements OnInit {

  public vidList = [];

  constructor(private _vidListService: DataServiceService) { }

  ngOnInit() {
    this.vidList = this._vidListService.getVidList();
  }

}
