import { ObservableStore } from "@codewithdan/observable-store"
import { combineLatest } from "rxjs"
import { map } from "rxjs/operators"
import { role, StoreAccount, StoreState } from "./store-state.model"

export class AccountService extends ObservableStore<StoreState> {
  constructor() {
    super({
      trackStateHistory: true,
      logStateChanges: true,
    })
  }
  
  setAccount(account: StoreAccount) {
    this.setState({ account }, "set account")
  }

  isAuthenticated() {
    return this.stateChanged.pipe(map(state => !!(state && state.account)))
  }

  hasRole(roleNeeded: role) {
    return combineLatest([ this.isAuthenticated(), this.stateChanged ])
      .pipe(
        map(([ isAuthenticated, state ]) => 
          isAuthenticated && !!(state?.account?.roles?.includes(roleNeeded))
      ))
  }

}