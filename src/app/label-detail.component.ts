import 'rxjs/add/operator/switchMap';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
import { Location }  from '@angular/common';

import { Label } from './label';
import { DataService } from './data.service';

@Component({
   template:`
   			<div *ngIf="demo">
		   		<h1>{{demo.name}} details</h1>
				<div>{{demo.content}}</div>
			</div>
			<button (click)='goBack()'>return</button>
   		`,
   	styles:[`
   		button{
		background:#666;
		color:#fff;border-radius: 5px;
		margin:20px 0;padding: 10px 15px;
		cursor:pointer
	}
	button:hover{
		background: #999;
	}
   	`]
})
export class LabelDetailComponent implements OnInit {
	demo:Label;
	constructor(
		private router:Router,
		private route: ActivatedRoute,
		private location: Location,
		private dataService:DataService

	){}
	getLabel(x,y){
		this.dataService.getLabels(y).then(heroess=>{
			heroess.map(item=>{if(item.id==x) this.demo=item});
		});
	}
	ngOnInit() {
    	let name = localStorage.getItem("page");
	    let id = Number(this.route.snapshot.paramMap.get('id'));
	    this.getLabel(id,name);
	}
	 goBack(): void {
	    this.location.back();
	  }

}
