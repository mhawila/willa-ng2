import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { UserConfigRoutes } from './user-config/index';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  ...UserConfigRoutes,
  ...AboutRoutes
];
