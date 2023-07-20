import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'Salve',
      autoria: 'Augusto',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Salvado',
      autoria: 'Augusto',
      modelo: 'modelo2'
    },
  ];

}
