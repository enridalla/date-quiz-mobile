const screen = document.getElementById("screen");

const results = {
  bowling: {
    icon: "🎳",
    title: "QUESTIONE DI PRINCIPIO",
    type: "Bowling",
    description: "Così scopriamo chi dei due rosica di più quando perde."
  },
  karting: {
    icon: "🏎️",
    title: "SCELTA DISCUTIBILE",
    type: "Karting",
    description: "Mi sorprende sapere che ti piace perdere."
  },
  escape: {
    icon: "🔐",
    title: "VEDIAMO SE NE USCIAMO",
    type: "Escape room",
    description: "Se usciamo prima del tempo possiamo considerarlo un buon segno sul COME."
  },
  rooftop: {
    icon: "🌇",
    title: "UN PO’ TROPPO CARINO",
    type: "Aperitivo in terrazza",
    description: "Sì, è vagamente romantico. Non montarti la testa."
  },
  mystery: {
    icon: "",
    title: "NON FARE DOMANDE",
    type: "???",
    description: "Ti presenti e ti fidi. Non fare storie."
  },
  cocktails: {
    icon: "🍸",
    title: "ALMENO BEVIAMO BENE",
    type: "Cocktail fatti come si deve",
    description: "Andiamo a bere qualcosa di buono e per una volta non devo inventarmi torture."
  },
  dinner: {
    icon: "🍽️",
    title: "STRANAMENTE NORMALE",
    type: "Cena",
    description: "Per una volta ti porto semplicemente a mangiare in un posto figo."
  },
  villa: {
    icon: "🏛️",
    title: "CULTURA, PURTROPPO",
    type: "Villa Necchi",
    description: "Andiamo a fare finta di essere persone acculturate per una sera."
  }
};

const questions = [
  {
    q: "Scegli semplicemente quella che senti più tua",
    answers: [
      ["Vedremo", { mystery: 1 }],
      ["Non fare storie", { mystery: 1 }],
      ["Non montarti la testa", { rooftop: 1 }],
      ["Con me ti devi basare sulla fiducia", { mystery: 1 }]
    ]
  },
  {
    q: "Momento triste in cui esiste il mondo reale: il 2 quanto presto riesci davvero a liberarti?",
    answers: [
      ["Verso le 19 posso esserci", { villa: 2, escape: 1, karting: 1, dinner: 1 }],
      ["19:30 / 20 è realistico", { escape: 1, karting: 1, bowling: 1, rooftop: 1, dinner: 1 }],
      ["Direi più 20:30", { bowling: 1, rooftop: 2, cocktails: 2, dinner: 2 }],
      ["Meglio dalle 21 in poi", { rooftop: 1, cocktails: 3, dinner: 2, mystery: 1 }]
    ]
  },
  {
    q: "Dopo una giornata di studio, che uso vuoi ancora fare del cervello?",
    answers: [
      ["Nessuno. Ha già lavorato abbastanza", { dinner: 2, rooftop: 2, cocktails: 2 }],
      ["Solo quello necessario per provare finalmente a distinguere un Negroni da un Black Russian", { cocktails: 4, rooftop: 2 }],
      ["Un po’, se la cosa ci fa ridere", { bowling: 2, karting: 2, escape: 1 }],
      ["Abbastanza da verificare se Cartesio e Descartes nel frattempo sono tornati a essere la stessa persona", { villa: 4, escape: 2 }]
    ]
  },
  {
    q: "Dobbiamo scegliere il genere di tortura. Quale ti diverte di più infliggermi?",
    answers: [
      ["Portarmi in qualche posto culturale che conosci solo tu", { villa: 6 }],
      ["Qualcosa in cui puoi provare a battermi e poi fare la splendida", { karting: 4, bowling: 4 }],
      ["Bere qualcosa e vedere quanto ci metto a dire cose che non dovrei", { cocktails: 5, rooftop: 3 }],
      ["Una cosa che nessuno dei due ha mai fatto, tanto ormai la curiosità ha già vinto", { mystery: 6, escape: 3 }]
    ]
  },
  {
    q: "Scenario puramente ipotetico: siamo contro. Quanto è importante che io perda?",
    answers: [
      ["Non mi interessa particolarmente chi vince", { escape: 1, rooftop: 1, dinner: 1 }],
      ["Un po’, sarebbe divertente", { bowling: 2, karting: 1 }],
      ["Abbastanza, soprattutto perché sei tu", { bowling: 3, karting: 3 }],
      ["Non capisco perché dovrebbe esistere un’altra possibilità", { karting: 4, bowling: 4 }]
    ]
  },
  {
    q: "Quanto deve fare il posto per guadagnarsi la tua approvazione?",
    answers: [
      ["Può anche essere normale se quello che facciamo è divertente", { bowling: 2, karting: 2, escape: 2 }],
      ["Basta che sia bello e si stia bene", { rooftop: 3, dinner: 2, cocktails: 1 }],
      ["Mi piace se ha qualcosa di strano o particolare", { villa: 2, mystery: 3, escape: 2 }],
      ["Più sembra un posto che non dovrei conoscere, meglio è", { mystery: 5, villa: 2, cocktails: 1 }]
    ]
  },
  {
    q: "Cibo e drink: qual è la gerarchia giusta?",
    answers: [
      ["Cena vera > tutto il resto", { dinner: 6 }],
      ["Un aperitivo fatto bene mi basta tranquillamente", { rooftop: 5, dinner: 1 }],
      ["Se beviamo, il drink deve valere la pena. Il cibo può arrangiarsi", { cocktails: 6, rooftop: 2 }],
      ["Sono accessori: basta che la cosa principale sia figa", { karting: 2, bowling: 2, escape: 2, villa: 2, mystery: 2 }]
    ]
  },
  {
    q: "Visto che quella diffidente sei tu: se ti dico solo come vestirti e quando farti trovare…",
    answers: [
      ["Mi fido. Purtroppo devo essere coerente con ‘con me ti devi basare sulla fiducia’", { mystery: 5 }],
      ["Mi incuriosisce, ma almeno una mezza informazione la voglio", { mystery: 3, escape: 1 }],
      ["Non mi raggiri!! Se non mi piace perdi la scommessa", { mystery: 2, karting: 1, bowling: 1 }],
      ["No, stavolta il consenso serve e voglio sapere il programma", { dinner: 2, rooftop: 2, villa: 1 }]
    ]
  },
  {
    q: "Sono le 00:30 e siamo ancora fuori. Qual è la spiegazione più plausibile?",
    answers: [
      ["Abbiamo iniziato a parlare e abbiamo perso la cognizione del tempo", { rooftop: 3, cocktails: 3, dinner: 1 }],
      ["Uno dei due si rifiutava di accettare la sconfitta (non io)", { bowling: 3, karting: 3 }],
      ["La curiosità ci ha portati più lontano del previsto", { mystery: 4, escape: 2, villa: 1 }],
      ["Finalmente il drink non era sospettosamente analcolico", { cocktails: 4, rooftop: 2 }]
    ]
  },
  {
    q: "NON CI ALLARGHIAMO — Quanto posso usare la mia versione carina e coccolosa prima che parta un ‘non ci allarghiamo adesso’?",
    answers: [
      ["Contegno", {}],
      ["Un po’ te lo concedo", {}],
      ["Va bene, ma non montarti la testa", {}],
      ["Ormai mi hai spiegato anche il primo e ultimo pensiero ✨", {}]
    ]
  },
  {
    q: "Ultima cosa: ti fidi veramente di un algoritmo scritto da me per decidere questa cosa?",
    answers: [
      ["Sì", {}],
      ["Il giusto", {}],
      ["Non particolarmente", {}],
      ["Tanto alla fine fai quello che vuoi", {}]
    ]
  }
];

