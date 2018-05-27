import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { Moment } from 'moment';


@Injectable()
export class ClockService {

    private days: Observable<number>;
    private months: Observable<number>;
    private hours: Observable<number>;
    // this is weird works of 0-11 #moment
    private weddingDay: Moment = moment([2018, 11, 29]);
    private currentDate: Moment = moment();

    constructor() {
        this.months = Observable.interval(100)
            .map(tick => {
                const diffInMonths = this.weddingDay.clone().diff(this.currentDate, 'months');
                // minus 1 so that I can use the difference from the last month
                return diffInMonths - 1;
            }).share();

        this.days = Observable.interval(100)
            .map(tick => {
                const startOfDec = this.weddingDay.clone().startOf('month');
                const dayBeforeWedding = this.weddingDay.clone().subtract(1, 'days');
                const diff = dayBeforeWedding.diff(startOfDec);
                const formatDiff = moment(diff).format('DD');
                return Number(formatDiff);
            }).share();


        this.hours = Observable.interval(100)
            .map(tick => this.weddingDay.clone().diff(this.currentDate, 'hours')).share();
    }



    getDays(): Observable<number> {
        return this.days;
    }
    getMonths(): Observable<number> {
        return this.months;
    }
    getHours(): Observable<number> {
        return this.hours;
    }

}
