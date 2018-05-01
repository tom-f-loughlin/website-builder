import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


export const AppRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'calc', component: AppComponent },
    { path: '**', component: NotFoundComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
