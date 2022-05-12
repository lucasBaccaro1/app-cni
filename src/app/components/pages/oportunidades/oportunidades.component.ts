import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit {

  mensajeProducto: any[] = [];
  mensajeFinal: any;


  productosOportunidades: any[] = [];

  constructor(private _productosOportunidadesService: ProductosService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.getProductosOportunidades();


  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 2000);
  }


  onChangeCheck($event: any) {
    //  this.mensajeProducto = $event.target.value
    if ($event.target.checked == true) {
      this.mensajeProducto.push($event.target.value)
    } else {
      this.mensajeProducto.splice(this.mensajeProducto.indexOf($event.target.value), 1)
    }
    this.mensajeFinal = this.mensajeProducto.join("-")
    console.log(this.mensajeFinal)
  }

  getProductosOportunidades() {

    this._productosOportunidadesService.getProductosOportunidadesService().subscribe(data => {
      this.productosOportunidades = [];
      data.forEach((element: any) => {
        // console.log(element.payload.doc.id)
        // console.log(data);
        this.productosOportunidades.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.productosMascotas )
    })
  }


}
