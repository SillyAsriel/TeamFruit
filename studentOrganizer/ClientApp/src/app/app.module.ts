import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { chatComponent } from './chat/chat.component';
import { ratingComponent } from './rating/rating.component';
import { raspisanieComponent } from './raspisanie/raspisanie.component';
import { MyDemoComponent } from './my-demo/my-demo.component';
import { MyDayComponent } from './my-day/my-day.component';
import { ReversePipe } from './reverse.pipe';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ratingComponent,
    HomeComponent,
    chatComponent,
    raspisanieComponent,
    MyDemoComponent,
    MyDayComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'chat', component: chatComponent },
      { path: 'rating', component: ratingComponent },
      { path: 'raspisanie', component: raspisanieComponent },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
