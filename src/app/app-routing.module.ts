import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { UserContainerComponent } from './modules/core/user/user-container/user-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainerComponent } from './modules/core/order/order-container/order-container.component';

const routes: Routes = [
  {path: '', component: UserContainerComponent},
  {path:'**', component: NotFoundComponent},
  {path:'order', component: OrderContainerComponent},
  {path: 'user', component: UserContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
