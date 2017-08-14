import 'rxjs/add/operator/switchMap';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
import { Location }  from '@angular/common';

import { Label } from './label'
import { DataService } from './data.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./common.css','./app.component.css']
})
export class IndexComponent implements OnInit {
  title = 'app';
 	demos:Label[];
  
  constructor(
  		private location: Location,
  		private router:Router,
			private route: ActivatedRoute,
			private heroService: DataService
  ){}
  
  getLabels(x){
  	this.heroService.getLabels(x).then(heroess => this.demos = heroess)
  }
  ngOnInit(){
		  var name =this.route.snapshot.paramMap.get('name');
		  localStorage.setItem("page",name);
		  this.getLabels(name);
  }
  
  goBack(): void {
	    this.location.back();
  }
  
}
