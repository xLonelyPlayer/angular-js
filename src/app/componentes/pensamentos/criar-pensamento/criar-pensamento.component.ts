import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento(): void {
    if (!this.pensamento) {
      return;
    }

    this.service.criar(this.pensamento).subscribe((response) => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
