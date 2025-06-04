import { IbgeService } from './../../services/ibge.service';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { PostService } from './../../services/post/post.service';

@Component({
  selector: 'app-home-page',
  imports: [ FormsModule,  CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
 erroCep = '';

constructor(private IbgeService: IbgeService,
   private postService: PostService
) {}

private limparEndereco() {
  this.formData.endereco = '';
  this.formData.cidade = '';
  this.formData.estado = '';
}

buscarEnderecoPorCep() {
  this.erroCep = '';
  const cep = this.formData.cep.replace(/\D/g, '');
  if (cep.length !== 8) {
    this.erroCep = 'CEP inválido.';
    this.limparEndereco();
    return;
  }
  this.IbgeService.getAddressByCep(cep).subscribe({
    next: (data: any) => {
      if (data.erro) {
        this.erroCep = 'CEP não encontrado.';
        this.limparEndereco();
      } else {
        this.formData.endereco = data.logradouro || '';
        this.formData.cidade = data.localidade || '';
        this.formData.estado = data.uf || '';
        console.log(data)
      }
    },
    error: () => {
      this.erroCep = 'Erro ao buscar o CEP.';
      this.limparEndereco();
    }
  });
}

todosCamposVazios(): boolean {
  return Object.values(this.formData).every(valor => valor.trim() === '');
}

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

enviarFormulario(){
  const dadosParaEnviar = {
    ...this.formData,
    plano: this.planoSelecionado.nome
  };

    this.postService.enviarFormulario(dadosParaEnviar).subscribe({
    next: () => {
      alert('Formulário enviado com sucesso!');
      // Limpar formulário se desejar
      this.formData = {
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        cep: '',
        estado: '',
        cidade: ''
      };
      this.planoSelecionado = this.planos[0];
    },error:() => {
      alert('Erro ao enviar o formulário.');
    }
  })
}



}
