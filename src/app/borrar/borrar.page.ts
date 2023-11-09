import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';


@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage{

  contactos: { id:number, nombre: string; telefono: string }[] = [];
  searchTerm: string = '';

  constructor(private contactoService: ContactoService) {
    this.contactos = this.contactoService.getAll();
  }

  buscarContacto() {
    const id = this.contactos.find(c => c.nombre === this.searchTerm)?.id;
  
    if (id) {
      // Buscar el contacto por ID
      const contacto = this.contactos.find(c => c.id === id);
      console.log('Nombre: ' + contacto?.nombre + ', Teléfono: ' + contacto?.telefono);
    } else {
      // Mostrar un mensaje si el nombre no se encuentra
      console.log('Nombre no encontrado');
    }
  }
  

}
