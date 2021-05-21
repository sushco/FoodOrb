import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { HeaderComponent } from './header/header.component';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';

const routes: Routes = [

  { path: '', component: HeaderComponent,children: [
  {
      path:"",
      component:ListFoodComponent
    }]},
  {
    path:"login",
    component:LoginComponent
  },


  {
    path:"register",
    component:RegisterComponent
  },

  { path: '', component: HeaderComponent, children: [
    {
      path:"home",
      component:ListFoodComponent
    },

  {
    path:"forgotpw",
    component:ForgotpwComponent
  },
  {
    path:"list-food",
    component:ListFoodComponent
  },
  {
    path:"userSettings",
    component:UsersettingsComponent
  },
  {
    path:"list-card",
    component:ListCardComponent
  },
  {
    path:"address",
    component:ListAddressComponent
  },
  {
    path:"addAddress",
    component:AddAddressComponent
  },
  {
    path:"editAddress",
    component:EditAddressComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"list-cart",
    component:ListCartComponent
  },
  {
    path:"orderDetails",
    component:OrderDetailsComponent
  }
] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
