import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

function validateAuthorWithoutContent(): Validators {
  return (form: FormGroup) : ValidationErrors | null => {
    if (form.get('autoria')?.value && !form.get('conteudo')?.value) {
      return { withAuthorContentMandatory: 'O pensamento é obrigatório caso houver um autor xesque' };
    }
    return null;
  }
}

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      autoria: [''],
      modelo: ['modelo1']
    }, {
      validators: [validateAuthorWithoutContent()]
    });
  }

  criarPensamento(): void {
    if (!this.formulario.valid) {
      return;
    }

    this.service.criar(this.formulario.value).subscribe((response) => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
