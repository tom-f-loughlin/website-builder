import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ClockService } from '../shared/clock.service';

const HOME_DATA = {
    date: '29th December 2018',
    signuatre: 'Tom & Irena',
    title: 'Wedding',
    address: 'Bohumín 735 81, Ostrava, Czech Republic',
};

@Component({
    selector: 'wb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private _clockSubscription: Subscription;
    private _clockSubscription2: Subscription;
    days: any;
    months: any;

    constructor(private clockService: ClockService) { }

    ngOnInit(): void {
        // get the months minus 1 value then days then hours
        this._clockSubscription = this.clockService.getDays().subscribe(time => this.days = time);
        this._clockSubscription2 = this.clockService.getMonths().subscribe(time => this.months = time);
    }

    ngOnDestroy(): void {
        this._clockSubscription.unsubscribe();
        this._clockSubscription2.unsubscribe();
    }
    // this.countDown = Observable.timer(0,1000)
    // .take(this.counter)
    // .map(() => --this.counter);

}

