import { LocationComponent } from './location/location.component';
import { ThemeComponent } from './theme/theme.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

export const PAGES = [
    ThemeComponent,
    LocationComponent,
    OurStoryComponent,
    ScheduleComponent,
    ThingsToDoComponent,
    NotFoundComponent,
    DashboardComponent,
    MainComponent
];
