import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';
import {ArraySortPipe} from './ordering.pipe';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ColorsService],
})
export class AppComponent implements OnInit {
  allArray;
  allArrayItems;
  colors: any;
  constructor(private _colorsService: ColorsService) { }

  ngOnInit() {
    let tempColorObj: any;
    let allColor: any;
    console.log(allColor);
    this._colorsService.getColors().subscribe(
      (response) => {
        this.colors = response;
        tempColorObj = JSON.stringify(response);
        this.allArray = JSON.parse(tempColorObj);
        this.allArrayItems = this.allArray.colorsArray;
        console.log(this.allArray.colorsArray);
      });
  }
}
