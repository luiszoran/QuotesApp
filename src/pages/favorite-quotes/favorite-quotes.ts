import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorite-quotes',
  templateUrl: 'favorite-quotes.html',
})
export class FavoriteQuotesPage {
    quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
      this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      modal.onDidDismiss((remove: boolean) => {
          if (remove)
              this.quotesService.removeQuoteFromFavorites(quote);
          this.quotes = this.quotesService.getFavoriteQuotes();
          const position = this.quotes.findIndex((quoteEl: Quote) => {
              return quoteEl.id == quote.id;
          });
          this.quotes.splice(position, 1);
      });
  }
}
