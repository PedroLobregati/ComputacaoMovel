import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  valor1!: number;
  valor2!: number;
  operacao! : number;
  constructor() {}

  adicionarNumero(valor : string){
      if(this.visor.length == 1 && this.visor == '0' && valor !== '.'){
        this.visor = valor;
      }else{
        this.visor += valor;
    }
  }

  adicionarVirgula(){
    if(!(this.visor.includes('.'))){
      this.visor +='.';
    }
  }

  zerar(){
    this.visor = '0';
  }

  adicionarOperacao(valor: number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.zerar();
  }

  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0:
        this.visor = "" + (this.valor1 + this.valor2);
        break;
      case 1:
        this.visor = "" + (this.valor1 - this.valor2);
        break;
      case 2: 
        this.visor = "" + (this.valor1 * this.valor2);
        break;
      case 3: 
        if(this.valor2 == 0)
          this.visor = "Error";
        else
          this.visor = "" + (this.valor1 / this.valor2);
        break;
    }
  }

  calcularPorcentagem(){
    this.visor = "" + (+this.visor / 100);
  }

  trocarSinal(){
    this.visor = "" + (+this.visor * (-1));
  }
}
