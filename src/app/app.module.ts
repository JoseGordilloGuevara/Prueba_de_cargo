import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralMaterialModule } from 'src/modules.ts/general.modules';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodeComponent } from './pages/episode/episode.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterTypePipe } from './pipes/filter_type.pipe';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: LoginComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'episodes', component: EpisodeComponent},
  {path: 'locations', component: LocationsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ProfileComponent,
    NavbarComponent,
    EpisodeComponent,
    LocationsComponent,
    FilterPipe,
    FilterTypePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GeneralMaterialModule,
    FormsModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
