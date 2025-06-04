---
title: "Compleanno Auri"
date: 2023-10-28T12:00:00+02:00
description: ""
DisableShare: true
---

Se domani è il tuo compleanno, allora non attendere nemmeno un secondo,  
Clicca sul pulsante qui sotto e scopri cosa c'è in serbo per te!!!

## 🔐 Inserisci la password corretta per continuare

<p><strong>Qual è il tuo soprannome che Andre usa più spesso?</strong></p>

<button onclick="document.getElementById('passwordBox').style.display='block';">Clicca per inserire la password</button>

<div id="passwordBox" style="display:none; margin-top:15px;">
  <input type="password" id="passwordInput" placeholder="Inserisci la password">
  <button onclick="checkPassword()">Invia</button>
  <p id="feedback" style="color:red;"></p>
</div>

<div id="riddle" style="display:none; margin-top:20px; font-weight:normal; font-size:1.2em;">
  🔍 <strong>Ecco l'indovinello:</strong><br>
  <em>"Spesso quando ho caldo mi gira anche la testa..."</em><br><br>
  <span style="font-style: italic;"><p style="font-size: 0.6em;">(Occhio! Dopo 30 secondi la scritta scomparirà)</p></span>
</div>

<script>
  let timer; // salva il timeout così puoi azzerarlo se serve

  function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase().trim();
    const feedback = document.getElementById("feedback");
    const riddle = document.getElementById("riddle");

    if (input === "piciulina") {
      riddle.style.display = "block";
      feedback.textContent = "";

      // Cancella eventuale timer precedente
      if (timer) clearTimeout(timer);

      // Nasconde l'indovinello dopo 30 secondi e resetta input
      timer = setTimeout(() => {
        riddle.style.display = "none";
        document.getElementById("passwordInput").value = "";
        feedback.textContent = "⏳ Tempo scaduto! Reinserisci la password.";
      }, 30000);
    } else {
      feedback.textContent = "❌ Riprova!";
    }
  }
</script>