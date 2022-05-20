import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-aires',
  templateUrl: './aires.component.html',
  styleUrls: ['./aires.component.css']
})
export class AiresComponent implements OnInit {

  precioAires: any[] = [];

  constructor(private _productosOportunidadesService: ProductosService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getPrecioAires();

    this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 2000);
  }


  getPrecioAires() {

    this._productosOportunidadesService.getPreciosAires().subscribe(data => {
      this.precioAires = [];
      data.forEach((element: any) => {
        // console.log(element.payload.doc.id)
        // console.log(data);
        this.precioAires.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.precioAires )
    })
  }
}
