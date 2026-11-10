# VagaCerta.AI — Protótipo MVP (HTML/CSS/JS Puro)

> Plataforma HRTech inteligente de recrutamento e desenvolvimento de carreira para o mercado de TI.

Este protótipo foi reconstruído utilizando **tecnologias web nativas (Vanilla JS, HTML e CSS)** com Tailwind CSS via CDN. 
O objetivo desta versão é eliminar completamente a necessidade de etapas de *build* ou compilação, sendo **perfeita para hospedagem imediata via drag-and-drop no GitHub Pages** para apresentações acadêmicas.

## 🚀 Como publicar no GitHub (Método Arrastar e Soltar)

Como este projeto não utiliza frameworks complexos, o processo de publicação é o mais simples possível:

1. Acesse o seu repositório no GitHub (`mvp-vagacerta-ai`).
2. Se houver arquivos de tentativas anteriores (como `package.json`, `vite.config.ts`, pastas `src`), **apague-os**. O repositório deve estar limpo.
3. Descompacte o arquivo `.zip` que você acabou de baixar.
4. Abra a pasta descompactada e selecione **os 3 arquivos juntos**:
   - `index.html`
   - `app.js`
   - `data.js`
5. **Arraste e solte** esses arquivos diretamente na página principal do seu repositório no GitHub.
6. Clique no botão verde **"Commit changes"** para salvar.
7. Acesse as **Settings (Configurações) > Pages** do repositório, certifique-se de que a branch `main` está selecionada na raiz (`/ root`) e salve.

Aguarde 1 minuto e o seu link `https://caiofillipe.github.io/mvp-vagacerta-ai/` funcionará perfeitamente!

---

## ✨ Funcionalidades
1. **Agregador de Vagas de TI**: Vagas filtradas e listadas.
2. **Analisador de Currículo com IA**: Simulação local de IA que lê a vaga e o currículo, gerando score ATS e palavras-chave.
3. **Plano de Desenvolvimento**: Trilha com cursos priorizados interativos.
4. **Persistência Local (`localStorage`)**: Os dados de demonstração (vagas salvas, plano premium, histórico) ficam salvos no seu próprio navegador de forma persistente.
