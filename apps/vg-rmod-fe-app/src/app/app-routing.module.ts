import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'registration',
        loadChildren: (): Promise<unknown> => import('./feature/registration/registration.module').then((module) => module.RegistrationModule)
    },
    {
        path: '**',
        redirectTo: 'registration',
        pathMatch: 'full',
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
