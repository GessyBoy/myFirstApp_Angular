import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

export { routes };
