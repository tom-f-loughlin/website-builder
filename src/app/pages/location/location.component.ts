import { Component } from '@angular/core';

const LOCATION_DATA = {
    title: 'Location',
    paragraphs: [{
        text: 'The wedding will be in the East Czech Republic',
        special: 'East Czech Republic'
    },
    {
        text: `The closest biggest town is called Ostrava,
        which is 17minutes by car(16.5km) to the location.`,
    },
    {
        text: `
        We will be Celebrating the Wedding in
        Hotel Pod Zeleným
        and the ceremony will be in the neighbouring church
        Kostel Narození Panny Marie.`
    }]
};

@Component({
    selector: 'wb-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent {

}
