import { Subject } from "rxjs";

export class AuthService {
    loggedIn = false;
    loggedInUpdate = new Subject<boolean>()

    login() {
        this.loggedIn = true
        this.loggedInUpdate.next(this.loggedIn)
    }
    
    logout() {
        this.loggedIn = false
        this.loggedInUpdate.next(this.loggedIn)
    }

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(this.loggedIn) 
            }, 800)
        })
        return promise;
    }

    
}