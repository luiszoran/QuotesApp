import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
    quoteGroup: { category: string, quotes: Quote[], icon: string };
    constructor(private navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
        this.quoteGroup = this.navParams.data;
    }

    onAddToFavorites(selectedQuote: Quote) {
        const alert = this.alertCtrl.create({
            title: 'Add Quote',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.quotesService.addQuoteToFavorites(selectedQuote);
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        console.log('No');
                    }
                }
            ],
        });

        alert.present();
    }

    onRemoveFromFavorites(quote: Quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
    }

    isFavorite(quote: Quote) {
        return this.quotesService.isQuoteFavorite(quote);
    }
}
