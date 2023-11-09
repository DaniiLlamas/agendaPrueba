import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {
  formu = new FormGroup({
    nombre:new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono:new FormControl('',[Validators.required,Validators.minLength(9)])
  })
  formu2 = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  })
  constructor(private scont : ContactoService) {}
  
  ngOnInit() {
  }
  submit(){
  
   console.log(this.formu.value)
   this.scont.add(this.formu.value);
   console.log(this.scont.getAll());
  }
}
