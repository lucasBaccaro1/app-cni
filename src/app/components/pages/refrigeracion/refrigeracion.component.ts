import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-refrigeracion',
  templateUrl: './refrigeracion.component.html',
  styleUrls: ['./refrigeracion.component.css']
})
export class RefrigeracionComponent implements OnInit {

  mensajeProducto: any[] = [];
  mensajeFinal: any;

  productosRefrigeracion: any[] = [];
  constructor(private _productosRefrigeracionService: ProductosService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProductosRefrigeracion();

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  getProductosRefrigeracion() {

    this._productosRefrigeracionService.getProductosRefrigeracionService().subscribe(data => {
      this.productosRefrigeracion = [];
      data.forEach((element: any) => {
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

  onChangeCheck($event: any) {
    if($event.target.checked == true){
      this.mensajeProducto.push($event.target.value)
    }else{
      this.mensajeProducto.splice( this.mensajeProducto.indexOf($event.target.value),1)
    }
    this.mensajeFinal = this.mensajeProducto.join("-")
    console.log(this.mensajeFinal)
  }

  onItemChange(value : any){
    console.log(" Value is : ", value );
  }

}
