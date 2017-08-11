import { Component } from '@angular/core';

import { CssList } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./common.css','./app.component.css']
})
export class IndexComponent {
  title = 'app';
  demos = CssList;
  select = function(a){
  	
  }
}
