import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  contacto:any;
  idContacto:string;

  ngOnInit(): void {
    // http://localhost:4200/contacto/64ae01940258eea066280d0d/parametro2/parametro3

    this.route.params.subscribe(params => {
      this.idContacto=params['id'];
      
    })

    this.consultarContacto(this.idContacto);
  }
  consultarContacto(idContacto: string) {
    const url = `http://localhost:3000/contacto/${idContacto}`;
    this.http.get(url).subscribe  (data => {
      this.contacto = data;
    })
  }

}