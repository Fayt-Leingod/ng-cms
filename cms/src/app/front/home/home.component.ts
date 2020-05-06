import { Component, OnInit } from '@angular/core';
import { AbsctractComponent } from "../absctract/absctract.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AbsctractComponent{

  /**
   * the content of our component
   * will be provided from database
   */
  public content: string = '';

  constructor(protected http: HttpClient) {
    super(http);
  }

  async ngOnInit() {
    /*call the content of the component here*/
    const response = await this.http.get('api/page/all').toPromise();
    console.log( 1000, response[0]);
    this.content = response[0].content || `no defined content found on BDD`;
  }

}
