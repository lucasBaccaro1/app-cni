import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
})
export class MascotasComponent implements OnInit {
model: NgbDateStruct | undefined;
modelName: any;
mensajeNombre: any;

mensajeDia: any;
mensajeMes: any;

mensajeProducto : any[] = [];
mensajeFinal : any ;

//FIREBASE

productosMascotas: any[] = [];

constructor(private _productosMascotasService: ProductosService,private spinner: NgxSpinnerService) {}

ngOnInit(): void {
  this.getProductosMascotas();


  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 2000);

  
}




getProductosMascotas(){

  this._productosMascotasService.getProductosMascotaService().subscribe(data =>{
    this.productosMascotas = [];
    data.forEach((element:any) => {
      // console.log(element.payload.doc.id)
      // console.log(data);
      this.productosMascotas.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
    //console.log(this.productosMascotas )
  })
}

onChangeCheck($event:any){
  //  this.mensajeProducto = $event.target.value
  if($event.target.checked == true){
    this.mensajeProducto.push($event.target.value)
  }else{
    this.mensajeProducto.splice( this.mensajeProducto.indexOf($event.target.value),1)
  }
  console.log(this.mensajeProducto.toString())
}

onItemChange(value : any){
  console.log(" Value is : ", value );
}
//Consigo el dia y la fecha
valorInput(valorInput: NgbDateStruct) {
  this.mensajeDia = valorInput.day;
  this.mensajeMes = valorInput.month;
  }

//Consigo el nombre de la persona
valorInputName(valorInputName: string) {
  
  this.mensajeNombre = valorInputName;
  }



}
