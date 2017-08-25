import { Component,  OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesPage } from '../quotes/quotes'
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes-library',
  templateUrl: 'quotes-library.html',
})
export class QuotesLibraryPage implements OnInit {
    quoteCollection: { category: string, quotes: Quote[], icon: string }[];
    quotesPage = QuotesPage;

    ngOnInit(){
        this.quoteCollection = quotes;
    }
}
