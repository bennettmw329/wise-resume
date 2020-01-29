import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzNavbarModule } from 'ngx-materialize';
import { MzMediaModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { OnCameraComponent } from './screens/on-camera/on-camera.component';
import { BehindCameraComponent } from './screens/behind-camera/behind-camera.component';
import { StoriesComponent } from './screens/stories/stories.component';
import { ReferencesComponent } from './screens/references/references.component';
import { SocialMediaComponent } from './core/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    OnCameraComponent,
    BehindCameraComponent,
    StoriesComponent,
    ReferencesComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzMediaModule,
    MzSidenavModule,
    MzParallaxModule,
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
