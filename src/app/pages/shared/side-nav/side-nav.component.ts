import { Component } from '@angular/core';

interface NavItems {
    nameTag: string;
    link: string;
    active: boolean;
}

const navObjs: NavItems[] = [
    {
        nameTag: 'Home',
        link: '',
        active: true
    },
    {
        nameTag: 'Our Story',
        link: '',
        active: false
    },
    {
        nameTag: 'Things To Do',
        link: '',
        active: false
    },
    {
        nameTag: 'Location',
        link: 'location',
        active: false
    },
    {
        nameTag: 'Travelling',
        link: 'travelling',
        active: false
    },
    {
        nameTag: 'Theme',
        link: 'theme',
        active: false
    },
    {
        nameTag: 'RSVP',
        link: '',
        active: false
    }
];

@Component({
    selector: 'wb-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

    get navigationItems(): NavItems[] {
        return navObjs;
    }
}
