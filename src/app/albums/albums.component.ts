import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = [
    {
      "img": '../../assets/img/songs2/01.jpg',
      "name": 'X – Los Angeles - dddddddddddddddddddddddddddddddddddddddddd',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/02.jpg',
      "name": ' Leonard Cohen – I’m Your Man',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/03.jpg',
      "name": 'Eric B. & Rakim – Paid in Full',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/04.jpg',
      "name": 'Lou Reed – The Blue Mask',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/05.png',
      "name": 'Black Flag – Damaged',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/06.jpg',
      "name": 'My Bloody Valentine – Isn’t Anything',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/07.jpg',
      "name": 'Depeche Mode – Music for the Masses',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/08.jpg',
      "name": 'Soft Boys – Underwater Moonlight',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/09.jpg',
      "name": 'The Blasters – Hard Line',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/10.jpg',
      "name": 'Dinosaur Jr. – You’re Living All Over Me',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/11.jpg',
      "name": 'The Replacements – Pleased to Meet Me',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs2/12.jpg',
      "name": 'The Feelies – Crazy Rhythms',
      "Released": '15/02/2019'
    }
  ]

  singles = [

    {
      "img": '../../assets/img/songs/13.png',
      "name": 'The Waterboys – Fisherman’s Blues',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/14.png',
      "name": 'Indigo Girls – Indigo Girls',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/15.png',
      "name": ' Run-D.M.C. – Raising Hell',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/16.png',
      "name": 'Nirvana – Bleach',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/17.png',
      "name": 'Guadalcanal Diary',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/18.png',
      "name": 'Guadalcanal Diary',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/19.png',
      "name": 'Bruce Cockburn – Humans',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/20.png',
      "name": 'Guadalcanal Diary',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/21.png',
      "name": 'The Pretenders – The Pretenders',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/22.png',
      "name": 'Camper Van Beethoven – Key Lime Pie',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/23.png',
      "name": 'The Fall – Hex Enduction Hour',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/24.png',
      "name": 'Midnight Oil – Diesel and Dust',
      "Released": '15/02/2019'
    }
  ]

  appearsIn = [
    {
      "img": '../../assets/img/songs/25.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/26.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/27.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/28.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/29.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    },
    {
      "img": '../../assets/img/songs/30.png',
      "name": 'Dance',
      "Released": '15/02/2019'
    }
  ]
  fansAlso = [
    {
      "img": '../../assets/img/songs/31.png',
      "name": 'Lou Reed',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'
    },
    {
      "img": '../../assets/img/songs/32.png',
      "name": 'Talking Heads',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'

    },
    {
      "img": '../../assets/img/songs/33.png',
      "name": 'T. Rex',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'
    },
    {
      "img": '../../assets/img/songs/34.png',
      "name": 'Iggy Pop',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'
    },
    {
      "img": '../../assets/img/songs/35.png',
      "name": 'Queen',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'
    },
    {
      "img": '../../assets/img/songs/36.png',
      "name": 'The Velvet Underground',
      "Released": '429,222',
      'icon': '../../assets/img/icon/heart.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
