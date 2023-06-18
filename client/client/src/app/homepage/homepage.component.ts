import { Component, OnInit } from '@angular/core';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ngOnInit() {
    initTE({ Ripple });
  }

}