const answerKeys = ["A", "B", "C", "D"];
const state = {
  index: 0,
  scores: Object.fromEntries(Object.keys(results).map(k => [k, 0])),
  answers: [],
  actualResult: null,
  notificationSent: false
};

function renderIntro() {
  screen.className = "card";
  screen.innerHTML = `
    <div class="eyebrow">2 settembre</div>
    <h1>SELEZIONE UFFICIALE DELLA TORTURA</h1>
    <p class="lead intro-copy">Visto che mi hai lasciato scegliere come torturarti, ho deciso di rendere la cosa inutilmente complicata.</p>
    <p class="lead intro-copy">Rispondi con attenzione.<br>O anche no, tanto non sai cosa sto calcolando.</p>
    <div class="spacer"></div>
    <button class="primary" id="startBtn">INIZIA</button>
  `;
  document.getElementById("startBtn").addEventListener("click", renderQuestion);
}

function renderQuestion() {
  const item = questions[state.index];
  const pct = Math.round((state.index / questions.length) * 100);

  screen.className = "card";
  screen.innerHTML = `
    <div class="progress-wrap">
      <div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div>
      <div class="progress-label">${state.index + 1}/${questions.length}</div>
    </div>
    <h2 class="question">${item.q}</h2>
    <div class="options">
      ${item.answers.map((a, i) => `
        <button class="option" data-index="${i}">
          <span class="option-key">${answerKeys[i]}</span>
          <span class="option-text">${a[0]}</span>
        </button>
      `).join("")}
    </div>
    <div class="spacer"></div>
  `;

  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => chooseAnswer(Number(btn.dataset.index)));
  });
}

