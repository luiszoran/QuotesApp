import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoriteQuotesPage } from '../favorite-quotes/favorite-quotes';
import { QuotesLibraryPage } from '../quotes-library/quotes-library';


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `<ion-tabs>
              <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
              <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
             </ion-tabs>`
})
export class TabsPage {

    favoritesPage = FavoriteQuotesPage;
    libraryPage = QuotesLibraryPage;

}
