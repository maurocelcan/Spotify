import { Component, OnInit } from '@angular/core';
import { SongPlaylistService } from '../song-playlist.service';
import { Song } from './Song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    {
      nombre: 'Me Porto Bonito',
      artista: 'Bad Bunny, Chencho Corleone',
      anioDeLanzamiento: 2022,
      album: 'Un Verano Sin Ti',
      reproducciones: 938729948,
      image: 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72',
    },
    {
      nombre: 'Duki:Bzrp Music Session, Vol.50',
      artista: 'Bizarrap, Duki',
      anioDeLanzamiento: 2022,
      album: '-',
      reproducciones: 25400628,
      image: 'https://i.scdn.co/image/ab67616d0000b27393c4eec56cea95c9022ed28f',
    },
    {
      nombre: 'COMO CHILLA ELLA',
      artista: 'YSY A',
      anioDeLanzamiento: 2022,
      album: 'YSYSMO',
      reproducciones: 8253789,
      image: 'https://i.scdn.co/image/ab67616d0000b2738aaa87d1b2aa73e9e6d24dd3',
    },
    {
      nombre: "Can't Help Falling in Love",
      artista: 'Elvis Presley',
      anioDeLanzamiento: 1961,
      album: 'Blue Hawaii',
      reproducciones: 613920377,
      image: 'https://i.scdn.co/image/ab67616d0000b273c61b0774a0a43a3bd1fb9cc5',
    },
  ];

  constructor(private playlist: SongPlaylistService) {}

  ngOnInit(): void {}

  addToPlaylist(song: Song): void {
    this.playlist.addToPlaylist(song);
  }
}
