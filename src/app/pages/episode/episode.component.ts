import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InterfaceEpisode } from 'src/app/interface/interface-episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episodes: InterfaceEpisode[] = []
  pagina = 1;
  info: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/episode')
    .subscribe( res => {
      console.log(res)
      this.episodes = res.results;
      this.info = res.info;
    })
  }

  next(){
    this.pagina = this.pagina + 1;
    this.http.get<any>('https://rickandmortyapi.com/api/episode/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.episodes = res.results;
    })
  }

  prev(){
    this.pagina = this.pagina - 1;
    this.http.get<any>('https://rickandmortyapi.com/api/episode/?page=' + this.pagina)
    .subscribe( res => {
      console.log(res)
      this.episodes = res.results;
    })
  }

}
