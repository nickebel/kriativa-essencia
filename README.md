# Kriativa Essência — site e catálogo

Site responsivo para apresentar a marca de acessórios autorais, exibir produtos e direcionar visitantes para o Instagram.

## Arquivos
- `index.html`: página pública e catálogo.
- `admin.html`: painel administrativo com login para cadastrar, editar e excluir produtos.
- `config.js`: configurações públicas do projeto Supabase (preencha antes de usar).
- `supabase/schema.sql`: tabela, armazenamento de fotos e regras de segurança no banco.

## Segurança
Visitantes podem apenas consultar o catálogo. Para administrar produtos é necessário entrar com a conta autorizada. As permissões de gravação são protegidas no Supabase por Row Level Security (RLS), incluindo o upload e a remoção das fotos. A verificação de e-mail no front-end é apenas uma camada adicional de interface; a segurança efetiva depende das políticas no banco.

**Nunca coloque a chave `service_role`, senhas ou outros segredos no front-end ou neste repositório.** Use somente a chave pública/anon no `config.js`.

## Configuração do Supabase
1. Crie um projeto em [supabase.com](https://supabase.com/).
2. No arquivo `supabase/schema.sql`, substitua todas as ocorrências de `EMAIL_DA_TIA_AQUI` pelo e-mail exato da conta administrativa. Execute o SQL no SQL Editor do projeto.
3. Em **Authentication → Users**, crie a conta da sua tia com esse e-mail e uma senha segura. Desative a criação pública de novas contas.
4. Em **Project Settings → API**, copie a Project URL e a chave pública/anon. Preencha os três campos em `config.js`: `SUPABASE_URL`, `SUPABASE_ANON_KEY` e `ADMIN_EMAIL`.
5. Publique o site usando GitHub Pages (instruções abaixo) ou outro host estático.
6. Acesse `admin.html`, entre com a conta criada e teste o cadastro de um produto e de uma foto.

## Publicar no GitHub Pages
No repositório, abra **Settings → Pages** e selecione publicação pela branch `main`, pasta raiz (`/root`). Após publicar, o site público fica em `https://nickebel.github.io/kriativa-essencia/` e o painel em `https://nickebel.github.io/kriativa-essencia/admin.html`.

## Observações
O catálogo só ficará sincronizado e o painel só permitirá operações após configurar o Supabase. As fotos usam o bucket público `product-images` para que possam aparecer para visitantes; somente a conta autorizada pode enviar, alterar ou remover arquivos.
