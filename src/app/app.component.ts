import { Component } from '@angular/core';
import { AccountService } from './account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theStore$ = this.accountService.globalStateChanged

  constructor(
    private accountService: AccountService
  ) {
  }
}
