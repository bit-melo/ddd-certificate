# Certifikata DDD me sinkronizim ndërmjet pajisjeve

Faqja + një funksion i vogël Netlify që ruan klientët në Netlify Blobs,
kështu të dhënat janë të njëjta në çdo pajisje.

## Struktura
public/index.html            faqja (certifikata, formulari, verifikimi)
netlify/functions/clients.mjs funksioni /api/clients (GET merr, PUT ruan)
netlify.toml, package.json    konfigurimi

## Vendosja (një herë, rreth 5 minuta)
1. npm i -g netlify-cli
2. netlify login
3. Në këtë dosje: netlify init  (krijo site të ri ose lidh ekzistuesin)
4. Vendos çelësin sekret:
   netlify env:set SYNC_KEY "njeFjalekalimIGjate"
   (ose në app.netlify.com te Site settings, Environment variables)
5. netlify deploy --prod

Alternativë: ngarkoje këtë dosje në një repo GitHub dhe lidhe në Netlify;
SYNC_KEY vendoset po aty te Environment variables.

Shënim: "drag and drop" në Netlify NUK e ndërton funksionin.
Përdor CLI ose GitHub siç përshkruhet më lart.

## Në çdo pajisje
Hape faqen nga adresa e Netlify, shko te "Sinkronizimi ndërmjet pajisjeve",
shkruaj të njëjtin çelës një herë. Statusi tregon "Sinkronizuar".
Nga ai moment klientët dhe numri i fundit i çertifikatës ndahen mes pajisjeve.
Eksporto/Importo mbeten si kopje rezervë offline.
