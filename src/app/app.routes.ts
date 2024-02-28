import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signIn', component: LandingPageComponent},
    {path: 'kids', component: KidsComponent}
];
