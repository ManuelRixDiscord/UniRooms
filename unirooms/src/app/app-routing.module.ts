import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { UserAreaComponent } from './user-area/user-area.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'chats',
    component:ChatsComponent
  },
  {
    path:'groups',
    component:GroupsComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'user-area',
    component:UserAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
