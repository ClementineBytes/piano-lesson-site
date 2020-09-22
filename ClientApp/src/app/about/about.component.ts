import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  safeUrl: any;

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          mediumCard: { cols: 1, rows: 2 },
          largeCard: { cols: 1, rows: 4 },
        };
      }

     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        mediumCard: { cols: 2, rows: 2 },
        largeCard: { cols: 4, rows: 4 },
      };
    })
  );

  constructor (
    private _sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver) {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/HMSX6zn_iRY`);
  }

  ngOnInit() {
  }

}

/*
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          mediumCard: { cols: 1, rows: 2 },
          largeCard: { cols: 1, rows: 4 },
        };
      }

     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        mediumCard: { cols: 2, rows: 2 },
        largeCard: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
*/
