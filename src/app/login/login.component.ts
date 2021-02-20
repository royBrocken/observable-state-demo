import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AccountService } from '../account.service'
import { role } from '../store-state.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn$ = this.accountService.isAuthenticated()
  roleCheck$: Observable<boolean>

  constructor(
    private accountService: AccountService
  ) { }

  login() {
    this.accountService.setAccount({ userid: "bobberts", roles: ["admin", "wizard!"] })
  }
  logout() {
    this.accountService.setAccount(null)
  }

  checkRole(roleNeeded: role) {
    this.roleCheck$ = this.accountService.hasRole(roleNeeded)
  }
}
