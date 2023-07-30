import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  contactos: any[]; // Declara una variable para almacenar los elementos de la API

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.obtenerElementosDesdeAPI();
  }

  obtenerElementosDesdeAPI() {

    this.http.get<any[]>('http://localhost:3000/contacto')
      .subscribe(data => {
        this.contactos = data; // Almacena los datos de la API en la variable "elementos"
      });
  /*this.contactos = [
    { id: 1, nombre: 'Josue Guardado', email: 'demo@gmail.com',telefono:784512366 },
    { id: 2, nombre: 'Jaime Perez', email: 'demo@gmail.com',telefono:784512366 },
    { id: 2, nombre: 'David Perez', email: 'demo@gmail.com',telefono:784512366 },
    { id: 3, nombre: 'Rosita Lopez', email: 'demo@gmail.com',telefono:784512366 },
    // Agrega más elementos aquí si es necesario
  ];*/
}
}

