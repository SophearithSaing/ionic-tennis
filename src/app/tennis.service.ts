import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TennisService {

  apiUrl = environment.apiUrl;
  apiHost = environment.apiHost;
  apiKey = environment.apiKey;
  headers = {
    'x-rapidapi-key': this.apiKey,
    'x-rapidapi-host': this.apiHost
  };

  constructor(private http: HttpClient) { }

  getMatchesByDate = (date: string) => {
    const url = this.apiUrl + '/matches-by-date/' + date;
    return this.http.get<{ results: [rankings: Array<{ matches: Array<any>, tournament: Array<any> }>] }>(url, {
      headers: this.headers
    });
  }

  getRankings = () => {
    const url = this.apiUrl + '/rankings/ATP';
    return this.http.get<{ results: { rankings: Array<any> } }>(url, {
      headers: this.headers
    });
  }

  getTournaments = () => {
    const url = this.apiUrl + '/tournaments/ATP/2021';
    return this.http.get<{ results: Array<any> }>(url, {
      headers: this.headers
    });
  }
}
