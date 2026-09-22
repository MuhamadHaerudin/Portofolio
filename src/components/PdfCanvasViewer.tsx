"use client";

import { useEffect, useRef, useState } from "react";

type PdfCanvasViewerProps = {
  src: string;
  title: string;
};

export function PdfCanvasViewer({ src, title }: PdfCanvasViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;
    let destroy: (() => Promise<void>) | null = null;
    const container = containerRef.current;
    if (!container) return;

    setStatus("loading");
    container.replaceChildren();

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const res = await fetch(src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = await res.arrayBuffer();
        if (cancelled) return;

        const task = pdfjs.getDocument({ data: new Uint8Array(buf) });
        destroy = () => task.destroy();
        const pdf = await task.promise;
        if (cancelled) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const maxCss = Math.min(container.clientWidth || 720, 880);
          const viewport = page.getViewport({
            scale: (maxCss / base.width) * dpr,
          });

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
          canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
          canvas.className = "mx-auto block rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.4)]";
          canvas.setAttribute("aria-label", `${title} — halaman ${i}`);
          container.appendChild(canvas);

          await page.render({ canvas, viewport }).promise;
        }

        if (!cancelled) setStatus("ready");
      } catch (err) {
        console.error(err);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      destroy?.().catch(() => {});
    };
  }, [src, title]);

  return (
    <div className="relative h-full">
      <div
        ref={containerRef}
        className="h-full select-none overflow-y-auto overflow-x-hidden p-4 sm:p-6"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      {status === "loading" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0a0a12]/80">
          <div className="flex flex-col items-center gap-3 text-sm text-zinc-400">
            <span className="h-7 w-7 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
            Memuat sertifikat…
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-zinc-500">
            Gagal memuat sertifikat. Coba lagi nanti.
          </p>
        </div>
      )}
    </div>
  );
}
