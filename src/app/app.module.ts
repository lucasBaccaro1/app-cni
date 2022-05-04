//Global
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Components
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GridComponent } from './components/grid/grid.component';
import { MascotasComponent } from './components/pages/mascotas/mascotas.component';

//Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

//Forms
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FletesComponent } from './components/pages/fletes/fletes.component';
import { RefrigeracionComponent } from './components/pages/refrigeracion/refrigeracion.component';
import { OportunidadesComponent } from './components/pages/oportunidades/oportunidades.component';
import { AiresComponent } from './components/pages/aires/aires.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    GridComponent,
    MascotasComponent,
    FletesComponent,
    RefrigeracionComponent,
    OportunidadesComponent,
    AiresComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
