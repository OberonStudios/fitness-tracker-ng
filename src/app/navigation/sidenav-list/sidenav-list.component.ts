import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavClose = new EventEmitter<void>();
  
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.isAuth = false;
  }
  ngOnInit() {
    this.authSubscription = this.authService.authServiceChange.subscribe(userIsAuth => {
      this.isAuth = userIsAuth;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onSidenavClose () {
    this.sidenavClose.emit();
  }

  onLogout () {
    this.onSidenavClose();
    this.authService.logoutUser();
  }

}
