import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LabelDetailComponent } from './label-detail.component';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelDetailComponent,
    IndexComponent
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
    	}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
