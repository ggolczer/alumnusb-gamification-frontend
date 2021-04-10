import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { AuthGuard } from '../auth/auth.guard';
import { NewFriendRequestComponent } from './new-friend-request/new-friend-request.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'my_profile',
      component: ProfileComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'my_achievements',
      component: AchievementsComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'my_stats',
      component: StatsComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: 'upload-csv',
      component: UploadCsvComponent,
      canActivate: [ AuthGuard ],
      data: { admin: true},
    },
    {
      path: 'new-friend-request',
      component: NewFriendRequestComponent,
      canActivate: [ AuthGuard ],
      data: { admin: false},
    },
    {
      path: '',
      redirectTo: 'my_stats',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
