<script setup lang="ts">
function onEmailClick() {
  // Basic crawler protection: assemble address only on interaction
  const u = 'hello'
  const d = 'example.com'
  window.location.href = `mailto:${u}@${d}`
}
</script>

<template>
  <section class="vscode-window" role="region" aria-label="VSCode-like window">
    <div class="title-bar">
      mini-placeholder-portal
      <div class="window-controls" aria-hidden="true">
        <div class="close"></div>
        <div class="minimize"></div>
        <div class="maximize"></div>
      </div>
    </div>

    <!-- Tab radios -->
    <input class="i" type="radio" name="tab" id="tab-status" checked />
    <input class="i" type="radio" name="tab" id="tab-contact" />
    <input class="i" type="radio" name="tab" id="tab-cats" />

    <div class="tabs">
      <label class="l" for="tab-status">status.md</label>
      <label class="l" for="tab-contact">contact.ts</label>
      <label class="l" for="tab-cats">cats.gif</label>
    </div>

    <div class="code-panel">
      <!-- status.md: source + preview split -->
      <div id="status-panel" class="panel status">
        <div class="column source" aria-label="Markdown source">
          <div class="comment"># status.md</div>
          <span class="keyword">#</span> <span class="value">Placeholder Portal — Status</span><br />
          <br />
          <span class="string">This page doesn't really have a purpose yet.</span><br />
          <span class="string">It's a remnant of a past project that went unused.</span><br />
          <span class="string">When I find a good use for it, I'll do something with it.</span><br />
          <br />
          <span class="keyword">##</span> <span class="value">My tech stack (so far)</span><br />
          <span class="string">- Vue (frontend)</span><br />
          <span class="string">- Golang (services)</span><br />
          <span class="string">- Postgres (data)</span><br />
          <br />
          <span class="string">I don't know what else to put here yet.</span>
        </div>
        <div class="column preview" aria-label="Rendered preview">
          <h2>Placeholder Portal — Status</h2>
          <p>This page doesn't really have a purpose yet. It's a remnant of a past project that went unused. When I find
            a good use for it, I'll do something with it.</p>
          <h3>My tech stack (so far)</h3>
          <ul>
            <li>Vue (frontend)</li>
            <li>Golang (services)</li>
            <li>Postgres (data)</li>
          </ul>
          <br />
          <p>I don't know what else to put here yet.</p>
        </div>
      </div>

      <!-- contact.ts: TS-like declaration (no preview) -->
      <div id="contact-panel" class="panel">
        <div class="comment">// contact.ts</div>
        <span class="keyword">type</span> <span class="value">Contact</span> = { <span class="attr">label</span>: <span
          class="value">string</span>; <span class="attr">url</span>: <span class="value">string</span>; <span
          class="attr">icon</span>?: <span class="value">'instagram' | 'linkedin' | 'email'</span> }<br />
        <br />
        <span class="keyword">const</span> <span class="attr">contacts</span>: <span class="value">Contact[]</span> =
        [<br />
        &nbsp;&nbsp;{ <span class="attr">label</span>: <span class="string">'Instagram'</span>, <span
          class="attr">url</span>: <span class="string">'https://instagram.com/_borderss'</span>, <span
          class="attr">icon</span>: <span class="string">'instagram'</span> },<br />
        &nbsp;&nbsp;{ <span class="attr">label</span>: <span class="string">'LinkedIn'</span>, <span
          class="attr">url</span>: <span class="string">'https://www.linkedin.com/in/alberts-liepins'</span>, <span
          class="attr">icon</span>: <span class="string">'linkedin'</span> },<br />
        &nbsp;&nbsp;{ <span class="attr">label</span>: <span class="string">'Email'</span>, <span
          class="attr">url</span>: <span class="string">'hello<span class="string">@</span>example.com'</span>, <span
          class="attr">icon</span>: <span class="string">'email'</span> },<br />
        ]<br />
        <br />
        <span class="keyword">export</span> <span class="keyword">default</span> <span class="fn">function</span> <span
          class="value">getContacts</span>(): <span class="value">Contact[]</span> { <span class="keyword">return
        </span>
        <span class="attr">contacts</span>; }
      </div>

      <div id="cats-panel" class="panel cats">
        <img class="pixel-cats" src="/cats.gif" alt="Pixel cats (transparent background)" />
      </div>
    </div>

    <div class="statusbar">
      <span class="status-text">WSL: Ubuntu</span>
      <div class="spacer"></div>
      <div class="actions" aria-label="Social links">
        <a class="icon" href="https://instagram.com/_borderss" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
              d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
        </a>
        <a class="icon" href="https://www.linkedin.com/in/alberts-liepins" target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
              d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3h14zM8.34 18.34V9.75H6.03v8.59h2.31zM7.19 8.61a1.34 1.34 0 100-2.68 1.34 1.34 0 000 2.68zM18 18.34v-4.65c0-2.48-1.32-3.63-3.08-3.63-1.42 0-2.06.78-2.41 1.33v-1.15h-2.31c.03.76 0 8.5 0 8.5h2.31v-4.75c0-.25.02-.5.1-.68.22-.5.72-1.02 1.56-1.02 1.1 0 1.54.77 1.54 1.9v4.55H18z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Container */
.vscode-window-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Window */
.vscode-window {
  width: min(92vw, 860px);
  height: min(70vh, 560px);
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #333;
  font-family: monospace !important;
}

