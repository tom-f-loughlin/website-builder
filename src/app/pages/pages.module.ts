import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { LocationComponent } from './location/location.component';
import { ThemeComponent } from './theme/theme.component';
import { TravellingComponent } from './travelling/travelling.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';


export const PAGES = [
  HomeComponent,
  SideNavComponent,
  ThemeComponent,
  LocationComponent,
  TravellingComponent,
  OurStoryComponent,
  RsvpComponent,
  ScheduleComponent,
  ThingsToDoComponent,
  NotFoundComponent
];
