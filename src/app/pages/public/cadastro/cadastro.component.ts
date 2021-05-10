import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  isProfessor: boolean = false;
  isAluno: boolean = true;
  toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(categoria){
    if (categoria == 'professorCat'){
      this.isProfessor = true;
      this.isAluno = false;
      this.toggle = false;
    } else {
      this.isProfessor = false;
      this.isAluno = true;
      this.toggle = true;
    }
  }

}
