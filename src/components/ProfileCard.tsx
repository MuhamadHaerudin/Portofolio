import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const ROLES = ["Programmer", "Quality", "Compliance"];

export function ProfileCard({
  name,
  initials,
}: {
  name: string;
  initials: string;
}) {
  const hasPhoto = existsSync(join(process.cwd(), "public", "profile.jpg"));

  return (
    <div className="group relative w-full max-w-[300px]">
      <div className="relative overflow-hidden rounded-[2.4rem] p-[2px]">
        <div
          className="absolute inset-[-200%] aspect-square animate-spin bg-[conic-gradient(from_0deg,#3b82f6,#22d3ee,#a855f7,#ec4899,#3b82f6)]"
          style={{ animationDuration: "9s" }}
        />
        <div className="relative rounded-[calc(2.4rem-2px)] bg-[#0a0a14] p-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.7rem] bg-[#0d0d18]">
            <div className="grid-overlay absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />

            {hasPhoto ? (
              <Image
                src="/profile.jpg"
                alt={name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gradient text-8xl font-extrabold drop-shadow-[0_8px_30px_rgba(59,130,246,0.4)]">
                  {initials}
                </span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-6 h-px animate-[scan_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-16">
              <p className="text-xl font-extrabold tracking-tight text-white">
                {name}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {ROLES.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-200 backdrop-blur"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ID · SNI / ISO 17025 / 17065
            </div>
            <div className="font-mono text-[10px] text-zinc-600">#PORT-2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}