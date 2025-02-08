import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BunitoValentine} from "../interfaces/bunito-valentine.interface";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendFormService {
  formSpreeEndpoint: string = "https://formspree.io/f/xvgzqvdr";
  constructor(private http: HttpClient) {}

  sendForm(formData: BunitoValentine){
    console.log("Submitted Form: ",formData);
    this.http.post(this.formSpreeEndpoint, formData).pipe(catchError(this.handleError)).subscribe(this.handleResponse);
  }

  protected handleResponse(response: any) {
    console.error('API error:', response);
    return response;
  }

  protected handleError(error: any) {
    // console.error('API error:', error);
    return throwError(() => new Error('Something went wrong. Please try again.'));
  }
}
