import { TypeWriter } from "@/components/TypeWriter";
import { Reveal } from "@/components/Reveal";
import { CursorGlow } from "@/components/CursorGlow";
import { ProfileCard } from "@/components/ProfileCard";
import { NavBar } from "@/components/NavBar";
import { CertificateCard } from "@/components/CertificateCard";
import { CertificateGallery } from "@/components/CertificateGallery";
import { certificateGroups } from "@/data/certificates";
import {
  credentials,
  educations,
  profile,
  projects,
  roles,
  skillGroups,
} from "@/data/portfolio";

const marqueeItems = [
  "Python",
  "PHP",
  "JavaScript",
  "HTML/CSS",
  "MySQL",
  "Draw.io & Visio",
  "Microsoft Excel",
  "Analisis Sistem",
  "ISO/IEC 17025:2017",
  "ISO/IEC 17065:2012",
  "SNI 180-1:2022 (APAP)",
  "SNI 03-0691:1996",
  "PPC & Witness",
  "Dokumentasi Mutu",
];

function SectionHeading({
  id,
  tag,
  title,
  subtitle,
}: {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-blue-300">
        {tag}
      </span>
      <h2
        id={id}
        className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-base text-zinc-400 sm:text-lg">{subtitle}</p>
    </Reveal>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070d] text-white antialiased">
      <CursorGlow />
      <NavBar initials={profile.initials} />

      <main className="relative">
        <section id="beranda" className="relative overflow-hidden">
          <div className="grid-overlay absolute inset-0" />
          <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-blob rounded-full bg-blue-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] animate-blob-slow rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-20 pt-28 sm:px-6 sm:pt-36 md:flex-row md:items-center md:gap-14 md:pt-44">
            <div className="flex-1 text-center md:text-left">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Tersedia untuk kolaborasi & proyek
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
                  Halo, saya{" "}
                  <span className="text-gradient">{profile.name}</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-xl font-medium text-zinc-300 sm:text-2xl">
                  <TypeWriter texts={profile.roles} />
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:mx-0">
                  {profile.tagline}
                </p>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href="#kontak"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
                  >
                    Mulai Kolaborasi →
                  </a>
                  <a
                    href="#proyek"
                    className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    Lihat Proyek
                  </a>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="text-center md:text-left">
                      <p className="text-3xl font-extrabold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={300} className="shrink-0">
              <ProfileCard name={profile.name} initials={profile.initials} />
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
          <div className="flex w-max animate-marquee items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 text-sm font-medium text-zinc-500"
              >
                <span className="whitespace-nowrap">{item}</span>
                <span className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400" />
              </span>
            ))}
          </div>
        </section>

        <section id="tentang" className="relative py-24">
          <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 animate-blob-slow rounded-full bg-violet-600/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <SectionHeading
              id="tentang"
              tag="Tentang Saya"
              title="Dua disiplin, satu standar: kualitas"
              subtitle="Teknologi untuk efisiensi, penilaian kesesuaian untuk kepercayaan."
            />
            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-5">
              <Reveal className="lg:col-span-3">
                <div className="glass h-full rounded-3xl p-8">
                  <div className="flex flex-wrap gap-2">
                    {profile.shortRoles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-gradient-to-r from-blue-500/15 to-violet-500/15 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-400/20"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-300">
                    {profile.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={profile.cvUrl}
                      download
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
                    >
                      Unduh CV →
                    </a>
                    {profile.linkedin && (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
                      >
                        LinkedIn →
                      </a>
                    )}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                      Pendidikan
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {educations.map((edu) => (
                        <li key={edu.school} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-sm ring-1 ring-white/10">
                            🎓
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">
                              {edu.school}
                            </p>
                            <p className="truncate text-xs text-zinc-500">
                              {edu.major === "-" ? edu.year : `${edu.major} · ${edu.year}`}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150} className="lg:col-span-2">
                <div className="glass h-full rounded-3xl p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Highlights
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {profile.funFacts.map((fact, i) => (
                      <li key={fact} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-xs font-bold text-blue-300 ring-1 ring-white/10">
                          {i + 1}
                        </span>
                        <span className="text-sm text-zinc-300">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="relative py-24">
          <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 animate-blob rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <SectionHeading
              id="pengalaman"
              tag="Peran & Pengalaman"
              title="Perjalanan karier dan studi"
              subtitle="Dari menulis kode hingga mengawal mutu sertifikasi."
            />
            <div className="relative mx-auto mt-16 max-w-3xl">
              <div className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent md:left-1/2" />
              {roles.map((role, i) => (
                <Reveal
                  key={role.title}
                  delay={i * 80}
                  className={`relative mb-10 pl-16 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-10 md:text-right"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div
                    className={`absolute left-6 top-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#0d0d17] text-lg ring-1 ring-white/15 ${
                      i % 2 === 0
                        ? "md:right-0 md:left-auto md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  >
                    {role.icon}
                  </div>
                  <div className="glass rounded-2xl p-6 transition-colors hover:border-white/20">
                    <span
                      className={`inline-block rounded-full bg-gradient-to-r ${role.accent} bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent`}
                    >
                      {role.period}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      {role.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{role.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {role.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm text-zinc-300"
                        >
                          <span className="text-gradient shrink-0">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="keahlian" className="relative py-24">
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-fuchsia-600/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <SectionHeading
              id="keahlian"
              tag="Kompetensi"
              title="Keahlian yang terukur"
              subtitle="Kemampuan teknis pemrograman dan penilaian kesesuaian dalam satu paket."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group, i) => (
                <Reveal key={group.name} delay={i * 120}>
                  <div className="glass rounded-3xl p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-xl ring-1 ring-white/10">
                        {group.icon}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {group.name}
                      </h3>
                    </div>
                    <div className="mt-7 space-y-5">
                      {group.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">{skill.name}</span>
                            <span className="font-mono text-xs text-zinc-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="sertifikasi" className="relative py-24">
          <div className="relative mx-auto max-w-6xl px-6">
            <SectionHeading
              id="sertifikasi"
              tag="Kredensial"
              title="Sertifikasi & Pelatihan"
              subtitle={`Bukti kompetensi yang diakui di bidang IT dan penilaian kesesuaian — ${certificateGroups.reduce(
                (acc, g) => acc + g.items.length,
                0
              )} sertifikat terverifikasi.`}
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {credentials.map((cred, i) => (
                <Reveal key={cred.title} delay={i * 90}>
                  <CertificateCard
                    title={cred.title}
                    issuer={cred.issuer}
                    year={cred.year}
                    tag={cred.tag}
                    image={cred.image}
                  />
                </Reveal>
              ))}
            </div>
            <CertificateGallery />
          </div>
        </section>

        <section id="proyek" className="relative py-24">
          <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 animate-blob-slow rounded-full bg-violet-600/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <SectionHeading
              id="proyek"
              tag="Portofolio Kerja"
              title="Proyek & capaian nyata"
              subtitle="Perpaduan hasil rekayasa perangkat lunak dan penilaian kesesuaian."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal
                  key={project.title}
                  delay={i * 100}
                  className={project.wide ? "md:col-span-2" : ""}
                >
                  <div className="group glass relative h-full overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20">
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                        project.wide
                          ? "bg-gradient-to-br from-blue-500/[0.07] via-transparent to-fuchsia-500/[0.07]"
                          : ""
                      }`}
                    />
                    <div className="relative flex items-start gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-2xl ring-1 ring-white/10 transition-transform group-hover:scale-110">
                        {project.icon}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                          {project.category}
                        </span>
                        <h3 className="mt-1.5 text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400 ring-1 ring-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="relative pb-28 pt-24">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-blue-600/10 to-transparent" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-blob rounded-full bg-blue-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 animate-blob-slow rounded-full bg-fuchsia-600/15 blur-3xl" />
              <div className="relative text-center">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-blue-300">
                  Kontak
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Mari bekerja sama &{" "}
                  <span className="text-gradient">wujudkan standar</span> yang
                  terpercaya
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                  Undangan sebagai auditor, pengembangan sistem, atau konsultasi
                  kesiapan akreditasi — semua dibuka.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
                  >
                    {profile.email}
                  </a>
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    {profile.whatsapp}
                  </a>
                  <a
                    href={profile.cvUrl}
                    download
                    className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    📄 Unduh CV
                  </a>
                </div>
                <p className="mt-6 text-sm text-zinc-500">{profile.location}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="flex items-center gap-2">
            Dibangun dengan
            <span className="font-mono text-xs text-blue-400">
              Next.js + Tailwind CSS
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}