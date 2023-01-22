import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  character:any = [];
  profileId:any;

  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(res => {
      this.character = res;
    })
  }

}
