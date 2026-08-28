"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "@/components/landing/icons";

type TermLine = { p: string; c: string };

const INSTALL = {
  label: "shell + Pi",
  lines: [
    { p: "$", c: "pi install npm:@hk_net/remote-pi" },
    { p: "›", c: "/remote-pi" },
    { p: "›", c: "/remote-pi pair" },
  ] satisfies TermLine[],
  copy: "pi install npm:@hk_net/remote-pi",
};

export function Install() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(INSTALL.copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="section" id="install">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Install</span>
          <h2>Install Pi, then pair your phone.</h2>
          <p>
            <a
              className="underline"
              href="https://github.com/earendil-works/pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Pi
            </a>{" "}
            first, then add the plugin with explicit package commands — no
            bootstrap script required.
          </p>
        </div>

        <div className="install-card reveal">
          <div className="terminal">
            <div className="term-bar">
              <span className="lights">
                <i />
                <i />
                <i />
              </span>
              <span className="tlabel">{INSTALL.label}</span>
              <button
                type="button"
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={copy}
              >
                {copied ? <IconCheck /> : <IconCopy />} {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="term-body">
              {INSTALL.lines.map((line, i) => (
                <div className="term-line" key={i}>
                  <span className="pr">{line.p}</span>
                  <span className="cmd">{line.c}</span>
                </div>
              ))}
            </div>
            <p className="term-note">
              Run the first line in your shell; the <code>/remote-pi</code> lines
              run inside <b>Pi</b>. The setup wizard configures Remote Pi, then
              <b>pair</b> shows a QR you scan with the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
