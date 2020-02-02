import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
blogList;
  constructor() {
    this.blogList=[{
      firstName:"aravind",
      lastName:"k",
      email:"aravind606@yahoo.com",
      author:"ard",
      publishDate:3-12-1997,
      textArea:"ard bvycdi ncbdiuho  cke"
    }]
   }
}
