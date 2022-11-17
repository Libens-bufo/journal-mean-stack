import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Wellness Journal';

  showCreateEntry!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggleShowCreateEntry()
    .subscribe(bool => this.showCreateEntry = bool) //catch value from uiService (this.show...: boolean)

   }
  ngOnInit(): void {}

  toggleAdd(){
    this.uiService.toggleShowCreateEntry()
  }

  hasRoute(route: string){ //checks if the passed route is the route
    
    return this.router.url === route;
  }

}
