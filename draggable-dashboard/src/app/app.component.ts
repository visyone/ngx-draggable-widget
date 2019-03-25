import { Component, ViewEncapsulation } from '@angular/core';
import { INgWidgetConfig, INgWidgetEvent } from 'ngx-draggable-widget';
import { Http } from '@angular/http';
import { containerConfig, widgetmetadatas, URLS, fromServer, WidgetType, IWidgetDashboard } from './models';
import { of, Observable, forkJoin } from 'rxjs';
import { map, delay } from 'rxjs/operators';

const widgetconfig$ = of(containerConfig);
const widgetitems$ = of(widgetmetadatas).pipe(delay(2000));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private rgb = '#efefef';
  private curNum;
  private itemPositions: Array<any> = [];
  title = 'app';
  // public dashboardconfig$ = Observable.of<IWidgetDashboard>(null);
  public dashboardconfig$ = forkJoin(widgetconfig$, widgetitems$, (widgetconfig, widgetitems) => {
    return {
      'WidgetContainer': widgetconfig,
      'Widgets': widgetitems,
    };
  });
  constructor(private http: Http) {
    // this.dashboardconfig$.subscribe(data => console.log('dashboardconfig', JSON.stringify(data)));
    // this.getAll(WIDGET_TYPES.DEMO_DASHBOARD).subscribe(data => console.log(data));
    // this.dashboardconfig$ = this.getAll(WIDGET_TYPES.DEMO_DASHBOARD);
  }

  addWidget(): void {
    const conf: INgWidgetConfig = this._generateDefaultWidgetConfig();
    conf.payload = this.curNum++;
    // TODO
    // this.widgetsMetaData.push({ id: conf.payload, config: conf, name: 'Some Market' });
  }

  removeWidget(index: number): void {
    // TODO
    // if (this.widgetsMetaData[index]) {
    //   this.widgetsMetaData.splice(index, 1);
    //   }
  }

  updateItem(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  onDrag(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  onResize(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  public getAll = (widgetType: WidgetType): Observable<IWidgetDashboard> =>
    this.http.get(URLS[widgetType]).pipe(
      map(resp => resp.json()),
      map(records => records.map(fromServer))
    );

  private _generateDefaultWidgetConfig(): INgWidgetConfig {
    return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
  }


  private _generateDefaultDashBoardConfig(): INgWidgetConfig[] {
    return [
      { 'dragHandle': '.handle', 'row': 1, 'col': 1, 'unitx': 2, 'resizable': false },
      { 'dragHandle': '.handle', 'row': 1, 'col': 2, 'unitx': 2, 'resizable': false },
      { 'dragHandle': '.handle', 'row': 1, 'col': 3, 'unitx': 1 },
      { 'dragHandle': '.handle', 'row': 26, 'col': 1, 'unitx': 5 },
      { 'dragHandle': '.handle', 'row': 51, 'col': 1, 'unitx': 4 },
      { 'dragHandle': '.handle', 'row': 76, 'col': 89, 'unitx': 1 }];
  }

}
      // { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 44, 'sizey': 25, 'resizable': false},
      // { 'dragHandle': '.handle', 'col': 45, 'row': 1, 'sizex': 44, 'sizey': 25, 'resizable': false},
      // { 'dragHandle': '.handle', 'col': 1, 'row': 2, 'sizex': 102, 'sizey': 1},
      // { 'dragHandle': '.handle', 'col': 1, 'row': 3, 'sizex': 75, 'sizey': 1},
      // { 'dragHandle': '.handle', 'col': 51, 'row': 26, 'sizex': 32, 'sizey': 40},
      // { 'dragHandle': '.handle', 'col': 89, 'row': 1, 'sizex': 1, 'sizey': 1}];
