import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage {
  contactos:any
  searchTerm: string ='';
  contactoEncontrado: any;
  check:boolean= false
  
  constructor(private contactoService: ContactoService, private toastController: ToastController) {
    this.contactos = this.contactoService.getAll();
  }

  async buscarContacto() {
    this.contactoEncontrado = this.contactoService.buscarPorNombre(this.searchTerm);
    if (this.contactoEncontrado) {
        this.check = true
    }else{
      await this.mostrarMensajeError(`No se encontró ningún contacto llamado "${this.searchTerm}".`);
    }
  }
  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000 
    });
    toast.present();
  }
    
  }



