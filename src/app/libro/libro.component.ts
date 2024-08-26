import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { libro } from '../Entidades/libro';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
})



export class LibroComponent implements OnInit   {


  formulario!: FormGroup;
  // nombreControl!: FormControl; // Nuevo: Creamos un FormControl para el campo "nombre"
  // emailControl!: FormControl; // Nuevo: Creamos un FormControl para el campo "email"
  // telefonoControl!: FormControl; // Nuevo: Creamos un FormControl para el campo "telefono"

  readonly tituloControl = this.formBuilder.control('');
  readonly anioControl = this.formBuilder.control('');
  readonly nPaginasControl = this.formBuilder.control('');
  readonly autorControl = this.formBuilder.control('');
  readonly formGroup = this.formBuilder.group({
    titulo: this.tituloControl,
    anio: this.anioControl,
    nPaginas: this.nPaginasControl,
    autor: this.autorControl
  });



  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    // // Creamos el formulario reactivo con los campos y validaciones

     this.formulario = this.formBuilder.group({
      titulo: "this.tituloControl",
      anio: 3344,
      nPaginas: 555,
      autor: "this.autorControl",
      error:false,
      errorDetalle:""
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
 






 


