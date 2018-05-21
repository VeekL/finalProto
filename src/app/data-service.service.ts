import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getVidList() {
    return [
      // tslint:disable-next-line:max-line-length
      {'id' : 1, 'name': 'Traffic Vid', 'DateCreated': '24:05:2018', 'image':  '/assets/bottle.png', 'Reviewed': false, 'link': '/inner-picker'},
      // tslint:disable-next-line:max-line-length
      {'id' : 2, 'name': 'MapleTree Vid', 'DateCreated': '25:05:2018',  'image' : '/assets/bottle.png', 'Reviewed': true, 'link': '/inner-picker'},
      // tslint:disable-next-line:max-line-length
      {'id' : 3, 'name': 'Park Vid', 'DateCreated': '25:03:2018',  'image' : '/assets/bottle.png', 'Reviewed': false, 'link': '/inner-picker'}
    ];
  }

  getInnerPickerList(vidID) {
    const listA = [{'id' : 1, 'type': 'Object', 'DateCreated': '24:05:2018', 'name': 'Stick', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 2, 'type': 'Object', 'DateCreated': '23:05:2018', 'name': 'Brick', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 3, 'type': 'Scene', 'DateCreated': '20:05:2018', 'name': 'House', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 4, 'type': 'Scene', 'DateCreated': '24:03:2018', 'name': 'Accident', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 5, 'type': 'Event', 'DateCreated': '24:05:2018', 'name': 'Running', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 6, 'type': 'Event', 'DateCreated': '23:05:2018', 'name': 'Car Crash', 'Reviewed': true, 'link': '/reviewing'},
    {'id' : 7, 'type': 'Action', 'DateCreated': '20:05:2018', 'name': 'Jump', 'Reviewed': true, 'link': '/reviewing'},
    {'id' : 8, 'type': 'Action', 'DateCreated': '24:03:2018', 'name': 'Throw' , 'Reviewed': true, 'link': '/reviewing'}];

    const listB = [{'id' : 1, 'type': 'Object', 'DateCreated': '24:05:2018', 'name': 'Bowl', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 2, 'type': 'Object', 'DateCreated': '23:05:2018', 'name': 'Human Male', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 3, 'type': 'Scene', 'DateCreated': '20:05:2018', 'name': 'Mob', 'Reviewed': true, 'link': '/reviewing'},
    {'id' : 4, 'type': 'Scene', 'DateCreated': '24:03:2018', 'name': 'Accident', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 5, 'type': 'Event', 'DateCreated': '24:05:2018', 'name': 'Red light', 'Reviewed': false, 'link': '/reviewing'},
    {'id' : 6, 'type': 'Event', 'DateCreated': '23:05:2018', 'name': 'Car Crash', 'Reviewed': true, 'link': '/reviewing'},
    {'id' : 7, 'type': 'Action', 'DateCreated': '20:05:2018', 'name': 'Swim', 'Reviewed': true, 'link': '/reviewing'},
    {'id' : 8, 'type': 'Action', 'DateCreated': '24:03:2018', 'name': 'Throw', 'Reviewed': false, 'link': '/reviewing'}];

    const listC = [{'id' : 1, 'type': 'Object', 'DateCreated': '24:05:2018', 'name': 'Errrr', 'Reviewed': false, 'link': '/reviewing'}];
    if (vidID === 1) {
      return listA;
    } else if (vidID === -1) {
      // error condition TODO throw exception
      return listC;
    } else {
      return listB;
    }
  }
}
