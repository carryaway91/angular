import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guards/auth.service';
@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  id: number;
  saved: boolean = true;
  clickedSaved: boolean = false;
  loggedIn: boolean;
  value: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.loggedIn;
    this.authService.loggedInUpdate.subscribe(is => {
      this.loggedIn = is
    })
  }

  checkSaved() {
    if(this.value.length > 0 && !this.clickedSaved) {
      this.saved = false      
    }
    this.clickedSaved = false
    if(this.value.length === 0) {
      this.saved = true
    }
  }
  save() {
    this.saved = true
    this.clickedSaved = true
  }

  onLogin() {
    this.authService.login()
  }

  onLogout() {
    this.authService.logout()
  }

}
