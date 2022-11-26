import { Component, OnInit } from '@angular/core';
import { SongPlaylistService } from '../song-playlist.service';
import { Song } from './Song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {


  songs: Song[] =[
    {
      nombre: "Me Porto Bonito",
      artista: "Bad Bunny, Chencho Corleone",
      anioDeLanzamiento: 2022,
      album: "Un Verano Sin Ti",
      reproducciones: 938729948,
      image: "assets/img/UnVeranoSinTi.jpeg"
    },
    {
      nombre: "Duki:Bzrp Music Session, Vol.50",
      artista: "Bizarrap, Duki",
      anioDeLanzamiento: 2022,
      album: "-",
      reproducciones: 25400628,
      image: "assets/img/DukiBizarrap.jpeg"
    },
    {
      nombre: "COMO CHILLA ELLA",
      artista: "YSY A",
      anioDeLanzamiento: 2022,
      album: "YSYSMO",
      reproducciones: 8253789,
      image: "assets/img/YSYSMO.jpeg"
    },
    {
      nombre: "Can't Help Falling in Love",
      artista: "Elvis Presley",
      anioDeLanzamiento: 1961,
      album: "Blue Hawaii",
      reproducciones: 613920377,
      image: "assets/img/BlueHawai.jpeg"
    },
    
  ] 
  
    

  constructor(private playlist: SongPlaylistService) {}

  ngOnInit(): void {
  }

  addToPlaylist(song: Song): void{
    this.playlist.addToPlaylist(song);
  }

}
