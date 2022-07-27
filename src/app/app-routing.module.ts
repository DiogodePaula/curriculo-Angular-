import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FormationComponent } from './pages/formation/formation.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-me',
    },
    {
        path: 'about-me',
        component: AboutMeComponent,
    },
    {
        path: 'formation',
        component: FormationComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
