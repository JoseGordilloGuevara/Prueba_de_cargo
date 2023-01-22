import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InterfaceCharacter } from 'src/app/interface/interface-character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: InterfaceCharacter[] = []
  pagina = 1;
  info: any;
  filterName = '';
  filterType = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe( res => {
      console.log(res)
      this.characters = res.results;
      this.info = res.info;
    })
  }

  next(){
    this.pagina = this.pagina + 1;
    this.http.get<any>('https://rickandmortyapi.com/api/character/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.characters = res.results;
    })
  }

  prev(){
    this.pagina = this.pagina - 1;
    this.http.get<any>('https://rickandmortyapi.com/api/character/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.characters = res.results;
    })
  }
  
}
