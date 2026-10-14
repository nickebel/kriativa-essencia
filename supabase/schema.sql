-- Kriativa Essência — catálogo e políticas de segurança do Supabase
-- Substitua EMAIL_DA_TIA_AQUI pelo e-mail exato da conta administrativa antes de executar.

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 70),
  category text not null default 'Acessório autoral',
  price numeric(10,2) null check (price is null or price >= 0),
  status text not null default 'available' check (status in ('available', 'soon')),
  description text not null default '',
  image_url text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.products enable row level security;
revoke all on public.products from anon;
revoke all on public.products from authenticated;
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;

drop policy if exists "Anyone can view catalog" on public.products;
create policy "Anyone can view catalog" on public.products for select using (true);

drop policy if exists "Only authorized admin can add products" on public.products;
create policy "Only authorized admin can add products" on public.products for insert to authenticated
with check (lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

drop policy if exists "Only authorized admin can edit products" on public.products;
create policy "Only authorized admin can edit products" on public.products for update to authenticated
using (lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'))
with check (lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

drop policy if exists "Only authorized admin can delete products" on public.products;
create policy "Only authorized admin can delete products" on public.products for delete to authenticated
using (lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('product-images', 'product-images', true, 12582912, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true, file_size_limit = 12582912,
allowed_mime_types = array['image/jpeg','image/png','image/webp'];

drop policy if exists "Authorized admin reads image metadata" on storage.objects;
create policy "Authorized admin reads image metadata" on storage.objects for select to authenticated
using (bucket_id = 'product-images' and lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

drop policy if exists "Authorized admin uploads images" on storage.objects;
create policy "Authorized admin uploads images" on storage.objects for insert to authenticated
with check (bucket_id = 'product-images' and lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

drop policy if exists "Authorized admin updates images" on storage.objects;
create policy "Authorized admin updates images" on storage.objects for update to authenticated
using (bucket_id = 'product-images' and lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'))
with check (bucket_id = 'product-images' and lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));

drop policy if exists "Authorized admin deletes images" on storage.objects;
create policy "Authorized admin deletes images" on storage.objects for delete to authenticated
using (bucket_id = 'product-images' and lower((select auth.jwt() ->> 'email')) = lower('EMAIL_DA_TIA_AQUI'));
