import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent implements OnInit {

  data: any[] = [];
  constructor( private http: HttpClient  ) { }


  ngOnInit(): void {


    this.http.get('https://localhost:7059/api/Index/GetLibros')
    .subscribe((data: any) => {
        this.data = data;
            console.log(this.data)
    })


  }

}
