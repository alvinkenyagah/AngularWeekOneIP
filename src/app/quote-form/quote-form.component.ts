import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output()q = new EventEmitter<Quotes>();
  newQuote = new Quotes("", "", "", new Date())
  
  addQuote(){
    this.q.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
