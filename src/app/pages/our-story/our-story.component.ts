import { Component, OnInit } from '@angular/core';

interface IStories {
    story: IStory[];
    bottomText: string;
};

interface IStory {
    title: string;
    text: string;
};

const OUR_STORY: IStories = {
    story: [
        {
            title: '17th May 2014',
            text: `We first meet in Dublin Ireland when she asked for directions beach(Sandymount Strand)
            on the corner of Slattery's Pub in Grand Canal.`
        },
        {
            title: 'Late September 2014',
            text: `after emailing for the summer We went on are First date in London England.
            And when I feel in love with her. We went to see Michael Jackson the musical (front row center).`
        },
        {
            title: '26th Of November 2014',
            text: `When we started going out after I asked her out on my birthday (tactical)
            And began travelling to the UK every month.`
        },
        {
            title: 'First Valentines 2015',
            text: `After asking Iri out I realised she needed to threated like a princess so I brought her
             as a suprise to Paris (city of love) for Valentines day.`
        },
        {
            title: 'Early March 2015',
            text: `After getting a new job I moved to England, So I could be closer to Irena.
            A few months later we moved into together in Southampton.`
        },
        {
            title: 'New Year of 2017',
            text: 'We packed up are stuff from England and drove all the way to Czech, to start our new life…'
        },
        {
            title: '16th March 2018',
            text: `After all our adventures, This was the day before St.Patricks which I would proposal where it all began.`
        },
    ],
    bottomText: `Inbetween these time we travelled alot East Coast of America, Kazakstan(for our Friends Wedding),
     Thailand, France, Amsterdam, Germany, Danemark and Romania.`
};

@Component({
    selector: 'wb-our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {

    private storyTime: IStories = OUR_STORY;
    public storyOdd: IStory[] = [];
    public storyEven: IStory[] = [];

    ngOnInit() {
        this.storyTime.story.forEach((val, idx) => {
            idx % 2 ? this.storyEven.push(val) : this.storyOdd.push(val);
        });
    }

    getImgClass(idx: number, odd: boolean) {
        if (odd) {
            switch (idx) {
                case 0:
                    return 'dublin';
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
};

