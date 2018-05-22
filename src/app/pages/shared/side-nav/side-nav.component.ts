import { Component } from '@angular/core';

interface NavItems {
    nameTag: string;
    link: string;
    active: boolean;
    icon?: string;
}

const navObjs: NavItems[] = [
    {
        nameTag: 'Home',
        link: '',
        active: true,
        icon: 'fas fa-home fa-2x'
    },
    {
        nameTag: 'Our Story',
        link: 'our-story',
        active: false,
        icon: 'fas fa-book fa-2x'
    },
    {
        nameTag: 'Things To Do',
        link: 'things-to-do',
        active: false,
        icon: 'fab fa-fort-awesome fa-2x'
    },
    {
        nameTag: 'Location',
        link: 'location',
        active: false,
        icon: 'fas fa-map fa-2x'
    },
    {
        nameTag: 'Travelling',
        link: 'travelling',
        active: false,
        icon: 'fas fa-map-signs fa-2x'
    },
    {
        nameTag: 'Theme',
        link: 'theme',
        active: false,
        icon: 'fas fa-palette fa-2x'
    },
    {
        nameTag: 'RSVP',
        link: 'rsvp',
        active: false,
        icon: 'fas fa-envelope fa-2x'
    },
    {
        nameTag: 'Schedule',
        link: 'schedule',
        active: false,
        icon: 'fas fa-clipboard-list fa-2x'
    },
    {
        nameTag: 'Accomandation',
        link: 'accomandation',
        active: false,
        icon: 'fas fa-bed fa-2x'
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
