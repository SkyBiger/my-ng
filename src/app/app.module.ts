import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { LabelDetailComponent } from './label-detail.component';
import { IndexComponent } from './index.component';
import { PageNotFoundComponent } from './not-found.component';
import { NavComponent } from './app.nav'

@NgModule({
  declarations: [
    AppComponent,
    LabelDetailComponent,
    IndexComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{
    		path:'',
    		component:NavComponent
    	},
    	{
    		path:'label/:name',
    		component:IndexComponent
    	},
    	{
    		path:'detail/:id',
    		component:LabelDetailComponent
    	},
    	{
    		path:'**',
    		component:PageNotFoundComponent
    	}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
