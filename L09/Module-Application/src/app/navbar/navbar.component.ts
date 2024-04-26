import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ICurrentUser } from '../_models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user: ICurrentUser;
  userSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe(
      (currectUser: ICurrentUser) => {
        this.user = currectUser;
      }
    );
  }

  onLogout() {
    this.authService.logout();
    this.toastr.warning('Logged Out Successfully');
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
