import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  PopularSongs = [
    {
      "id": 1,
      "img": '../../assets/img/songs/11.png',
      "tittle": 'Heroes',
      "artist": 'David Bowie',
      "album": 'Heroes',
      'time': '5:50',
      "show": true

    },
    {
      "id": 2,
      "img": '../../assets/img/songs/7.png',
      "tittle": 'Mars',
      "artist": 'Prince',
      "album": 'Heroes',
      'time': '3:20',
      "show": true
    },
    {
      "id": 3,
      "img": '../../assets/img/songs/4.png',
      "tittle": 'Reality',
      "artist": 'Bruce Springsteen',
      "album": 'Heroes',
      'time': '5:40',
      "show": true
    },
    {
      "id": 4,
      "img": '../../assets/img/songs/3.png',
      "tittle": 'The Sound',
      "artist": 'Billy Joel',
      "album": 'Heroes',
      'time': '5:50',
      "show": true
    },
    {
      "id": 5,
      "img": '../../assets/img/songs/2.png',
      "tittle": 'Sue',
      "artist": 'Phil Collins',
      "album": 'Heroes',
      'time': '5:50',
      "show": true
    },
    {
      "id": 6,
      "img": '../../assets/img/songs/1.png',
      "tittle": '1Dance',
      "artist": 'Metallica',
      "album": 'Heroes',
      'time': '5:50',
      "show": true
    }

  ]



  onKey(event: any, mydeleteicon: any) {
    let myvalue = event.target.value

    this.PopularSongs = this.PopularSongs.map(item => {
      if (item.artist.toLowerCase().includes(myvalue.toLowerCase()) || item.tittle.toLowerCase().includes(myvalue.toLowerCase())) {
        item.show = true;
      }
      else {
        item.show = false;
      }
      return item;
    })
    if (myvalue.length > 0) {
      mydeleteicon.classList.remove("displaynone");
    } else if (myvalue.length <= 0) {
      mydeleteicon.classList.add("displaynone");
    }

  }




  restthevalue(inputvalue: any, mydeleteicon: any) {
    mydeleteicon.classList.add("displaynone");
    inputvalue.value = ""
    this.PopularSongs.map(item => {
      item.show = true;
      return item;
    })



  }



  constructor() { }

  ngOnInit(): void {

  }

}
