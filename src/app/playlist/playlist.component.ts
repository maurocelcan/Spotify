import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Song } from '../song-list/Song';
import { SongPlaylistService } from '../song-playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  songList$: Observable<Song[]>;

  constructor(private playlist: SongPlaylistService) {
    this.songList$ = playlist.songList.asObservable();
  }

  ngOnInit(): void {
  }

  deleteToPlaylist(song: Song):void{
    this.playlist.deleteToPlaylist(song);
  }
}
