import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs'
import { map } from 'rxjs/operators'

import { AccountService } from '../account.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLoggedIn$ = this.accountService.isAuthenticated()

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

}
