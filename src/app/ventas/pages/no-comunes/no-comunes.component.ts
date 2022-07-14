import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  // Para i18nSelect
  nombre: string = 'Javier';
  gender: string = 'male';

  invitacionMapa = {
    'male': 'chico',
    'female': 'chica'
  }

  // Para i18nPlural
  clientes: string[] = ['Rocio', 'Javier', 'Irene', 'Blanca', 'Mateo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {

    if (this.nombre == 'Javier') {
      this.nombre='Rocio'
      this.gender='female'
    } else {
      this.nombre='Javier'
      this.gender='male'
    }
  }

  atenderCliente() {
    this.clientes.pop()
  }

  // KeyvaluePipe
  persona = {
    nombre: 'Javier',
    edad: 44,
    direccion: 'Valencia, España'
  }

  // JSON Pipe
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
  miObservable = interval(2000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );
  });

}
