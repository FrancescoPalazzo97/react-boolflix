# 🎬 React BoolFlix

**Repo:** `react-boolflix`

---

## 📝 Obiettivo

Creare una webapp simile a Netflix utilizzando l'API di [TheMovieDB](https://www.themoviedb.org).

---

## 🔑 Prerequisiti

1. Registrarsi su [TheMovieDB](https://www.themoviedb.org).
2. Ottenere la propria `API_KEY`:
   - User > Impostazioni > API > "Richiedi una nuova API key"
3. Documentazione: [API Reference](https://developers.themoviedb.org/3)

---

## 🔍 Milestone 1

- Creare un layout con una `searchbar` (input + bottone).
- All’evento click, effettuare la chiamata a:

  ```
  https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query=query&language=it-IT
  ```

- Visualizzare:
  - Titolo
  - Titolo originale
  - Lingua
  - Voto (da 1 a 10)

---

## 🌐 Milestone 2

- Mostrare la **bandiera** al posto della lingua (utilizzando codici ISO 639-1).
- Effettuare doppia chiamata:
  - `/search/movie`
  - `/search/tv`
- Unificare i risultati con proprietà comuni.

---

## 🖼️ Milestone 3

- Aggiungere la **copertina** dell'opera:

  ```
  https://image.tmdb.org/t/p/w342/{poster_path}
  ```

- Convertire il voto da decimale (1-10) a stelle (1-5), arrotondando per eccesso.
- Usare icone FontAwesome per le stelle.

---

## 🧱 Milestone 4

- Layout stile Netflix:
  - Header con logo + searchbar
  - Cards con immagine di sfondo (poster)
  - Hover: mostra info aggiuntive + overview

---

## 💡 Consigli

1. Segui le milestone in ordine, non curarti dell’interfaccia fino alla milestone 4.
2. Parti sempre dal caso minimo e funzionante.
3. Usa funzioni per evitare duplicazione del codice.
4. Rivedi ogni milestone prima di andare avanti.
5. Lista lingue: [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

---

## 🧪 Milestone 5 (Opzionale)

- Aggiungi cast (max 5 attori) e generi del film/serie.

## 🧪 Milestone 6 (Opzionale)

- Recupera lista generi da API.
- Crea filtro per mostrare/nascondere le cards in base ai generi.

---
