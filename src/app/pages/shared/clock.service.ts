import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
// import Moment from 'moment';


@Injectable()
export class ClockService {

    private days: Observable<any>;
    private months: Observable<any>;
    private hours: Observable<any>;
    private weddingDay = moment([2018, 11, 29]);
    private currentDate = moment();

    constructor() {
        console.log(this.weddingDay);
        this.days = Observable.interval(100)
            .map(tick => this.weddingDay.diff(this.currentDate, 'days')).share();
        this.months = Observable.interval(100)
            .map(tick => this.weddingDay.diff(this.currentDate, 'months')).share();
        this.hours = Observable.interval(100)
            .map(tick => this.weddingDay.diff(this.currentDate, 'hours')).share();
    }

    getDays(): Observable<Date> {
        return this.days;
    }
    getMonths(): Observable<Date> {
        return this.months;
    }
    getHours(): Observable<Date> {
        return this.hours;
    }

}
