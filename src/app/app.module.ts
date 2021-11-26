import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { OrderContainerComponent } from './modules/core/order/order-container/order-container.component';
import { OrderListComponent } from './modules/core/order/order-list/order-list.component';
import { OrderSingleComponent } from './modules/core/order/order-single/order-single.component';
import { OrderDetailComponent } from './modules/core/order/order-detail/order-detail.component';
import { UserContainerComponent } from './modules/core/user/user-container/user-container.component';
import { UserListComponent } from './modules/core/user/user-list/user-list.component';
import { UserDetailComponent } from './modules/core/user/user-detail/user-detail.component';
import { UserSingleComponent } from './modules/shared/user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
