import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { LabelDetailComponent } from './label-detail.component';
import { IndexComponent } from './index.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelDetailComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{
    		path:'label',
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
