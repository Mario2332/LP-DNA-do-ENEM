# 🚀 Landing Page DNA do ENEM - Instruções de Uso

## 📁 Arquivos Entregues

### Principais Arquivos:
- **`dna-enem-landing-essencial.zip`** - Projeto completo da landing page
- **`documentacao_espacos_imagens.md`** - Documentação detalhada dos espaços para imagens
- **`analise_produto.md`** - Análise estratégica do produto e estrutura da página
- **`INSTRUCOES_USO.md`** - Este arquivo com instruções

## 🛠️ Como Usar

### 1. **Instalação e Configuração**

```bash
# Extrair o arquivo ZIP
unzip dna-enem-landing-essencial.zip

# Entrar na pasta do projeto
cd dna-enem-landing

# Instalar dependências
npm install
# ou
pnpm install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
pnpm run dev
```

### 2. **Visualizar a Landing Page**
- Após executar `npm run dev`, acesse: `http://localhost:5173`
- A página será carregada com todos os elementos funcionais

### 3. **Adicionar Suas Imagens**

#### Espaços Identificados:
1. **Hero Section** - Imagem principal do produto
2. **Sistema Completo** - Visão geral dos dois pilares
3. **Preview LML** - Exemplo das Listas de Mapeamento
4. **Preview Conceitos** - Exemplo dos Conceitos Vitais
5. **Foto do Mentor** - Imagem profissional
6. **Depoimentos** - 2 espaços para testimonials

#### Como Substituir:
1. Coloque suas imagens na pasta `src/assets/`
2. Edite o arquivo `src/App.jsx`
3. Substitua os blocos com bordas tracejadas pelas suas imagens
4. Use o formato: `<img src="/src/assets/sua-imagem.jpg" alt="Descrição" />`

### 4. **Personalização**

#### Cores e Estilo:
- Edite `src/App.css` para ajustar cores
- As cores principais estão definidas nas variáveis CSS
- Gradientes podem ser modificados nas classes Tailwind

#### Textos e Conteúdo:
- Todo o conteúdo está no arquivo `src/App.jsx`
- Busque pelos textos que deseja alterar
- Mantenha a estrutura HTML para preservar o design

#### Preços e CTAs:
- Localize "R$ 197" para alterar o preço
- Botões de CTA estão claramente identificados
- Links podem ser adicionados nos botões

### 5. **Deploy/Publicação**

#### Opção 1 - Build Local:
```bash
npm run build
# Arquivos prontos estarão na pasta 'dist/'
```

#### Opção 2 - Hospedagem Gratuita:
- **Vercel**: Conecte seu repositório GitHub
- **Netlify**: Faça upload da pasta 'dist/'
- **GitHub Pages**: Configure o repositório

## 🎨 Características da Landing Page

### ✅ **Elementos de Conversão Implementados:**
- **Urgência**: Contador regressivo animado
- **Escassez**: Mensagens de "última chance"
- **Prova Social**: Seção do mentor + espaços para depoimentos
- **Benefícios Claros**: Cards com transformações prometidas
- **CTAs Estratégicos**: 3 botões principais em pontos-chave
- **Objeções**: FAQ completo
- **Garantia**: Política de 7 dias

### 🎯 **Design Moderno:**
- **Gradientes**: Fundos com transições suaves
- **Animações**: Framer Motion para interações fluidas
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Tipografia**: Hierarquia clara e legível
- **Cores**: Paleta profissional com destaques estratégicos

### 📱 **Responsividade:**
- Layout adaptativo para todas as telas
- Botões otimizados para touch
- Imagens que se ajustam automaticamente
- Texto legível em qualquer dispositivo

## 🔧 **Tecnologias Utilizadas:**
- **React 19** - Framework principal
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Vite** - Build tool

## 📞 **Suporte**

### Problemas Comuns:
1. **Erro ao instalar**: Certifique-se de ter Node.js 18+ instalado
2. **Imagens não aparecem**: Verifique o caminho das imagens
3. **Animações lentas**: Teste em modo de produção (`npm run build`)

### Próximos Passos Recomendados:
1. ✅ Adicionar suas imagens nos espaços marcados
2. ✅ Personalizar textos e preços
3. ✅ Configurar links dos botões de CTA
4. ✅ Testar em diferentes dispositivos
5. ✅ Fazer deploy para produção

## 🎯 **Dicas de Otimização:**

### Para Máxima Conversão:
- **Teste A/B** nos títulos principais
- **Otimize** as imagens para carregamento rápido
- **Monitore** o comportamento dos usuários
- **Ajuste** os CTAs baseado nos resultados

### SEO Básico:
- Adicione meta tags no `index.html`
- Otimize as imagens com alt text
- Configure Google Analytics
- Implemente pixels de conversão

---

**🚀 Sua landing page está pronta para converter! Boa sorte com as vendas do DNA do ENEM!**

