import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { dataTab } from './tab/dataTab';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    arrayLinksProducts = [];
    arrayLinksTest = [];

    constructor() {
        this.arrayLinksProducts = [
            new dataTab('Product 1', './product1', 'products'),
            new dataTab('Product 2', './product2', 'products'),
            new dataTab('Product 3', './product3', 'products'),
            new dataTab('Product 4', './product4', 'products'),
            new dataTab('Product 5', './product5', 'products'),
        ];
        this.arrayLinksTest = [
            new dataTab("Test 1", './product1', 'test'),
            new dataTab("Test 2", './product2', 'test'),
            new dataTab("Test 3", './product3', 'test'),
        ]
    }
}
