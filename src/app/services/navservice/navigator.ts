import { Component, NgModule, Input } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nav, NavParams } from 'ionic-angular';

@NgModule()
export class NavigatorService {

    @Input()
    public static localNav: Nav

    constructor() { }

    public static goTo(c: Component, pars: NavParams) {
        console.log('GO!')
        this.localNav.setRoot(c, pars)
    }
}
