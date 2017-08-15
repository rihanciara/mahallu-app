import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";


@Injectable()
export class CanActivateViaAuthGuardAdmin implements CanActivate {


    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate() {

        if (localStorage.getItem('User')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

}