import { Component } from '@angular/core';
import { chunk } from 'lodash';

interface IToDo {
    id: number;
    title: string;
    subtitle?: string;
    data: string;
    website?: string;
    location: string;
}

const TO_DO_DATA = [
    {
        id: 1,
        title: 'Dolni Vitkovice',
        data: `Ostrava was a mining city and Dolni Vitkovice(built in 1836) is where it all happened.
        There is a few things to do here and it's pretty great.
        So much goes on here.. to mention a few things:
        Svet Techniky – Science and Technology Museum (which is also interaction),
        Art Museum, Arena, Bolt Tower were you can get college and see the surronding landscape,
        A Climbing wall.. And a tour of the Mines.
        But if you interested have a look at the website it's definitly worth a see.`,
        website: 'http://www.dolnivitkovice.cz/',
        location: 'https://goo.gl/maps/CpAH6H2EJqH2'
    },
    {
        id: 2,
        title: 'Ostrava Zoo',
        data: `It's the second biggest Zoo in Czech. With a possibility of seeing 4,000 animals.
        Looks like an interesting and nice place to have a walk around and enjoy the animals.
        Plus who doesn't like a big cute hippo?`,
        website: 'http://www.zoo-ostrava.cz/en/',
        location: 'https://goo.gl/maps/1MBtUsMUBvx'
    },
    {
        id: 3,
        title: 'Silesian Ostrava Castle',
        data: `It's a castle in Ostrava, it's really all in the name. Originally built in the 1280s,
        was a site of the actual medieval seat of power in the region.`,
        website: 'http://hrad.cerna-louka.cz/',
        location: 'https://goo.gl/maps/wFt15SdFx7R2'
    },
    {
        id: 4,
        title: 'Halda Ema',
        subtitle: 'Ostrava’s Volcano/Mine waste',
        data: `If you like hiking or nature this may interest you.
        It's 315m-tall hill with sweeping views was formed from extracted mining waste & emits hot gases.`,
        website: 'https://www.visitostrava.eu/en/discover-ostrava/top-10/310-the-ema-heap.html',
        location: 'https://goo.gl/maps/at7gxErJatT2'
    },
    {
        id: 5,
        title: 'Party On Stodolní Street',
        data: `If your looking for a few drinks or just a drink this street has about 50 pubs and restuarents with alot of variation you.`,
        website: 'https://www.ostrava.cz/en/turista/zabava/nocni-zivot',
        location: 'https://goo.gl/maps/bzX6CWdwf252'
    },
    {
        id: 6,
        title: 'The National Moravian',
        subtitle: 'Antonín dvorak',
        data: `Lovely old theatre you may find something that might interest you while your in the area`,
        website: 'http://www.ndm.cz/en/programme/another-month/12-2018/#anch'
    },
    {
        id: 7,
        title: 'MINIUNI miniature world',
        data: `If you like being a Giant to iconic sites.. you may wanta give this a looksy.
        Pretty quick to view it all, which is nice if you wanta do something like that
        plus there is a big Pyramid.`,
        website: 'http://miniuni.cerna-louka.cz/',
        location: 'https://goo.gl/maps/EeaFmQdVFMs'
    },
] as IToDo[];


@Component({
    selector: 'wb-things-to-do',
    templateUrl: './things-to-do.component.html',
    styleUrls: ['./things-to-do.component.scss']
})
export class ThingsToDoComponent {

    data: IToDo[] = TO_DO_DATA;
    rowedData: IToDo[][] = [];


    constructor() {
        this.rowedData = chunk(TO_DO_DATA, 3);
    };

    getImgClass(idx: number, odd: boolean) {
        if (odd) {
            switch (idx) {
                case 0:
                    return 'first';
                case 1:
                    return 'together';
                case 2:
                    return 'eastleigh';
                case 3:
                    return 'ring';
            }
        } else {
            switch (idx) {
                case 0:
                    return 'michael';
                case 1:
                    return 'paris';
                case 2:
                    return 'map';
            }
        }
    };

}
