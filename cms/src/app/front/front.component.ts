import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  activeItem: string = 'home';

  constructor(protected route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.activeItem = data.activeItem;
    })
  }

}
