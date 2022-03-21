import { RouterModule, Routes } from "@angular/router";
import { FormStepsGuard } from "../../core/guards/form-steps.guard";
import { ContactInformationComponent } from "./pages/contact-information/contact-information.component";
import { PersonalInformationComponent } from "./pages/personal-information/personal-information.component";

const routes: Routes = [
    {
        path: 'personal-information',
        component: PersonalInformationComponent
    },
    {
        path: 'contact-page',
        component: ContactInformationComponent,
        canActivate: [FormStepsGuard]
    },
    {
        path: '**',
        redirectTo: 'personal-information',
        pathMatch: 'full',
    },
];

export const RegistrationRoutingModule = RouterModule.forChild(routes);
