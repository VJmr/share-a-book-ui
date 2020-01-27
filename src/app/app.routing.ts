import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './auth/guards';

const appRoutes: Routes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);