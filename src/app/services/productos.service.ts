import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private firestore : AngularFirestore) { }

  getProductosMascotaService() : Observable<any>{
    return this.firestore.collection('productosBD').snapshotChanges();
  }

  getProductosRefrigeracionService() : Observable<any>{
    return this.firestore.collection('productosRefrigeracionBD').snapshotChanges();
  }
  
  getProductosOportunidadesService() : Observable<any>{
    return this.firestore.collection('productosOportunidades').snapshotChanges();
  }
}
