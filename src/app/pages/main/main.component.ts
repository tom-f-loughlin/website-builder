import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'wb-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    @HostListener('window:resize', ['$event'])
    public innerHeight: number;

    ngOnInit() {
        this.innerHeight = window.innerHeight;
    }
    onResize(event) {
        this.innerHeight = window.innerHeight;
    }
    canDeactivate(): boolean {
        return window.confirm('Do you want to leave the site?');
    }
    scroll(el: string) {
        const tabScroll = document.getElementById(el);
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': tabScroll.offsetTop - 60
        });
    }
}
