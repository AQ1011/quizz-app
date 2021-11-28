import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quizz-app';
  opacity: number;

  constructor (
    public location: Location,
    @Inject(DOCUMENT) document: any) {}

  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll(e: any) {
  //   if (window.pageYOffset > 350) {
  //       this.opacity = 1;
  //     }
  //     else {
  //       this.opacity = 0;
  //   }
  // }

  ngOnInit(): void {
    // this.onWindowScroll(event);
  }

}
