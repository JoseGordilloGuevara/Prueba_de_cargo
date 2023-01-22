import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public listaItems: any[] = [
    { name: 'Home', url: 'home' },
    { name: 'Personajes', url: 'characters'},
    { name: 'Episodios', url: 'episodes' },
    { name: 'Planetas', url: 'locations' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
