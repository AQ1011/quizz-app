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
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e: any) {
    if (window.pageYOffset > 350) {
      var element = document.getElementById("navbar-top");
      var brand = document.getElementById("brand");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
        brand.classList.remove("text-transparent");
        brand.classList.add("text-white");
      }
    } else {
      var element = document.getElementById("navbar-top");
      var brand = document.getElementById("brand");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");        
        brand.classList.add("text-transparent");
        brand.classList.remove("text-white");
      }
    }
  }
  ngOnInit(): void {
    this.onWindowScroll(event);
  }

}
