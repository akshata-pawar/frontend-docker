import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products :any;
  constructor(public service:ProductService) { }

  ngOnInit() {
    let observable=this.service.select();
    observable.subscribe((result)=>{
      this.products= result;
    })
  }

}
