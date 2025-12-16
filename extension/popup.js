// AllTube Popup Logic
// Diese Datei enthält NUR UI-Logik.
// Keine YouTube-, keine Backend-, keine AI-Logik hier.

document.addEventListener("DOMContentLoaded", () => {
  // Elemente holen
  const statusText = document.getElementById("statusText");
  const translateBtn = document.getElementById("translateBtn");
  const languageSelect = document.getElementById("languageSelect");

  // Sicherheitscheck
  if (!statusText || !translateBtn || !languageSelect) {
    console.error("Popup UI Elemente fehlen");
    return;
  }

  // Initialer Status
  setStatus("Bereit");

  // Button Klick
  translateBtn.addEventListener("click", () => {
    const selectedLanguage = languageSelect.value;

    // UI-State ändern
    translateBtn.disabled = true;
    setStatus("Übersetzung wird vorbereitet…");

    // Simulierter Ablauf (später: echter Flow)
    setTimeout(() => {
      setStatus(
        `Übersetzung gestartet (Zielsprache: ${selectedLanguage.toUpperCase()})`
      );
      translateBtn.disabled = false;
    }, 1000);
  });

  // Hilfsfunktion für Status
  function setStatus(text) {
    statusText.textContent = text;
  }
});
