import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './song-list/Song';


/**
 * Maneja la logica de la Playlist
 */


@Injectable({
  providedIn: 'root'
})

export class SongPlaylistService {

  private _songList: Song[] = [];

  songList: BehaviorSubject<Song[]> = new BehaviorSubject(this._songList);

  constructor() {

  }

  addToPlaylist(song: Song){
    if(!this._songList.includes(song)){
      this._songList.push(song); 
      console.log(this._songList);
    }
    this.songList.next(this._songList);
  }

  deleteToPlaylist(song:Song){
   this._songList.forEach((element, index)=>{
    if(element == song) {
      this._songList.splice(index,1);
    }
   });
  }
}
