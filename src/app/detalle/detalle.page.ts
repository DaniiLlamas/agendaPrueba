import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
 id:any; 
contactoRecibido: any;
  navCtrl: any;
  constructor(private contactoService: ContactoService,private route:ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.id = params['id']})
    this.contactoRecibido = this.contactoService.buscarPorId(this.id);
  }

  guardarContacto() {
    const contactoEditado = { ...this.contactoRecibido };
    this.contactoService.actualizarContacto(contactoEditado);
    this.contactoRecibido = contactoEditado;
    this.router.navigate(['home'])
  }

  borrarContacto() {
    console.log('ID a borrar:', this.id); 
    this.contactoService.borrarContacto(this.id);
    console.log('lita',this.contactoService.getAll())
    this.router.navigate(['home'])
  }
}
