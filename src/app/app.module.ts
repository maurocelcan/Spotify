import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SpotifyPremiumComponent } from './spotify-premium/spotify-premium.component';
import { SpotifyMusicComponent } from './spotify-music/spotify-music.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SpotifyPremiumComponent,
    SpotifyMusicComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
