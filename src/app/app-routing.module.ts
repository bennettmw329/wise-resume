import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Screen Components
import { HomeComponent } from './screens/home/home.component';
import { BehindCameraComponent } from './screens/behind-camera/behind-camera.component';
import { OnCameraComponent } from './screens/on-camera/on-camera.component';
import { ReferencesComponent } from './screens/references/references.component';
import { StoriesComponent } from './screens/stories/stories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'behind-camera', component: BehindCameraComponent },
  { path: 'on-camera', component: OnCameraComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: '**', redirectTo: '/' }
];

export const siteRoutes: RouteLink[] = [
  {route:"/", name:"Home", icon:"home"},
  {route:"/on-camera", name:"On Camera", icon:"videocam"},
  {route:"/behind-camera", name:"Behind The Camera", icon:"camera_alt"},
  {route:"/stories", name:"In Print", icon:"chrome_reader_mode"},
  {route:"/references", name:"References", icon:"collections_bookmark"}
];

interface RouteLink {
  route: string,
  name: string,
  icon: string
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
