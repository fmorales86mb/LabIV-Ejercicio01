import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio01';
  edad1:number = 0;
  edad2:number = 0;
  promedio:number = 0;
  suma:number = 0;

  private SetSuma():void{
    this.suma = this.edad1 + this.edad2;
  }

  private SetPromedio():void{
    if(this.suma != 0){
      this.promedio = this.suma / 2;
    }else{
      this.promedio = 0;
    }
  }

  public ClickCalcular():void{
    this.SetSuma();
    this.SetPromedio();
  }

  public ClickLimpiar():void{
    this.suma = 0;
    this.promedio = 0;
    this.edad1 = 0;
    this.edad2 = 0;
  }
}
