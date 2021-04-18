import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './colleg-conference/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HighschoolConferenceComponent } from './highschool-conference/highschool-conference.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: '', component: HomescreenComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'highschool-conference', component: HighschoolConferenceComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
