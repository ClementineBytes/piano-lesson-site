import { Component, OnInit, ElementRef, ViewChild, NgModule, VERSION } from '@angular/core';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
  //@ViewChild('container', { static: false }) container: ElementRef;
  //window: Window;

  constructor() { 
  }

  ngOnInit() {
    //window.location.reload();
    // Calendly.init();
    // Calendly.initInlineWidget({
    //   url: 'https://calendly.com/clementtest/piano-lesson',
    //   parentElement: this.container.nativeElement
    // });
  }

}

/* 
  template: `
            <div #container class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>
  `,
*/