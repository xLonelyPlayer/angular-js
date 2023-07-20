import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento?: Pensamento

  larguraPensamento(): 'pensamento-g' | 'pensamento-p' {
    if (!this.pensamento) {
      return 'pensamento-p';
    }

    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p';
  }

}
