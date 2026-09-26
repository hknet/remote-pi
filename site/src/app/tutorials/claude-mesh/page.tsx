import type { Metadata } from "next";
import Link from "next/link";
import { InlineCode } from "@/components/docs-shell";
import { Pager } from "@/components/pager";
import { RevealController } from "@/components/landing/reveal-controller";

export const metadata: Metadata = {
  title: "Claude mesh extra retired",
  description:
    "The optional remote-pi claude launcher and MCP server were removed in Remote Pi 0.8.0.",
};

export default function ClaudeMeshTutorial() {
  return (
    <div className="page">
      <div className="page-body">
        <div className="wrap">
          <div className="tut">
            <header className="page-head reveal" style={{ maxWidth: "none" }}>
              <span className="eyebrow">Tutorial · Retired</span>
              <h1>Claude mesh extra retired</h1>
              <p className="lede">
                The optional <InlineCode>remote-pi claude</InlineCode> launcher
                and its MCP server were removed in Remote Pi 0.8.0. This
                terminal-only integration is no longer included or supported.
              </p>
            </header>

            <article className="prose">
              <p>
                If you came here from an old link, the command examples on this
                page no longer apply. The extension continues to support its
                Pi-based local and cross-PC agent mesh.
              </p>
              <h2>Current agent mesh guides</h2>
              <ul>
                <li>
                  <Link href="/tutorials/mesh-local">Local mesh</Link> — connect
                  Pi agents on the same machine.
                </li>
                <li>
                  <Link href="/tutorials/mesh-remote">Remote mesh</Link> — route
                  between paired PCs through the relay.
                </li>
                <li>
                  <Link href="/tutorials">All tutorials</Link> — browse the
                  supported setup guides.
                </li>
              </ul>
            </article>

            <Pager
              prev={{ href: "/tutorials/daemon", label: "Daemon mode" }}
              next={{ href: "/tutorials", label: "All tutorials" }}
            />
          </div>
        </div>
      </div>
      <RevealController />
    </div>
  );
}
