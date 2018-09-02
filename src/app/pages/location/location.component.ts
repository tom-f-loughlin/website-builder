import { Component } from '@angular/core';

@Component({
    selector: 'wb-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent {
    userArriveType: string;
    constructor() {
        this.userArriveType = 'prague';
    }


    navigateTab(link: string) {
        let url = '';
        if (!/^http[s]?:\/\//.test(link)) {
            url += 'http://';
        }

        url += link;
        window.open(url, '_blank');
    }
}
