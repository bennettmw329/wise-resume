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
    return this.http.get(this.buildFinalUrl('References!A2:G1000'));
  }

  getTestimonials() :Observable<any> {
    return this.http.get(this.buildFinalUrl('Testimonials!A2:B1000'));
  }

  getStories() :Observable<any> {
    return this.http.get(this.buildFinalUrl('Stories!A2:E1000'));
  }

  getBehindCamera() :Observable<any> {
    return this.http.get(this.buildFinalUrl('Videos!A2:D1000'));
  }

  getOnCamera() :Observable<any> {
    return this.http.get(this.buildFinalUrl('Videos!A2:D1000'));
  }

  private buildFinalUrl(range) : string {
    let finalUrl = GoogleSheetApiConfiguration.endpoint + 
      GoogleSheetApiConfiguration.sheetId + 
      "/values/" + 
      range + 
      "?key=" + GoogleSheetApiConfiguration.key;  
    return finalUrl;
  }
}
