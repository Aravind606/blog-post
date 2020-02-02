import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  constructor(public data:DataserviceService) { }
  blogList=this.data.blogList;

  ngOnInit() {
  }

}
