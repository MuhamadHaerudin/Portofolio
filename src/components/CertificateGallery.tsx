"use client";

import { useEffect, useMemo, useState } from "react";
import {
  certificateGroups,
  certificateFileBase,
  type CertificateItem,
} from "@/data/certificates";

function PdfModal({ item, onClose }: { item: CertificateItem; onClose: () => void }) {
  const src = `${certificateFileBase}${item.file}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="glass relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{item.title}</p>
            <p className="font-mono text-xs text-zinc-500">
              {item.year} · {item.file}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10"
            >
              ↗ Buka
            </a>
            <a
              href={src}
              download
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10"
            >
              ⬇ Unduh
            </a>
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sm text-zinc-300 transition-colors hover:bg-white/10"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="relative flex-1 bg-[#0a0a12]">
          <iframe
            src={src}
            title={item.title}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export function CertificateGallery() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CertificateItem | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      certificateGroups.reduce((acc, g) => acc + g.items.length, 0)
    );
  }, []);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return certificateGroups;
    return certificateGroups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (item) =>
            item.title.toLowerCase().includes(q) || item.year.includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  return (
    <div className="mt-16">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="glass relative flex-1 rounded-full">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Cari di ${total} sertifikat (mis. beton, APAP, 17025)…`}
            className="w-full rounded-full bg-transparent py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10"
          >
            Reset
          </button>
        )}
      </div>

      {groups.length === 0 && (
        <p className="mt-10 text-center text-sm text-zinc-500">
          Tidak ada sertifikat yang cocok dengan pencarian “{query}”.
        </p>
      )}

      {groups.map((group) => (
        <div key={group.name} className="mt-10">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} bg-opacity-20 text-lg ring-1 ring-white/10`}
            >
              {group.icon}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{group.name}</h3>
              <p className="text-xs text-zinc-500">{group.items.length} sertifikat</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {group.items.map((item) => (
              <div
                key={item.file}
                className="group glass relative flex flex-col overflow-hidden rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-white/20"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent} opacity-70`}
                />
                <span className="font-mono text-[11px] uppercase tracking-widest text-blue-300">
                  {item.year}
                </span>
                <h4 className="mt-2 line-clamp-3 text-sm font-semibold leading-snug text-zinc-100">
                  {item.title}
                </h4>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setActive(item)}
                    className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    📄 Lihat
                  </button>
                  <a
                    href={`${certificateFileBase}${item.file}`}
                    download
                    title="Unduh PDF"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-xs text-zinc-300 transition-colors hover:bg-white/10"
                  >
                    ⬇
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {active && <PdfModal item={active} onClose={() => setActive(null)} />}
    </div>
  );
}