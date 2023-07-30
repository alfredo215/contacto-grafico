import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  contacto: any;
  idContacto: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idContacto = params['id'];
      this.consultarContacto(this.idContacto);
    });
  }

  consultarContacto(idContacto: string) {
    const url = `http://localhost:3000/contacto/${idContacto}`;
    this.http
      .get(url)
      .subscribe((data) => {
        this.contacto = data;
      });
  }

  eliminarContacto() {
    const confirmacion = window.confirm('¿Estás seguro de querer eliminar este contacto?');
    if (confirmacion) {
      const url = `http://localhost:3000/contacto/${this.idContacto}`;
      this.http
        .delete(url)
        .pipe(
          map((response) => response)
        )
        .subscribe(
          (data) => {
            console.log('Contacto eliminado correctamente');
            // Navegar a la página del formulario después de eliminar
            this.router.navigate(['/']); // Cambia '/' por la ruta que corresponda a tu formulario
          },
          (error) => {
            console.error('Error al eliminar el contacto:', error);
          }
        );
    }
  }
}
