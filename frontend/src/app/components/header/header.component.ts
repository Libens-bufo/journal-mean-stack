import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Wellness Journal';

  constructor() { }

  ngOnInit(): void {
  }
  toggleAdd(){
    console.log('toggle');
    
  }

}
