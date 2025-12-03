import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  ngOnInit() {
    const element = document.querySelector('html') as HTMLElement;
    element.classList.toggle('my-app-dark');
  }
}
