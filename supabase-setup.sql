-- Respaldo de la configuración aplicada en el proyecto web-bardales.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('site-images','site-images',true,10485760,array['image/png','image/jpeg','image/webp']) on conflict (id) do nothing;

create policy "Administrador inserta imagenes" on storage.objects for insert to authenticated
with check (bucket_id='site-images' and lower((select auth.jwt()->>'email'))='mbarrigapozo9@gmail.com');
create policy "Administrador consulta imagenes" on storage.objects for select to authenticated
using (bucket_id='site-images' and lower((select auth.jwt()->>'email'))='mbarrigapozo9@gmail.com');
create policy "Administrador actualiza imagenes" on storage.objects for update to authenticated
using (bucket_id='site-images' and lower((select auth.jwt()->>'email'))='mbarrigapozo9@gmail.com')
with check (bucket_id='site-images' and lower((select auth.jwt()->>'email'))='mbarrigapozo9@gmail.com');
