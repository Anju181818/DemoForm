import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
const routes:Routes=[
  {path:"",redirectTo:"Guest",pathMatch:'full'},
  {path:"Guest",component:GuestComponent},
  {path:"Admin",component:AdminComponent,canActivate: [AuthGuard]},
  {path:"**",component:PageNotFoundComponent}

]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
