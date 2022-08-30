import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Neat Tree', 
      imageUrl: '../assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree on my hike today.'
    }, 
    { 
      title: 'Snowy Mountain', 
      imageUrl: '../assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    }, 
    { 
      title: 'Mountain Biking', 
      imageUrl: '../assets/biking.jpeg',
      username: 'bikingviking',
      content: 'I did some biking today, also I am a vegan.'
    },
    { 
      title: 'Mountain Biking', 
      imageUrl: '../assets/biking.jpeg',
      username: 'bikingviking',
      content: 'I did some biking today, also I am a vegan.'
    } 
    ];
}
