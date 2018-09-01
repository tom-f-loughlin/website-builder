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
}
