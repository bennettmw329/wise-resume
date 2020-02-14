import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GoogleSheetApiConfiguration } from '../api-config';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  constructor(private http : HttpClient) { }

  getReferences() :Observable<any> {
    return this.http.get('');
  }

  getTestimonials() :Observable<any> {
    return this.http.get('');
  }

  getStories() :Observable<any> {
    return this.http.get('');
  }

  getBehindCamera() :Observable<any> {
    return this.http.get('');
  }

  getOnCamera() :Observable<any> {
    return this.http.get('');
  }
}
