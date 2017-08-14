import 'rxjs/add/operator/switchMap';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
import { Location }  from '@angular/common';


import { Label } from './label';
import { CssList } from './data';

@Component({
   template:`
		   	<h1>Details</h1>
			<div>{{demo.content}}</div>
			<div>{{demo.name}}</div>
			<div>{{demo.id}}</div>
			<button (click)='goBack()'>return</button>
   		`,
   	styles:[`
   		button{
   			background:#fff;
   			color:#666;
   			margin:20px 0;
   			cursor:pointer
   		}
   	`]
})
export class LabelDetailComponent implements OnInit {
	demo:Label;
	List = CssList;
	constructor(
		private router:Router,
		private route: ActivatedRoute,
		private location: Location

	){}
	ngOnInit() {
	  let id = Number(this.route.snapshot.paramMap.get('id'));
	  this.List.map(item=>{if(item.id==id) this.demo=item})
	}
	 goBack(): void {
	    this.location.back();
	  }

}
