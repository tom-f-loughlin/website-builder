import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuardService } from './pages/shared/access.guard.service';

export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'home', component: MainComponent,
        canActivate: [AuthGuardService], canDeactivate: [AuthGuardService]
    },
    { path: '**', component: NotFoundComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
