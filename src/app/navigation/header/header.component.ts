import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>(); 
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

  onToggle() {
    this.sidenavToggle.emit();
  }

  onLogout () {
    this.authService.logoutUser();
  }
}
