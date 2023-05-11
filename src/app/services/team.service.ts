import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }
  SendRequest(count:number){
    return this.http.post("https://localhost:7082/api/Team", count);

  }

  
}
