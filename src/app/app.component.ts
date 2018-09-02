import { Component, OnDestroy } from '@angular/core';
import { AccessService } from './pages/shared/access.service';

@Component({
    selector: 'wb-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    constructor(private accessService: AccessService) { }

    ngOnDestroy() {
        this.accessService.clearAccess();
    }

}
