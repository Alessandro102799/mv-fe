import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JSend } from './jsend.dto';

/**
 * http options
 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiClient {
  /**
   * Base url of api client
   */
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `http://localhost:8080`;
  }

  /**
   * get generic interface
   * @param url
   * @param params
   * @returns
   */
  public get<T>(url: string, params = new HttpParams()): Observable<T> {
    return this.http.get<JSend<T>>(`${this.baseUrl}${url}`, { ...httpOptions, ...{ params } }).pipe(map((jSend) => jSend.data));
  }

  /**
   * Posts api client
   * @template K
   * @template T
   * @param url
   * @param [body]
   * @returns post
   */
  public post<K, T>(url: string, body?: K): Observable<T> {
    return this.http.post<JSend<T>>(`${this.baseUrl}${url}`, body, { ...httpOptions }).pipe(
      map((jSend: JSend<T>) => {
        return jSend.data;
      })
    );
  }


  /**
   * Puts api client
   * @template K
   * @template T
   * @param url
   * @param body
   * @param [config]
   * @returns put
   */
  public put<K, T>(url: string, body: K): Observable<T> {
    return this.http.put<JSend<T>>(`${this.baseUrl}${url}`, body, { ...httpOptions }).pipe(map((jSend) => jSend.data));
  }


  /**
   * Deletes api client
   * @template T
   * @param url
   * @param [config]
   * @returns delete
   */
  public delete<T>(url: string): Observable<T | null> {
    return this.http.delete<JSend<T>>(`${this.baseUrl}${url}`, { ...httpOptions }).pipe(map((jSend) => (jSend !== null ? jSend.data : null)));
  }

}
