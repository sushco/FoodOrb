import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { MustMatchDirective } from './directives/must-match.directive';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpwComponent,
    ListFoodComponent,
    UsersettingsComponent,
    ListCardComponent,
    ListAddressComponent,
    AddAddressComponent,
    EditAddressComponent,
    ProfileComponent,
    OrderDetailsComponent,
    ListCartComponent,
    MustMatchDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
