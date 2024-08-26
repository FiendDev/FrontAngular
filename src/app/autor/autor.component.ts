import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styles: [
  ]
})
export class AutorComponent implements OnInit {


  formulario!: FormGroup;


  readonly RutoControl = this.formBuilder.control('');
  readonly NombreControl = this.formBuilder.control('');
  readonly fechaControl = this.formBuilder.control('');
  readonly emailControl = this.formBuilder.control('');
  readonly formGroup = this.formBuilder.group({
    rut: this.RutoControl,
    nombre: this.NombreControl,
    email: this.emailControl,
    fecha: this.fechaControl,

  });


  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {

    
    this.formulario = this.formBuilder.group({
      rut: "this.RutoControl",
      nombre: "this.NombreControl",
      email: "this.emailControl",
      fecha: "this.fechaControl",
     });
  }


  enviarFormulario(): void {
    console.warn(this.formulario.value);
    let body = JSON.stringify(this.formulario.value);

   const headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Headers', 'Content-Type');
   headers.append('Access-Control-Allow-Methods', 'POST');
   headers.append('Access-Control-Allow-Origin', '*');
  
    this.http.post('https://localhost:7059/api/Index/CrearLibro',this.formulario.value,{headers},)
  .subscribe(
    resp => {
      console.log(resp)
      
    },
    (error) => {
      
    }
  );
  }

}
