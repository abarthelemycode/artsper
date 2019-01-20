import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artsper-test';
  isLogged:boolean = false

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(){
    this.authenticationService.isLogged().subscribe(res => this.isLogged = res)
  }

  logout(e){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
