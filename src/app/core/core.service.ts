import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  teste(){
    this.httpClient.get
  }

  constructor(
    private httpClient: HttpClient
  ) { }
}
