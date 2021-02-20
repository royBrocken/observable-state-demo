# Observable store demo
- Displays the basic capabilities of the Observable Store library
- Uses idea of user account with userid and roles props
- UI allows login/logout and checking roles
- Example user has "admin" and "wizard!" roles

## State model
- State model (StoreState) would contain all state for a domain
- Account model are described in store-state.ts
- Additional store slices shown but not implemented

## AccountService manages the "account" slice of state
- AccountService extends ObservableStore<StoreState>
- No subscribing in this service, just pipes watching for state changes 
- Methods return Observables to be subscribe to by Component or better in Component templates (for automatic unsubscribe)
- Reuse internal logic whenever possible by merging observables
```javascript
  hasRole(roleNeeded: role) {
    return combineLatest([ this.isAuthenticated(), this.stateChanged ]).pipe( ... )
  }
```

## App, Login and Toolbar components access and alter state
- These components have properties that point to accountService observables
```javascript
export class LoginComponent {
  isLoggedIn$ = this.accountService.isAuthenticated()
  ...
```
- Observables are subscribed to in template whenever possible
```html
<button *ngIf="(isLoggedIn$ | async) === false">
```

## Resources
- https://github.com/danwahlin/observable-store#settings
- https://app.pluralsight.com/course-player?clipId=2ca68e9e-f604-4459-9d97-7c1b354c0724
- https://www.youtube.com/watch?v=jn4AH5pGWhA
