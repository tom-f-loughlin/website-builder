import { Component } from '@angular/core';

const OUR_STORY = {
    story: [
        {
            title: '17th May 2014',
            text: `We first meet in Dublin Ireland when she asked for directions beach(Sandymount Strand)
            on the corner of Slattery's Pub in Grand Canal`
        },
        {
            title: 'Late September 2014',
            text: `after emailing for the summer We went on are First date in London England.
            And when I feel in love with her. We went to see Michael Jackson the musical (front row center)`
        },
        {
            title: '26th Of November 2014',
            text: `When we started going out after I asked her out on my birthday (tactical)
            And began travelling to the UK every month.`
        },
        {
            title: 'Early March 2015',
            text: `After getting a new job I moved to England, So I could be closer to Irena.
            A few months later we moved into together in Southampton.`
        },
        {
            title: 'New Year of 2017',
            text: 'We packed up are stuff from England and drove all the way to Czech, to start our new life…'
        }
    ],
    bottomText: `Inbetween this time we travelled the East coast of America
    and travelled to Kazakstan for our friends wedding and then onto thailand`
};

@Component({
    selector: 'wb-our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {

};

