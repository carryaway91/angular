import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { AnotherComponent } from "../containers/another/another.component";

export class CanDeactivateGuard implements CanDeactivate<AnotherComponent> {
    canDeactivate(component: AnotherComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot) {
            let confirmation: boolean;
            if(!component.saved) {
                confirmation = confirm("You haven't saved the input value. Do you want to continue?");
                return confirmation ? true : false
            }
            return true
            
        }
}