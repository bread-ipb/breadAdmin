import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PesananPage } from '../pages/pesanan/pesanan';
import { ProdukPage } from '../pages/produk/produk';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailpesananPage } from '../pages/detailpesanan/detailpesanan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PesananPage,
    ProdukPage,
    ProfilPage,
    TabsPage,
    DetailpesananPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PesananPage,
    ProdukPage,
    ProfilPage,
    TabsPage,
    DetailpesananPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
