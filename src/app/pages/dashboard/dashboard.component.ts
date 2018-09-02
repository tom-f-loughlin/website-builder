import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { AccessService } from '../shared/access.service';
import { Observable } from 'rxjs/Observable';
import { debounce } from 'lodash';
@Component({
    selector: 'wb-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
    @ViewChild('userName') userName: ElementRef;
    name: string;

    constructor(private router: Router, private accessService: AccessService) {
        this.accessService.clearAccess();
    }
    private static VALID_NAMES = [
        'wedding guest'
    ];
    private animationEnded = new BehaviorSubject(false);

    ngAfterViewInit() {
        this.name = '';
        setTimeout(() => {
            this.animationEnded.next(true);
            return this.userName.nativeElement.focus();
        }, 6000);
    }

    ngOnDestroy() {
        this.animationEnded.next(false);
    }

    correctName(): void {
        if (this.name.length > 0) {
            this.checkAccess();
            if (DashboardComponent.VALID_NAMES.includes(this.name)) {
                if (this.accessService.access) {
                    this.router.navigate(['./home']);
                } else {
                    alert(`Not a valid name`);
                }
            } else {
                alert(`Not a valid name`);
            }
        }
    }

    get showEnter$(): Observable<boolean> {
        return this.animationEnded.asObservable();
    }
    private checkAccess() {
        return this.accessService.grantAccess(this.name);
    }
}
