# 🕒 Horas do Dia

![License](https://img.shields.io/badge/license-MIT-green)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Uma aplicação web responsiva que exibe a hora atual e adapta o visual de acordo com o período do dia: madrugada, manhã, tarde ou noite.

## 📋 Sobre o Projeto

Esta aplicação web simples foi desenvolvida com HTML, CSS e JavaScript puro para mostrar o horário atual e alterar o tema da página de acordo com o período do dia:

- **Madrugada (00h às 05h)**: Fundo escuro e imagem noturna
- **Manhã (06h às 11h)**: Fundo alaranjado e imagem matinal
- **Tarde (12h às 17h)**: Fundo dourado e imagem da tarde
- **Noite (18h às 23h)**: Fundo azul escuro e imagem noturna

## ✨ Demonstração

Você pode ver a aplicação em funcionamento [aqui](https://mgosalan-dev.github.io/horas-do-dia/).

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla

## 📥 Como Usar

### Instalação Local

1. Clone este repositório:
```bash
git clone https://github.com/mgosalan-dev/horas-do-dia.git
```

2. Navegue até a pasta do projeto:
```bash
cd horas-do-dia
```

3. Abra o arquivo `index.html` no seu navegador preferido.

### Ou simplesmente acesse:

[https://mgosalan-dev.github.io/horas-do-dia/](https://mgosalan-dev.github.io/horas-do-dia/)

## 🔄 Funcionalidades

- **Exibição em tempo real**: Mostra a hora e os minutos atuais
- **Design responsivo**: Adapta-se a diferentes dispositivos
- **Mudança automática de tema**: Altera o visual baseado no horário
- **Carregamento dinâmico**: Atualiza o tema no carregamento da página

## 🧠 Como Funciona

A aplicação usa JavaScript para obter a hora atual do sistema e, com base nessa informação, altera o estilo da página e as imagens exibidas.

```javascript
// Trecho principal da função que determina o tema
if (hora >= 0 && hora < 6){
    // Madrugada
} else if(hora>= 6 && hora < 12){
    // Manhã
} else if(hora>= 12 && hora <18){
    // Tarde
} else{
    // Noite
}
```

## 🛠️ Estrutura do Projeto

```
horas-do-dia/
├── index.html         # Estrutura HTML principal
├── estilo.css         # Estilização da página
├── contador-de-horas.js # Lógica JavaScript
├── img/               # Pasta com as imagens de cada período
│   ├── madrugada.png
│   ├── manha.jpg
│   ├── tarde.jpg
│   └── noite.jpg
├── LICENSE            # Licença MIT
└── README.md          # Documentação
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Ideias para Melhorias Futuras

- [ ] Adicionar saudação personalizada para cada período
- [ ] Implementar um relógio digital com segundos
- [ ] Adicionar opção de alternar entre 12h e 24h
- [ ] Incluir animações nas transições de tema
- [ ] Adicionar previsão do tempo baseada na localização

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ && ☕ por [Manoel Gosalan](https://github.com/mgosalan-dev).

---

⭐️ Se este projeto te ajudou, não se esqueça de dar uma estrela! ⭐️
