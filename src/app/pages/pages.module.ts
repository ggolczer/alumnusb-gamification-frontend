import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StatsModule } from './stats/stats.module';
import { ProfileModule } from './profile/profile.module';
import { AchievementsModule } from './achievements/achievements.module';
import { UploadCsvModule } from './upload-csv/upload-csv.module';
import { NewFriendRequestModule } from './new-friend-request/new-friend-request.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ProfileModule,
    StatsModule,
    AchievementsModule,
    UploadCsvModule,
    NewFriendRequestModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
