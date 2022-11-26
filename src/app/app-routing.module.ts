import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyMusicComponent } from './spotify-music/spotify-music.component';
import { SpotifyPremiumComponent } from './spotify-premium/spotify-premium.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'music',
    pathMatch: 'full'
    
  },
  {
    path: 'premium',
    component: SpotifyPremiumComponent
  },
  {
    path: 'music',
    component: SpotifyMusicComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
