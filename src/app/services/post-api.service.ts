import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class PostApiService {

    constructor( private http: HttpClient ) {
    }

    getPosts(): Observable<any> {
        return this.http.get( 'https://jsonplaceholder.typicode.com/posts' );
    }

    getComments( id: number ): Observable<any> {
        return this.http.get( ' https://jsonplaceholder.typicode.com/posts/' + id + '/comments' );
    }

    sendComment( data: object ): Observable<any> {
        return this.http.post( 'https://jsonplaceholder.typicode.com/posts', data );
    }

}
