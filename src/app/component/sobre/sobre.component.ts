import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  nome:string = 'Lucas'
  sobrenome:string = 'Brandão'
  profissao:string = 'Desenvolvedor'
  areaAtuacao:string = 'Front-End'

  constructor() { }

  ngOnInit(): void {

  }

}
