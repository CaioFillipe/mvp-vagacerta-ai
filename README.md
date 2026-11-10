# VagaCerta.AI — Protótipo MVP (Front-End Estático)

> Plataforma HRTech inteligente de recrutamento e desenvolvimento de carreira para o mercado de TI.

## 🚀 Sobre o Projeto
Este repositório contém o código-fonte de um protótipo simulado (mockado), interativo e navegável do **VagaCerta.AI**, desenvolvido com base no plano de negócio da turma INF3A (Disciplina de Empreendedorismo, 2026).

A aplicação funciona **100% de forma estática no navegador**, sem necessidade de backend, banco de dados ou serviços externos pagos, estando totalmente preparada para hospedagem gratuita no **GitHub Pages**.

## ✨ Principais Funcionalidades Implementadas
1. **Agregador de Vagas de TI**: Vagas filtradas por senioridade, modalidade (remoto/híbrido) e tecnologias (React, Python, Node, etc.).
2. **Analisador de Currículo com IA**: Simulação de leitura de currículo frente aos requisitos da vaga, gerando score ATS, palavras-chave ausentes e recomendações práticas.
3. **Plano de Desenvolvimento de Carreira**: Trilha priorizada com cursos, certificações e projetos práticos para fechar lacunas.
4. **Painel do Candidato (Dashboard)**: Histórico de análises, métricas de aderência e gerenciamento de vagas salvas.
5. **Modo Demonstração & Upgrade Premium**: Simulação de assinatura do plano Premium (R$ 24,90/mês) com feedback instantâneo.
6. **Persistência Local (`localStorage`)**: Todos os dados e estados são mantidos localmente, com botão para reiniciar o protótipo.

---

## 🛠️ Tecnologias Utilizadas
- **React 18** + **TypeScript**
- **Vite** (Build otimizado para GitHub Pages)
- **Tailwind CSS** (Estilização moderna e responsiva)
- **Lucide React** (Ícones profissionais)

---

## 📥 Como Executar Localmente

1. Clone o repositório ou descompacte o projeto:
   ```bash
   git clone https://github.com/seu-usuario/vagacerta-ai.git
   cd vagacerta-ai
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador: `http://localhost:5173/`

---

## 📦 Como Gerar o Build de Produção

```bash
npm run build
```
Os arquivos gerados estarão na pasta `dist/`, prontos para publicação estática.

---

## 🌐 Publicação no GitHub Pages
O projeto inclui um workflow automatizado em `.github/workflows/deploy.yml` que compila e publica a aplicação na branch `gh-pages` sempre que houver um `git push` na branch `main`.

---

## 📋 Guia de Demonstração (Roteiro para Avaliadores)
1. **Início (Home)**: Apresente a proposta de valor e o foco vertical exclusivo em TI.
2. **Vagas de TI**: Explore os filtros por senioridade e modalidade. Salve uma vaga de interesse.
3. **Analisador IA**: Selecione uma vaga, visualize o currículo mockado e clique em "Executar Análise". Mostre o score ATS e as palavras-chave ausentes.
4. **Plano de Carreira**: Marque um curso ou projeto como concluído para ver a barra de progresso avançar.
5. **Painel / Premium**: Clique em "Seja Premium" para simular a assinatura de R$ 24,90/mês.
