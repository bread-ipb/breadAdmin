import { Component } from '@angular/core';

import { PesananPage } from '../pesanan/pesanan';
import { ProdukPage } from '../produk/produk';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html',
  template: `
  <ion-tabs>
    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="chatbubbles" [root]="tabTwo"></ion-tab>
    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  tabOne:any;
  tabTwo:any;
  tabThree:any;

  constructor() {
    this.tabOne = PesananPage;
    this.tabTwo = ProdukPage;
    this.tabThree = ProfilPage;
    
  }
}
