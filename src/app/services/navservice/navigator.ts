import { Component, NgModule, Input } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nav } from 'ionic-angular';

@NgModule()
export class NavigatorService {

    @Input()
    public static localNav: Nav

    constructor() { }

    public static goTo(c: Component) {
        this.localNav.setRoot(c)
        //console.log('GO!')
    }
}
