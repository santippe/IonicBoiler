import { Component, NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockedServices {

    private _list: any[] = [];

    constructor(public http: HttpClient) {

    }

    callMeBaby() {
        return this._list;
    }

    retrieveData(url) {
        return this.http.get(url)
            .toPromise()
    }
    getNewelements() {
        //return this.retrieveData('https://images-api.nasa.gov/search?q=mars landing')
        return this.retrieveData('assets/files/mock.json')
    }
}