function chooseAnswer(answerIndex) {
  const item = questions[state.index];
  const [label, weights] = item.answers[answerIndex];

  state.answers.push({
    question: item.q,
    answer: label
  });

  Object.entries(weights).forEach(([key, value]) => {
    state.scores[key] += value;
  });

  state.index += 1;

  if (state.index < questions.length) {
    renderQuestion();
  } else {
    renderLoading();
  }
}

function determineResult() {
  const max = Math.max(...Object.values(state.scores));
  const tied = Object.entries(state.scores)
    .filter(([, score]) => score === max)
    .map(([key]) => key);

  if (tied.length === 1) return tied[0];

  // Tie-breaker leggermente casuale per evitare risultati troppo meccanici.
  return tied[Math.floor(Math.random() * tied.length)];
}

function renderLoading() {
  const lines = [
    "Analisi delle risposte…",
    "Calcolo del livello di sopportazione…",
    "Verifica possibilità di rosicamento…",
    "Misurazione ego di Simona…",
    "Valutazione del COME e del SE…",
    "Errore: ego fuori scala.",
    "Ricalibrazione…"
  ];

  screen.className = "card";
  screen.innerHTML = `
    <div class="eyebrow">Elaborazione</div>
    <h2>Sto decidendo il tuo destino</h2>
    <div class="loading-list">
      ${lines.map((line, i) => `<div class="loading-row" data-row="${i}">${line}</div>`).join("")}
    </div>
    <div class="spacer"></div>
  `;

  lines.forEach((_, i) => {
    setTimeout(() => {
      document.querySelector(`[data-row="${i}"]`)?.classList.add("visible");
    }, 420 * i);
  });

  setTimeout(() => {
    state.actualResult = determineResult();
    const troll = Math.random() < 0.04;
    troll ? renderTroll() : renderResult();
  }, 420 * lines.length + 550);
}

function renderTroll() {
  screen.className = "card troll";
  screen.innerHTML = `
    <div class="eyebrow">Risultato</div>
    <div class="result-icon">📺</div>
    <h2>TEMPTATION ISLAND</h2>
    <div class="result-type">Hai chiaramente sbagliato qualcosa.</div>
    <p class="result-description">Non so cosa hai risposto per arrivare qua, ma ormai è fatta.</p>
    <div class="spacer"></div>
    <button class="secondary" id="recalcBtn">NO TI PREGO RICALCOLA</button>
  `;

  document.getElementById("recalcBtn").addEventListener("click", () => {
    screen.innerHTML = `
      <div class="eyebrow">Ricorso accolto</div>
      <h2>Anche per me era troppo.</h2>
      <p class="lead">Ricalcolo in corso…</p>
      <div class="spacer"></div>
    `;
    setTimeout(renderResult, 900);
  });
}

function renderResult() {
  const result = results[state.actualResult];
  screen.className = "card";
  screen.innerHTML = `
    <div class="eyebrow">La tua tortura è stata selezionata</div>
    ${result.icon ? `<div class="result-icon">${result.icon}</div>` : ""}
    <h2>${result.title}</h2>
    <div class="result-type">${result.type}</div>
    <p class="result-description">${result.description}</p>

    <div class="result-meta">
      <div class="meta-row"><span class="meta-label">Giorno</span><span class="meta-value">2 settembre</span></div>
      <div class="meta-row"><span class="meta-label">Ora</span><span class="meta-value">te la comunicherò</span></div>
      <div class="meta-row"><span class="meta-label">Luogo</span><span class="meta-value">informazioni riservate</span></div>
    </div>

    <div class="spacer"></div>
    <button class="primary" id="acceptBtn">ACCETTO IL MIO DESTINO</button>
    <div class="toast" id="notifyStatus"></div>
  `;

  document.getElementById("acceptBtn").addEventListener("click", () => {
    document.getElementById("acceptBtn").textContent = "ORMAI È FATTA";
  });

  sendNotification();
}

async function sendNotification() {
  if (state.notificationSent) return;
  const endpoint = window.QUIZ_CONFIG?.notificationEndpoint?.trim();
  const status = document.getElementById("notifyStatus");

  if (!endpoint) {
    if (status) status.textContent = "";
    return;
  }

  const result = results[state.actualResult];
  const payload = {
    _subject: window.QUIZ_CONFIG?.notificationSubject || "Risultato quiz 2 settembre",
    risultato: `${result.title} — ${result.type}`,
    descrizione: result.description,
    timestamp: new Date().toLocaleString("it-IT"),
    risposte: state.answers.map((a, i) => `${i + 1}. ${a.question}\n→ ${a.answer}`).join("\n\n"),
    punteggi: JSON.stringify(state.scores)
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    state.notificationSent = true;
    sessionStorage.setItem("dateQuizNotified", "1");
  } catch (err) {
    console.error("Invio notifica fallito:", err);
    // Nessun errore visibile a Simona: il quiz continua a funzionare.
  }
}

renderIntro();
