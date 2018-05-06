import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';

import { PAGES } from './pages/pages.module';


function findPage(componentName: string) {
    const foundPage = PAGES.find(v => v.name === componentName);
    if (!foundPage) {
        window.location.href = '';
    }
    return foundPage;
}   

export const AppRoutes: Routes = [
    {
        path: '',
        component: findPage('HomeComponent')
    },
    {
        path: 'home',
        component: findPage('HomeComponent')
    },
    {
        path: 'location',
        component: findPage('LocationComponent')
    },
    {
        path: '**',
        component: findPage('NotFoundComponent')
    }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
