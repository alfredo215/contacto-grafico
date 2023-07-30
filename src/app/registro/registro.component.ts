import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formulario: FormGroup ;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    //FORMULARIO REACTIVO

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });


  }

  onSubmit() {
    if (this.formulario.valid) {
      const url = 'http://localhost:3000/contacto'; 
      const jsonData = this.formulario.value;
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      this.http.post(url, jsonData, httpOptions)
        .subscribe(
          (data) => {
            // Manejar la respuesta de la API
            console.log('Respuesta de la API:', data);
          },
          (error) => {
            // Manejar errores
            console.error('Error al enviar el formulario:', error);
          }
        );
    }
  }
}
