import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  lista :any = [{
    "id":1,
    "nombre":"dani",
    "telefono":"954432742"
  },

  {
    "id":2,
    "nombre":"ale",
    "telefono":"649283019"
  },

  {
    "id":3,
    "nombre":"julian",
    "telefono":"93830203"

  }]

  id:number = 3;

  constructor() { }

  public getAll():any{
    return this.lista;
  }

  public add(contacto:any){
    this.id++
    contacto.id= this.id
  this.lista.push(contacto);
  }
  
  public buscarPorNombre(nombre: string): any {
    const resultado = this.lista.find((contacto: any) => contacto.nombre === nombre);
    return resultado;
  }
  
  public buscarPorId(id:number):any{
   const resultado = this.lista.find((contacto:any) => contacto.id == id);

    return resultado;
  }

  actualizarContacto(contactoActualizado: any) {
    const index = this.lista.findIndex((contacto: any) => contacto.id === contactoActualizado.id);
    if (index !== -1) {
      this.lista[index] = contactoActualizado;
      console.log("aqui llego", contactoActualizado)
    }
    
  }

  borrarContacto(id: number) {
    var objetoJson ; 
    var indiceObjeto;
    for (let elemento of this.lista) {
      if (elemento.id == id) {
        objetoJson = elemento;
        indiceObjeto = this.lista.indexOf(objetoJson);
        this.lista.splice(indiceObjeto,1);
      }
    }
  }
  
}
