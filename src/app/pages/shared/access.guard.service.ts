import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { AccessService } from './access.service';
import { Observable } from 'rxjs/Observable';
import { MainComponent } from '../main/main.component';


@Injectable()
export class AuthGuardService implements CanActivate, CanDeactivate<MainComponent> {

    constructor(public accessService: AccessService, public router: Router) { }
    canActivate(): boolean {
        if (!this.accessService.access) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
    // TODO fix.
    canDeactivate(component: MainComponent): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate() || window.confirm('Do you want to leave the site?');
    }
}
