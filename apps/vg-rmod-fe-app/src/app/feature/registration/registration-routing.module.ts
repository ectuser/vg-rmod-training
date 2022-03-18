import { RouterModule, Routes } from "@angular/router";
import { PersonalInformationComponent } from "./pages/personal-information/personal-information.component";

const routes: Routes = [
    {
        path: '',
        component: PersonalInformationComponent
    }
];

export const RegistrationRoutingModule = RouterModule.forChild(routes);
