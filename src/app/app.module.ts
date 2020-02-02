import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzNavbarModule } from 'ngx-materialize';
import { MzMediaModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzCollapsibleModule } from 'ngx-materialize';

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
import { ExperienceComponent } from './core/experience/experience.component';
import { ExtraActivitiesComponent } from './core/extra-activities/extra-activities.component';
import { BlockquoteComponent } from './core/blockquote/blockquote.component';
import { ReferenceCardComponent } from './core/reference-card/reference-card.component';
import { YoutubeVideoComponent } from './core/youtube-video/youtube-video.component';
import { StoryCardComponent } from './core/story-card/story-card.component';

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
    SocialMediaComponent,
    ExperienceComponent,
    ExtraActivitiesComponent,
    BlockquoteComponent,
    ReferenceCardComponent,
    YoutubeVideoComponent,
    StoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzMediaModule,
    MzSidenavModule,
    MzCardModule,
    MzCollapsibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
