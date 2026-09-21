"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CertificateCardProps = {
  title: string;
  issuer: string;
  year: string;
  tag: string;
  image?: string;
};

export function CertificateCard({
  title,
  issuer,
  year,
  tag,
  image,
}: CertificateCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="group glass relative h-full overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 blur-2xl transition-opacity group-hover:opacity-100" />
        <div className="flex justify-between">
          <span className="text-3xl">🏅</span>
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 ring-1 ring-white/10">
            {tag}
          </span>
        </div>
        <h3 className="mt-5 text-base font-bold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-zinc-500">{issuer}</p>
        <p className="mt-3 font-mono text-xs text-blue-300">{year}</p>

        {image ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group/thumb mt-4 flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 text-left transition-colors hover:border-blue-400/40 hover:bg-white/10"
          >
            <span className="relative block h-12 w-10 shrink-0 overflow-hidden rounded-lg bg-zinc-900">
              <Image src={image} alt={title} fill className="object-cover" />
            </span>
            <span className="text-xs font-medium text-zinc-400 transition-colors group-hover/thumb:text-blue-300">
              Lihat sertifikat ↗
            </span>
          </button>
        ) : (
          <p className="mt-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-600">
            Belum ada gambar — letakkan file di{" "}
            <code className="text-zinc-500">public/sertifikat/</code> lalu isi
            field <code className="text-zinc-500">image</code> di data.
          </p>
        )}
      </div>

      {open && image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
        >
          <div
            className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition-colors hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}