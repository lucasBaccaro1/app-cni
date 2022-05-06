import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-refrigeracion',
  templateUrl: './refrigeracion.component.html',
  styleUrls: ['./refrigeracion.component.css']
})
export class RefrigeracionComponent implements OnInit {


  productosRefrigeracion: any[] = [];

  modelName: any
  constructor(private _productosRefrigeracionService: ProductosService,private spinner: NgxSpinnerService) { }


  onChangeCheck($event : any){

  }

  valorInputName($event:any){

  }

  getProductosRefrigeracion(){

    this._productosRefrigeracionService.getProductosRefrigeracionService().subscribe(data =>{
      this.productosRefrigeracion = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.id)
        // console.log(data);
        this.productosRefrigeracion.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.productosMascotas )
    })
  }
  ngOnInit(): void {
    this.getProductosRefrigeracion();

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
