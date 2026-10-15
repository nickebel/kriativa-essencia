# Kriativa Essência — site e catálogo

Site responsivo para apresentar a marca de acessórios autorais, exibir produtos e direcionar visitantes para o Instagram.

## Arquivos
- `index.html`: página pública e catálogo.
- `admin.html`: painel administrativo com login para cadastrar, editar e excluir produtos.
- `config.js`: URL e chave pública de conexão ao Supabase.
- `supabase/schema.sql`: tabela, armazenamento de fotos e regras de segurança no banco.

## Segurança
Visitantes podem consultar o catálogo, mas não alterar os produtos. As operações de escrita são bloqueadas por Row Level Security (RLS) no Supabase, e as regras de banco e de armazenamento aceitam somente o e-mail que você colocar no lugar de `EMAIL_DA_TIA_AQUI` no SQL.

Como o projeto usa GitHub Pages, o arquivo `config.js` é público. Nele, coloque **somente** a Project URL e a publishable key (ou a chave `anon` legada). Não coloque o e-mail da administradora, senha do banco, `service_role` nem secret key nesse arquivo. O painel pode ser acessado, mas só usuários previamente criados no Supabase conseguem entrar; as operações continuam protegidas no banco pelas regras RLS.

## Configuração do Supabase
1. Crie um projeto em [supabase.com](https://supabase.com/).
2. Abra `supabase/schema.sql` e substitua todas as ocorrências de `EMAIL_DA_TIA_AQUI` pelo e-mail exato que sua tia usará para entrar. Execute o SQL no SQL Editor do projeto.
3. Em **Authentication → Users**, crie a conta da sua tia com esse mesmo e-mail e uma senha segura.
4. Depois de criar a conta, desative o cadastro público de novos usuários em **Authentication → Sign In / Providers → Email** (a posição ou o nome exato da opção pode variar). Assim, visitantes não poderão criar contas para tentar entrar no painel.
5. Em **Project Settings → API Keys** ou no diálogo **Connect**, copie a **Project URL** e a chave **Publishable** (ou a `anon` legada). Cole apenas esses dois valores em `config.js`.
6. Publique o site pelo GitHub Pages e teste o catálogo e o painel com a conta da sua tia.

## Publicar no GitHub Pages
No repositório, abra **Settings → Pages** e selecione publicação pela branch `main`, pasta raiz (`/root`). O site público ficará em `https://nickebel.github.io/kriativa-essencia/` e o painel em `https://nickebel.github.io/kriativa-essencia/admin.html`.

## Observações
O catálogo só ficará sincronizado e o painel só permitirá operações após configurar o Supabase. O bucket `product-images` é público para que visitantes possam ver as imagens; apenas a conta autorizada pelas políticas do banco pode enviar ou excluir arquivos.


## Melhorias de SEO, acessibilidade e privacidade

- A página inicial inclui título e descrição próprios, metadados Open Graph/Twitter, dados estruturados de organização, foco visível e link para pular ao conteúdo.
- `robots.txt` e `sitemap.xml` ajudam os buscadores a descobrir as páginas públicas. O painel administrativo está marcado para não ser indexado.
- `privacidade.html` descreve os dados usados pela página pública, pelo WhatsApp, pelo catálogo Supabase e pelo login administrativo. Revise o texto se adicionar analytics, anúncios, formulários ou novos serviços.
- `404.html` fornece uma página de erro no estilo do site. `og-image.svg` é a arte usada na prévia de compartilhamento.
- O catálogo oferece uma alternativa de contato quando o banco não responde e as fotos são exibidas com dimensões declaradas para reduzir mudanças de layout.
- O painel redimensiona as fotos para no máximo 1200 px e tenta convertê-las para WebP no navegador antes de enviá-las ao Supabase.

## Pontos que exigem confirmação no painel

1. Em `supabase/schema.sql`, substitua todas as ocorrências de `EMAIL_DA_TIA_AQUI` pelo e-mail autorizado **antes** de executar o SQL. Não publique senha, chave `service_role` ou segredo no repositório.
2. Confirme no Supabase que a RLS está ativa, que as políticas foram aplicadas e que o cadastro público de usuários está desativado. As regras no banco são a proteção efetiva do painel.
3. O GitHub Pages não aplica arquivos de cabeçalhos como `_headers`. Cabeçalhos HTTP adicionais exigem configuração na hospedagem ou em um proxy/CDN compatível.
4. Depois da publicação, teste a prévia de compartilhamento e envie `sitemap.xml` ao Google Search Console. A auditoria de código não substitui o teste em navegadores e celulares reais.


## React / shadcn UI component workspace

The optional `react-ui/` folder is a separate React + TypeScript + Vite sandbox. It does not replace the live static storefront in the repository root.

```bash
cd react-ui
npm install
npm run dev
```

- Reusable component: `react-ui/components/ui/testimonials-columns-1.tsx`
- Demo: `react-ui/src/demo.tsx` (all testimonial copy and profiles are explicitly illustrative, not genuine customer reviews)
- Global Tailwind CSS v4 and theme: `react-ui/src/index.css`
- shadcn CLI aliases: `react-ui/components.json` and `react-ui/tsconfig.json`
- The `@` alias maps to the `react-ui/` workspace root, so `@/components/ui` points to `react-ui/components/ui`.

Use Node.js 22.12+ with Vite 8. Run `npm run typecheck` and `npm run build` before using the component in another application. This sandbox is not included in the live storefront's public navigation or current Pages build.
