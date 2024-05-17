import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation/services/navigation.service';
import { Profile } from './user/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'telconet';

  navigationRefresh: boolean = false;

  permissionsLogin!: Profile[];

  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.navigationRefresh != this.navigationService._navigationRefresh) {
      this.navigationRefresh = this.navigationService._navigationRefresh;
    }

    this.permissionsLogin = JSON.parse(
      localStorage.getItem('permissionsLogin') || '[]'
    );
  }
}
