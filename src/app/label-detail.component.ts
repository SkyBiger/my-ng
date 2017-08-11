import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';

import { Label } from './label';
import { CssList } from './data';

@Component({
   template:`
		   	<h1>Details</h1>
			<div>{{demo2}}</div>
   		`
})
export class LabelDetailComponent implements OnInit {
	demo:Label;
	demo2 = '1';
	constructor(
		private router:Router,
		private route: ActivatedRoute,
	){}
	ngOnInit() {
		console.log(this.route.params);
	}

}
