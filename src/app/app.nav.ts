import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  	<nav>
		<a [routerLink]="['/label','CSS']" routerLinkActive="active" >CSS</a>
		<a [routerLink]="['/label','HTML']" routerLinkActive="active">HTML</a>
		<a [routerLink]="['/label','Javascript']" routerLinkActive="active">Javascript</a>
		<a [routerLink]="['/label','Article']" routerLinkActive="active">杂文</a>
	</nav>
  	`,
	styleUrls:['./app.component.css']
})
export class NavComponent {
  
}
