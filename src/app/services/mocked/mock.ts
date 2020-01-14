import { Component, NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

export class MockedServices {
    
    private _list : any[] = [];

    callMeBaby() {  
        return this._list;
    }
    getNewelements(){
        
    }
}
