import { Injectable } from '@angular/core';
import { JwtResponse } from './jwt-response';
 
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const ID_KEY = 'AuthId';
const AUTHORITIES_KEY = 'AuthAuthorities';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<any> = [];
  private userProfile:Array<any> = [];
  constructor() { }
 
  signOut() {
    window.sessionStorage.clear();
  }
 
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
 
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
 
 
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }
 

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
 
  public getAuthorities(): string[] {
    this.roles = [];
   
 
    if (sessionStorage.getItem(TOKEN_KEY)) {
      try {
        return JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY));
      } catch (e) {
        // no or invalid data. Just return empty.
        return [];
    }
  }
 }
}