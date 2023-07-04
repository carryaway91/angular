import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot  } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const AuthGuard = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
    authService: AuthService) => {
        console.log(route)
        console.log(state)
        const isLogged = await inject(AuthService).isAuthenticated()
        if(!isLogged) {
            alert('Not Auth')
        }
        return isLogged;
    }
