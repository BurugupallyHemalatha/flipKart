import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoreComponent } from './Components/more/more.component';
import { LoginComponent } from './Components/login/login.component';
import { TopOffersComponent } from './Components/AllProducts/top-offers/top-offers.component';
import { GroceryComponent } from './Components/AllProducts/grocery/grocery.component';
import { MobilesComponent } from './Components/AllProducts/mobiles/mobiles.component';
import { FashionComponent } from './Components/AllProducts/fashion/fashion.component';
import { ElectronicsComponent } from './Components/AllProducts/electronics/electronics.component';
import { HomeComponent } from './Components/AllProducts/home/home.component';
import { AppliancesComponent } from './Components/AllProducts/appliances/appliances.component';
import { TravelComponent } from './Components/AllProducts/travel/travel.component';
import { NavbarComponent } from './Components/SharePage/navbar/navbar.component';
import { FooterComponent } from './Components/SharePage/footer/footer.component';
import { BecomeSellerComponent } from './Components/become-seller/become-seller.component';
import { CartComponent } from './Components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
   AppComponent,
   MoreComponent,
   LoginComponent,
   TopOffersComponent,
   GroceryComponent,
   MobilesComponent,
   FashionComponent,
   ElectronicsComponent,
   HomeComponent,
   AppliancesComponent,
   TravelComponent,
   NavbarComponent,
   FooterComponent,
   BecomeSellerComponent,
   CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
