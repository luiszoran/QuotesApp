import { Component } from '@angular/core';
import { IonicPage, ModalController, MenuController } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { SettingsService } from "../../services/settings";
import { QuotePage } from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorite-quotes',
  templateUrl: 'favorite-quotes.html',
})
export class FavoriteQuotesPage {
    quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
      this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      modal.onDidDismiss((remove: boolean) => {
          if (remove)
              this.onRemoveFromFavorites(quote);
      });
  }

  onRemoveFromFavorites(quote: Quote) {
      this.quotesService.removeQuoteFromFavorites(quote);
      this.quotes = this.quotesService.getFavoriteQuotes();
      const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
      });
      this.quotes.splice(position, 1);
  }

  getBackgroundSetting() {
      return this.settingsService.getCurrentSetting() ? "quoteBackground" : "altQuoteBackground";
  }
}
