import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
    institution: string;
    name: string;

    date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        institution: 'Alura',
        name: 'TYPESCRIPT PARTE 3: MAIS TÉCNICAS E BOAS PRÁTICAS',
        date: '16/09/2021',
    },
    {
        institution: 'Alura',
        name: 'TYPESCRIPT PARTE 2: AVANÇANDO NA LINGUAGEM',
        date: '08/09/2021',
    },
    {
        institution: 'Alura',
        name: 'TYPESCRIPT PARTE 1: EVOLUINDO SEU JAVASCRIPT',
        date: '01/09/2021',
    },
    {
        institution: 'Alura',
        name: 'ANGULAR: BOAS PRÁTICAS EM ARQUITETURAS E FORMULÁRIOS',
        date: '19/09/2021',
    },
    {
        institution: 'Alura',
        name: 'MODELAGEM MONGODB: RELACIONAMENTOS E CARDINALIDADE',
        date: '04/08/2021',
    },
    {
        institution: 'Alura',
        name: 'MONGODB: MODELAGEM DE DADOS',
        date: '27/07/2021',
    },
    {
        institution: 'Alura',
        name: 'ANGULAR: EXPLORANDO O FRAMEWORK',
        date: '29/08/2021',
    },
    {
        institution: 'Alura',
        name: 'MONGODB: UMA ALTERNATIVA AOS BANCOS RELACIONAIS TRADICIONAIS',
        date: '25/07/2021',
    },
    {
        institution: 'Alura',
        name: 'HTML5 E CSS3 PARTE 4: AVANÇANDO NO CSS',
        date: '22/05/2021',
    },
    {
        institution: 'Alura',
        name: 'HTML5 E CSS3 PARTE 3: TRABALHANDO COM FORMULÁRIOS E TABELAS',
        date: '21/05/2021',
    },
    {
        institution: 'Alura',
        name: 'HTML5 E CSS3 PARTE 2: POSICIONAMENTO, LISTAS E NAVEGAÇÃO',
        date: '21/05/2021',
    },
    {
        institution: 'Alura',
        name: 'SASS: O CSS COM SUPERPODERES',
        date: '08/05/2021',
    },
    {
        institution: 'Alura',
        name: 'TYPESCRIPT PARTE 1: EVOLUINDO SEU JAVASCRIPT',
        date: '20/05/2021',
    },
    {
        institution: 'Alura',
        name: 'JAVASCRIPT: CONHECENDO O BROWSER E PADRÕES DE PROJETO',
        date: '21/08/2021',
    },
    {
        institution: 'Alura',
        name: 'JAVASCRIPT: PROGRAMANDO NA LINGUAGEM DA WEB',
        date: '07/04/2021',
    },
    {
        institution: 'Alura',
        name: 'JS NA WEB: MANIPULE O DOM COM JAVASCRIPT',
        date: '21/12/2020',
    },
    {
        institution: 'Alura',
        name: 'REACT: FUNCTION COMPONENTS, UMA ABORDAGEM MODERNA',
        date: '02/01/2021',
    },
    {
        institution: 'Alura',
        name: 'HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB',
        date: '21/05/2021',
    },
    {
        institution: 'Alura',
        name: 'BOOTSTRAP 4: CRIANDO UMA LANDING PAGE RESPONSIVA',
        date: '30/09/2020',
    },
    {
        institution: 'Alura',
        name: 'FLEXBOX: POSICIONE ELEMENTOS NA TELA',
        date: '26/11/2020',
    },
    {
        institution: 'Alura',
        name: 'WEB DESIGN RESPONSIVO: PÁGINAS QUE SE ADAPTAM DO MOBILE AO DESK',
        date: '19/09/2020',
    },
];

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
    displayedColumns: string[] = ['institution', 'name', 'date'];
    dataSource = ELEMENT_DATA;

    constructor() {}

    ngOnInit(): void {}
}
