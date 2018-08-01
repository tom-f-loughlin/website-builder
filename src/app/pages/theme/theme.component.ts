import { Component } from '@angular/core';

interface ThemeColor {
    id: string;
    name: string;
}

interface ThemeData {
    title: string;
    description: string;
    colors: ThemeColor[];
}

const THEME: ThemeData = {
    title: 'Our theme is a Christmas one.',
    description: `With a like the 1960's style tp be kept that in mind. The two main colours are..`,
    colors: [
        {
            id: 'forest-green',
            name: 'Forest Green'
        },
        {
            id: 'burgandy',
            name: 'Burgandy'
        }
    ]
};


@Component({
    selector: 'wb-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
    data: ThemeData = THEME;
}
