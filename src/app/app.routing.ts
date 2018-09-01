import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { LocationComponent } from './pages/location/location.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ThingsToDoComponent } from './pages/things-to-do/things-to-do.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';

export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'main', component: MainComponent },
    { path: 'location', component: LocationComponent },
    { path: 'theme', component: ThemeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'things-to-do', component: ThingsToDoComponent },
    { path: 'our-story', component: OurStoryComponent },
    { path: '**', component: NotFoundComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
