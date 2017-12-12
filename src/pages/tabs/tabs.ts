import { Component } from '@angular/core';

import { PesananPage } from '../pesanan/pesanan';
import { ProdukPage } from '../produk/produk';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PesananPage;
  tab2Root = ProdukPage;
  tab3Root = ProfilPage;

  constructor() {

  }
}
