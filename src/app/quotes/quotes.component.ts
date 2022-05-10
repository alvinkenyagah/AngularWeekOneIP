import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quotes[]= [new Quotes("Hakuna matata", "Lion King", "Alvin", new Date(2022,5,9)),]
  addQuote(lg:Quotes){
    this.quote.push(lg)
  }
  deleteQuote(i:any){this.quote.splice(i,1)}


  numberOfLikes : number = 0
  

  likeButtonClick(i: number) {
    this.numberOfLikes ++;

  }

  numberOfDislikes : number = 0

  dislikeButtonClick() {
    this.numberOfDislikes++;
    
  }
  // mostLikes!: number 
  // leastLikes!: number
  // count!: number

  // highest() {
  //   this.mostLikes = 0;
  //   this.leastLikes = 0;
  //   for(this.count = 0; this.count< this.quote.length; this.count ++) {
  //     this.leastLikes = (this.quote[this.count].like);
  //     if(this.leastLikes>this.mostLikes) {this.mostLikes = this.leastLikes}
  //   }
  //   return this.mostLikes
  // }

  constructor(){

  }


  ngOnInit(): void {
  

}
}
