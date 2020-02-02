import { Component, NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockedServices {

    private _list: any[] = [];

    constructor(public http: HttpClient) {
        http.get('')
    }

    callMeBaby() {
        return this._list;
    }
    getNewelements() {

    }
}
