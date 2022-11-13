import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Wellness Journal';

  showCreateEntry!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleShowCreateEntry()
    .subscribe(bool => this.showCreateEntry = bool) //catch value from uiService (this.show...: boolean)

   }
  ngOnInit(): void {}

  toggleAdd(){
    this.uiService.togggleShowCreateEntry()
    
  }

}
