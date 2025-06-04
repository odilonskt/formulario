import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [ FormsModule,  CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  estadoSelecionado = '';
  cidadeSelecionado = '';
estados = [
  { nome: 'São Paulo', sigla: 'SP' },
  { nome: 'Rio de Janeiro', sigla: 'RJ' },
  { nome: 'Minas Gerais', sigla: 'MG' }
];

planos = [
  {
    img:'../../../assets/img/Surfbot-Icon1.svg',
    nome: 'Infantil',
    preco: 'R$ 49,00 / AULA',
    detalhes: [
      'Público entre 5 e 15 anos',
      'Equipamentos fornecidos',
      'Horários de Sex à Sab',
      '2 horas seguidas de aula'
    ]
  },
  {
    img:'../../../assets/img/icon-group2.svg',
    nome: 'Adulto',
    preco: 'R$ 49,00 / AULA',
    detalhes: [
      'Público entre 5 e 15 anos',
      'Equipamentos fornecidos',
      'Horários de Sex à Sab',
      '2 horas seguidas de aula'
    ]
  },
  {
    img:'../../../assets/img/icon-group3.svg',
    nome: 'Profissional',
    preco: 'R$ 49,00 / AULA',
    detalhes: [
      'Público entre 5 e 15 anos',
      'Equipamentos fornecidos',
      'Horários de Sex à Sab',
      '2 horas seguidas de aula'
    ]
  }
];


planoSelecionado = this.planos[0];

selecionarPlano(plano: any) {
  this.planoSelecionado = plano;
}

formData = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cep: '',
  estado: '',
  cidade: ''
};

todosCamposVazios():boolean {
    return Object.values(this.formData).every(valor => valor.trim() === '');
}


}