.vscode-window .title-bar {
  height: 32px;
  background: #2c2c3e;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #ccc;
  font-size: 0.85em;
}

.vscode-window .window-controls {
  margin-left: auto;
  display: flex;
  gap: 8px;
}

.vscode-window .window-controls div.close,
.vscode-window .window-controls div.minimize,
.vscode-window .window-controls div.maximize {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.vscode-window .window-controls div.close:hover,
.vscode-window .window-controls div.minimize:hover,
.vscode-window .window-controls div.maximize:hover {
  transform: scale(1.2);
}

.vscode-window .close {
  background: #ff5f56;
}

.vscode-window .minimize {
  background: #ffbd2e;
}

.vscode-window .maximize {
  background: #27c93f;
}

.vscode-window .tabs {
  display: flex;
  background: #252536;
  border-bottom: 1px solid #444;
}

.vscode-window .tabs label.l {
  padding: 8px 18px;
  color: #ccc;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.2s, color 0.2s;
}

.vscode-window .tabs label.l:hover {
  background: #2c2c3e;
  color: #fff;
}

.vscode-window input.i[name="tab"] {
  display: none;
}

.vscode-window #tab-status:checked~.tabs label.l[for="tab-status"],
.vscode-window #tab-contact:checked~.tabs label.l[for="tab-contact"],
.vscode-window #tab-cats:checked~.tabs label.l[for="tab-cats"] {
  background: #1e1e2f;
  color: #fff;
  border-bottom: 2px solid #007acc;
}

.vscode-window .code-panel {
  flex: 1;
  background: #1e1e2f;
  color: #d4d4d4;
  padding: 15px;
  font-size: 0.9em;
  overflow-y: auto;
  line-height: 1.5;
}

/* Modern minimal scrollbar */
.vscode-window .code-panel::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.vscode-window .code-panel::-webkit-scrollbar-track {
  background: transparent;
}

.vscode-window .code-panel::-webkit-scrollbar-thumb {
  background: #3a3a4a;
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.vscode-window .code-panel {
  scrollbar-width: thin;
  scrollbar-color: #3a3a4a transparent;
}

.vscode-window .panel {
  display: none;
  height: 100%;
}

.vscode-window #tab-status:checked~.code-panel #status-panel {
  display: grid;
}

.vscode-window #tab-contact:checked~.code-panel #contact-panel {
  display: block;
}

.vscode-window #tab-cats:checked~.code-panel #cats-panel {
  display: grid;
  align-items: start;
}

/* status split view */
#status-panel {
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

#status-panel .column {
  min-width: 0;
}

#status-panel .source {
  border-right: 1px solid #333b;
  padding-right: 10px;
}

#status-panel .preview h2 {
  margin: 0 0 8px;
}

#status-panel .preview p {
  margin: 6px 0;
}

#status-panel .preview ul {
  margin: 6px 0 6px 18px;
}

#status-panel .preview .muted {
  color: #9aa0aa;
  font-style: italic;
}

/* contact preview block */
.preview-block {
  margin-top: 10px;
  padding: 8px 10px;
  background: #232338;
  border: 1px solid #333;
  border-radius: 6px;
}

/* cats.gif presentation */
.panel.cats {
  position: relative;
  place-items: center;
}

.panel.cats .checker.bg {
  position: absolute;
  inset: 8px;
  background-image: linear-gradient(45deg, #2a2a3a 25%, transparent 25%), linear-gradient(-45deg, #2a2a3a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2a2a3a 75%), linear-gradient(-45deg, transparent 75%, #2a2a3a 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
  opacity: 0.4;
  border-radius: 6px;
}

.panel.cats .pixel-cats {
  image-rendering: pixelated;
  max-width: 100%;
  max-height: min(100%, 330px);
  object-fit: contain;
  z-index: 1;
}

.panel.cats .hint {
  position: absolute;
  bottom: 10px;
  left: 12px;
  color: #aab;
  font-size: 0.85em;
}

/* Token colors */
.vscode-window .keyword {
  color: #569cd6;
}

.vscode-window .string {
  color: #d69d85;
}

.vscode-window .comment {
  color: #6a9955;
  font-style: italic;
  margin-bottom: 6px;
}

.vscode-window .attr {
  color: #9cdcfe;
}

.vscode-window .value {
  color: #dcdcaa;
}

.vscode-window .fn {
  color: #c586c0;
}

/* Status bar + actions */
.statusbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: #252536;
  border-top: 1px solid #444;
}

.status-text {
  color: #a3a3a3;
  font-size: 0.85em;
  padding-left: 10px;
}

.spacer {
  flex: 1;
}

.actions {
  display: flex;
  gap: 8px;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: #d4d4d4;
  background: #1e1e2f;
  border: 1px solid #3a3a4a;
  transition: transform 0.12s ease, background 0.2s ease, border-color 0.2s ease;
}

.icon:hover {
  transform: translateY(-1px);
  background: #2b2b3d;
  border-color: #55556d;
}

.icon svg {
  width: 18px;
  height: 18px;
}

.icon-btn {
  appearance: none;
  background: none;
  cursor: pointer;
}

ul {
  padding-left: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    translate: 0 8px
  }

  to {
    opacity: 1;
    translate: 0 0
  }
}
</style>
