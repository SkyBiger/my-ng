import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { CssList } from './data';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./common.css','./app.component.css']
})
export class IndexComponent {
  title = 'app';
  demos = CssList;
  constructor(
  		private location: Location
  ){}
  goBack(): void {
	    this.location.back();
  }
}
