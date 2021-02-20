export interface StoreState {
  account: StoreAccount,
  // sidenavState: { open: boolean, active: boolean },
  // clubAccount: ...
}

export interface StoreAccount {
  userid: string, 
  roles: role[]
}

export type role = "member" | "admin" | "wizard!"