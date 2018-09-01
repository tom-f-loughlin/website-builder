import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

const VALID_NAMES = [
    'Tom'
];

@Component({
    selector: 'wb-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
    @ViewChild('userName') userName: ElementRef;
    name = '';

    showEnter = false;

    constructor(private router: Router) {

    }

    private animationEnded = new BehaviorSubject(false);

    ngAfterViewInit() {
        setTimeout(() => {
            this.animationEnded.next(true);
            this.showEnter = true;
            this.userName.nativeElement.focus();
        }, 6000);
    }

    correctName(): void {
        console.log(this.name, this.name.length, this.name.length < 0);
        if (this.name.length > 0) {
            if (VALID_NAMES.includes(this.name)) {
                this.router.navigate(['./main']);
                // alert(this.name);
            } else {
                alert(`Not a valid name`);
            }
        }
    }
}
