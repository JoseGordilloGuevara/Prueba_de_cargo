import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InterfaceLocation } from 'src/app/interface/interface-location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: InterfaceLocation[] = []
  pagina = 1;
  info: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/location')
    .subscribe( res => {
      console.log(res)
      this.locations = res.results;
      this.info = res.info;
    })
  }

  next(){
    this.pagina = this.pagina + 1;
    this.http.get<any>('https://rickandmortyapi.com/api/location/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.locations = res.results;
    })
  }

  prev(){
    this.pagina = this.pagina - 1;
    this.http.get<any>('https://rickandmortyapi.com/api/location/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.locations = res.results;
    })
  }

}
