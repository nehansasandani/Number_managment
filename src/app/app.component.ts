import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Number Management';
  isLoginPage = false;

  constructor(private router: Router) {
    this.updateLayoutState(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateLayoutState(event.urlAfterRedirects);
      }
    });
  }

  private updateLayoutState(url: string) {
    this.isLoginPage = url.startsWith('/login');
  }
}
