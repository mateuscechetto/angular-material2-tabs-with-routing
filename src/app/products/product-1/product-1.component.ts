import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-prod-1',
    templateUrl: './product-1.component.html',
    styleUrls: ['./product-1.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Product1Component {
    routeLinks: any[];
    activeLinkIndex = -1;
    product: any;

    constructor(private router: Router) {
        this.routeLinks = [
            {
                number: 1,
                content: "conteudo 1",
                label: 'Product 1',
                link: './product1',
                index: 0
            }, {
                number: 2,
                content: "conteudo 2",
                label: 'Product 2',
                link: './product2',
                index: 1
            }, {
                number: 3,
                content: "conteudo 3",
                label: 'Product 3',
                link: './product3',
                index: 2
            }, {
                number: 4,
                content: "conteudo 4",
                label: 'Product 4',
                link: './product4',
                index: 3
            }, {
                number: 5,
                content: "conteudo 5",
                label: 'Product 5',
                link: './product5',
                index: 4
            }
        ];
    }

    ngOnInit(): void {
        this.product = this.routeLinks.find(tab => tab.link === '.' + this.router.url);
    }
 }
