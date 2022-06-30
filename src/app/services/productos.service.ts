import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private firestore : AngularFirestore) { }

  getProductosMascotaService() : Observable<any>{
    return this.firestore.collection('productosMascotasBD').snapshotChanges();
  }

  getProductosRefrigeracionService() : Observable<any>{
    return this.firestore.collection('productosRefrigeracionBD').snapshotChanges();
  }
  
  getProductosOportunidadesService() : Observable<any>{
    return this.firestore.collection('productosOportunidadesBD').snapshotChanges();
  }

  getPreciosAires() : Observable<any>{
    return this.firestore.collection('preciosAireBD').snapshotChanges();
  }
}
