import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = "Suma y resta";
  public contador: number = 0;

  public suma() {
    this.contador++;
  }

  public resta() {
    this.contador--;
  }

  public reset() {
    this.contador=0;
  }
}
