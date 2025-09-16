import { Fragment, useMemo } from 'react'
import { ACCENTS } from '../types/Accents.types'

export type AccentKey = keyof typeof ACCENTS

export type Experience = {
  title: string
  company: string
  location?: string
  start: string   // ISO: '2024-07'
  end?: string    // ISO or undefined = "Present"
  summary?: string
  tech?: { name: string; accent?: AccentKey; iconUrl?: string }[]
  duties?: string[]
  link?: { label: string; href: string }
}

function formatDate(iso: string | undefined) {
    if (!iso) return 'Present'
    const [y, m] = iso.split('-').map(Number)
    const d = new Date(y, (m ?? 1) - 1, 1)
    return d.toLocaleString(undefined, { month: 'long', year: 'numeric' })
}

export default function WorkTimeline({ items }: { items: Experience[] }) {
  const data = useMemo(() => {
    const toKey = (it: Experience) => (it.end ?? '9999-12') + ' ' + it.start
    return [...items].sort((a, b) => (toKey(a) < toKey(b) ? 1 : -1))
  }, [items])

  return (
    <section id="experience" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl  text-center font-bold tracking-tight text-green-400 sm:text-4xl">
            Work Experience
          </h2>

        {/* Timeline */}
        <ol className="relative ml-6 mt-10 border-l border-white/10">
          {/* hairline decor */}
          <div className="pointer-events-none absolute -left-px top-0 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {data.map((job, idx) => (
            <Fragment key={`${job.company}-${job.title}-${idx}`}>
              {/* Dot */}
              <span
                className="
                  absolute -left-[9px] mt-8 h-3.5 w-3.5 rounded-full
                  bg-yellow-400 ring-2 ring-black
                "
                style={{ top: `calc(${idx} * 7.5rem)` }}
                aria-hidden
              />
              {/* Card */}
              <li className="mb-12 ml-6">
                <article
                  className="
                    rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                    ring-1 ring-white/10 p-5 shadow transition
                    hover:-translate-y-0.5 hover:shadow-lg
                  "
                >
                  <header className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-yellow-300 font-extrabold text-lg leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-white font-semibold">
                        {job.company}
                      </p>
                      <p className="text-white/60 text-sm">
                        {formatDate(job.start)} – {formatDate(job.end)}
                        {job.location ? ` • ${job.location}` : ''}
                      </p>
                    </div>

                    {job.link && (
                      <a
                        href={job.link.href}
                        className="whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-semibold text-black bg-white hover:bg-white/90"
                        target="_blank" rel="noreferrer"
                      >
                        {job.link.label} <span aria-hidden>›</span>
                      </a>
                    )}
                  </header>

                  {job.summary && (
                    <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                      {job.summary}
                    </p>
                  )}

                  {job.duties?.length ? (
                    <ul className="mt-3 grid gap-1.5 text-white/80 text-sm list-disc pl-5">
                      {job.duties.map((d, i) => (<li key={i}>{d}</li>))}
                    </ul>
                  ) : null}

                  {job.tech?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {job.tech.map((t, i) => {
                        const a = ACCENTS[t.accent ?? 'teal']
                        return (
                            <li key={`${t.name}-${i}`}>
                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${a.badgeBg} text-white/90 border border-white/10`}
                            >
                                {t.iconUrl && (
                                <img
                                    src={t.iconUrl}
                                    alt={`${t.name} icon`}
                                    className="h-3.5 w-3.5 object-contain"
                                    loading="lazy"
                                />
                                )}
                                <span className={a.text}>{t.name}</span>
                            </span>
                            </li>
                        )
                        })}
                    </ul>
                    ) : null}
                </article>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  )
}
