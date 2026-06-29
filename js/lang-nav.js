/**
 * lang-nav.js (EN standalone)
 * Language switch navigates to the corresponding language version page.
 *
 * Folder structure:
 *   k-medi-web-ko/pagename.html  ← Korean
 *   k-medi-web-en/pagename.html  ← English
 */
(function () {
  const LANG_ROOT = {
    KR: "../k-medi-web-ko/",
  };

  /** Returns current filename */
  function getCurrentFilename() {
    const raw = location.pathname.split("/").pop();
    return (raw && raw.endsWith(".html")) ? raw : "index.html";
  }

  /** Returns URL for the given language code */
  function getLangUrl(langCode) {
    const root = LANG_ROOT[langCode];
    if (!root) return null;
    return root + getCurrentFilename();
  }

  /** Returns current language code */
  function getCurrentLang() {
    const lang = document.documentElement.lang || "en";
    if (lang.startsWith("ko")) return "KR";
    if (lang.startsWith("zh")) return "CN";
    if (lang.startsWith("ja")) return "JP";
    if (lang.startsWith("vi")) return "VN";
    return "EN";
  }

  /** Sync active state of all language selection UIs */
  function syncActiveLang() {
    const cur = getCurrentLang();
    document.querySelectorAll(".lang-option").forEach((el) => {
      el.classList.toggle("is-active", el.textContent.trim() === cur);
    });
    document.querySelectorAll(".gnb-lang-tab").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === cur);
    });
    document.querySelectorAll(".lang-sheet__opt").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === cur);
    });
  }

  /** Handle language change — navigate to the target language page */
  function handleLangChange(langCode) {
    if (langCode === getCurrentLang()) return;
    const url = getLangUrl(langCode);
    if (url) location.href = url;
  }

  // ── Desktop dropdown (.lang-option) ──────────────────────────────
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      const code = opt.textContent.trim();
      if (code) handleLangChange(code);
    });
  });

  // ── GNB overlay tabs (.gnb-lang-tab) ─────────────────────────────
  document.querySelectorAll(".gnb-lang-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.lang;
      if (code) handleLangChange(code);
    });
  });

  // ── Mobile bottom sheet (.lang-sheet__opt) ────────────────────────
  document.querySelectorAll(".lang-sheet__opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.lang;
      if (code) handleLangChange(code);
    });
  });

  // ── Sync initial active state ──────────────────────────────────────
  syncActiveLang();
})();
