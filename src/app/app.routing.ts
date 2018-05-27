import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { TravellingComponent } from './pages/travelling/travelling.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ThingsToDoComponent } from './pages/things-to-do/things-to-do.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'location', component: LocationComponent },
    { path: 'theme', component: ThemeComponent },
    { path: 'travelling', component: TravellingComponent },
    { path: 'rsvp', component: RsvpComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'things-to-do', component: ThingsToDoComponent },
    { path: 'our-story', component: OurStoryComponent },
    { path: '**', component: NotFoundComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
