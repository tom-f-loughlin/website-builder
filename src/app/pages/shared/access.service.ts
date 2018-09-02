import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AccessService {
    private accessSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    // shitty access
    private static hasKey = 'wedding guest';

    grantAccess(name: string) {
        if (name === AccessService.hasKey) {
            this.accessSubject.next(true);
        }
    }

    clearAccess() {
        this.accessSubject.next(false);
    }

    get hasAccess$(): Observable<boolean> {
        return this.accessSubject.asObservable();
    }
    get access(): boolean {
        return this.accessSubject.getValue();
    }
}
