# Quiz appuntamento — 2 settembre

Mini sito statico mobile-first in HTML/CSS/JavaScript. Non richiede framework o build.

## Funzioni

- 11 domande, una per schermata
- ottimizzato per smartphone e safe areas iPhone
- algoritmo a punteggi per scegliere tra 8 appuntamenti
- risultato troll Temptation Island con probabilità del 4%
- risultato finale con copy personalizzato
- invio automatico del risultato e di tutte le risposte via Formspree
- nessun backend necessario

## Attivare la notifica del risultato

1. Vai su Formspree e crea un nuovo form collegato alla tua email.
2. Copia l'endpoint del form, che avrà una forma simile a:

   `https://formspree.io/f/abcdwxyz`

3. Apri `config.js` e sostituisci la stringa vuota:

```js
window.QUIZ_CONFIG = {
  notificationEndpoint: "https://formspree.io/f/IL_TUO_ID",
  notificationSubject: "Risultato quiz 2 settembre"
};
```

Quando Simona arriva al risultato reale, ricevi una mail con:

- appuntamento scelto
- descrizione
- tutte le risposte
- punteggi finali
- data e ora

L'endpoint Formspree può stare nel frontend: è pensato proprio per form statici. Non inserire password, token Telegram o chiavi private nel JavaScript.

## Test locale

Apri `index.html` direttamente nel browser oppure, dalla cartella:

```bash
python3 -m http.server 8000
```

Poi visita `http://localhost:8000`.

## Pubblicazione

Essendo un sito statico puoi pubblicarlo gratis su:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Per la soluzione più rapida, trascina la cartella su Netlify Drop oppure crea un repository GitHub e abilita GitHub Pages.

## File

- `index.html` — struttura della pagina
- `styles.css` — UI mobile-first
- `app.js` — domande, punteggi, risultati e notifica
- `config.js` — configurazione endpoint notifiche

## Personalizzazione rapida

Le opzioni finali sono definite all'inizio di `app.js`, nell'oggetto `results`.
Le domande e i relativi pesi sono nell'array `questions`.

Per cambiare la probabilità del risultato troll cerca:

```js
Math.random() < 0.04
```

`0.04` equivale al 4%.
