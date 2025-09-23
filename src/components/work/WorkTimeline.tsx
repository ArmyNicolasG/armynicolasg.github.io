import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { ACCENTS } from '../types/Accents.types'
import { motion } from 'framer-motion'

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

/** Respeta reduce motion: si el usuario lo pide, mostramos sin animación. */
function useReducedMotion() {
    const [reduced, setReduced] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const update = () => setReduced(mq.matches)
        update()
        mq.addEventListener?.('change', update)
        return () => mq.removeEventListener?.('change', update)
    }, [])
    return reduced
}

export default function WorkTimeline({ items }: { items: Experience[] }) {
    const data = useMemo(() => {
        const toKey = (it: Experience) => (it.end ?? '9999-12') + ' ' + it.start
        return [...items].sort((a, b) => (toKey(a) < toKey(b) ? 1 : -1))
    }, [items])

    const reduced = useReducedMotion()

    return (
        <section id="experience" className="bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center font-bold tracking-tight text-green-400 sm:text-4xl">
                    Work Experience
                </h2>

                {/* Timeline */}
                <ol
                    className="relative mt-10 pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10">

                    {/* hairline decor */}
                    
                    {data.map((job, idx) => (
                        <TimelineItem
                            key={`${job.company}-${job.title}-${idx}`}
                            job={job}
                            idx={idx}
                            reduced={reduced}
                        />
                    ))}
                </ol>
            </div>
        </section>
    )
}


// ...

function TimelineItem({
    job,
    idx,
    reduced,
}: {
    job: Experience
    idx: number
    reduced: boolean
}) {
    const ref = useRef<HTMLLIElement | null>(null)

    // stagger suave por índice, tope 400ms

    return (
        <Fragment>
            {/* Dot */}
            <li ref={ref} className="relative mb-12">
                {/* Dot centrado sobre la línea (left:0 + translate-x-1/2) */}
                <span
                    className="absolute left-0 top-3 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-yellow-400 ring-2 ring-black"
                    aria-hidden
                />
                {/* Card */}
                {reduced ? (
                    <article className="ml-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-5 shadow hover:-translate-y-0.5 hover:shadow-lg">
                        <JobCard job={job} />
                    </article>
                ) : (
                    <motion.article
                        initial={{ opacity: 0, y: 28, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.25, margin: '0px 0px -10% 0px' }}
                        transition={{ type: 'spring', stiffness: 110, damping: 18, delay: Math.min(idx * 90, 400) / 1000 }}
                        className="
        ml-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
        ring-1 ring-white/10 p-5 shadow will-change-[transform,opacity]
        hover:-translate-y-0.5 hover:shadow-lg
      "
                    >
                        <JobCard job={job} />
                    </motion.article>
                )}
            </li>

        </Fragment>
    )
}

function JobCard({ job }: { job: Experience }) {
    return (
        <>
            <header className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="text-yellow-300 font-extrabold text-lg leading-tight">
                        {job.title}
                    </h3>
                    <p className="text-white font-semibold">{job.company}</p>
                    <p className="text-white/60 text-sm">
                        {formatDate(job.start)} – {formatDate(job.end)}
                        {job.location ? ` • ${job.location}` : ''}
                    </p>
                </div>

                {job.link && (
                    <a
                        href={job.link.href}
                        className="whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-semibold text-black bg-white hover:bg-white/90"
                        target="_blank"
                        rel="noreferrer"
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
                    {job.duties.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
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
        </>
    )
}
