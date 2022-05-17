import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Kevin';
  genero: string = 'masculino';

  
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18nPlural
  clientes: string[] = ['Maria','Jose','Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente(){

    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
    this.nombre = this.nombre === 'Kevin' ? 'Sandra' : 'Kevin';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre:'Fernando',
    edad: 34,
    direccion: 'Otawa, Canadá'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
    
  ]

  
    // Async Pipe
    miObservable = interval( 1000 );



    valorPromesa = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve('Tenemos data de promesa');
      }, 3500);



    });
}
