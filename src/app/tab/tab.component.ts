import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dataTab } from './dataTab';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  //routeLinks: any[];
  activeLinkIndex = -1;
  @Input() arrayLinks:dataTab[] = [];

  constructor(private router: Router) {
      // this.routeLinks = [
      //     {
      //         label: 'Product 1',
      //         link: './product1',
      //         index: 0
      //     }, {
      //         label: 'Product 2',
      //         link: './product2',
      //         index: 1
      //     }, {
      //         label: 'Product 3',
      //         link: './product3',
      //         index: 2
      //     }, {
      //         label: 'Product 4',
      //         link: './product4',
      //         index: 3
      //     }, {
      //         label: 'Product 5',
      //         link: './product5',
      //         index: 4
      //     }
      // ];
  }

  ngOnInit(): void {
      this.router.events.subscribe((res) => {          
          this.activeLinkIndex = this.arrayLinks.indexOf(this.arrayLinks.find(tab => tab.link === '.' + this.router.url));
      });
  }

}
