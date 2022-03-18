import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: (): Promise<unknown> => import('./feature/registration/registration.module').then((module) => module.RegistrationModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
