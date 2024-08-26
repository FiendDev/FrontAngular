import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styles: [
  ]
})
export class GrillaComponent implements OnInit {
  data: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ) {

console.log(valor);

          this.http.get('https://localhost:7059/api/Index/GetLibros')
          .subscribe((data: any) => {
              this.data = data;
                  console.log(this.data)
          })



  //   if ( this.progreso >= 100 && valor >= 0 ) {
  //     this.valorSalida.emit(100);
  //     return this.progreso = 100;
  //   }

  //   if ( this.progreso <= 0 && valor < 0 ) {
  //     this.valorSalida.emit(0);
  //     return this.progreso = 0;
  //   }

  //   this.progreso = this.progreso + valor;
  //   this.valorSalida.emit( this.progreso );
  }

  onChange( nuevoValor: number ){
    
    // if( nuevoValor >= 100 ) {
    //   this.progreso = 100;
    // } else if ( nuevoValor <= 0 ) {
    //   this.progreso = 0;
    // } else {
    //   this.progreso = nuevoValor;
    // }

    

    // this.valorSalida.emit( this.progreso );
  }


}
