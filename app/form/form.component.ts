import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataserviceService} from '../dataservice.service';
import { Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   userform:FormGroup;
  constructor(public a:DataserviceService, private routs:Router) {
  
    this.userform = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      author: new FormControl(),
      publishDate: new FormControl(),
      textArea: new FormControl()
    })
  }

  ngOnInit() {
  }
  onsubmit(){
    this.a.blogList.push(this.userform.value);
    this.routs.navigate(['topbar/card']);
  }

}
