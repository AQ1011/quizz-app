import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class LoggedIn implements CanActivate {
  constructor(private token: TokenStorageService,
    private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(this.token.getUser())
      return true;
    this.router.navigate(['/login']);
    return false;
  }
}