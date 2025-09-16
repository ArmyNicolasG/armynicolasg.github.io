import { useState, useMemo } from 'react'
import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'
import { ACCENTS } from '../types/Accents.types'

type AccentKey = keyof typeof ACCENTS

type Tech = { name: string; accent?: AccentKey; iconUrl?: string }

type ProjectCardProps = {
    title: string
    description: string
    images: string[]
    tech?: Tech[]
    links?: { demo?: string; repo?: string; docs?: string }
    meta?: string
}

export default function ProjectCard({
    title,
    description,
    images,
    tech = [],
    links,
    meta,
}: ProjectCardProps) {

  const [idx, setIdx] = useState(0)
  const hasMany = images.length > 1

  const go = (n: number) => {
    if (!hasMany) return
    setIdx((prev) => (prev + n + images.length) % images.length)
  }

  const safeImages = useMemo(() => images.filter(Boolean), [images])

  return (
    <article
      className="
        relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/5 backdrop-blur-xl
        ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Hairline superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Media / Carrusel */}
      <div className="relative">
        <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
          <img
            src={safeImages[idx] ?? '/media/placeholder.png'}
            alt={`${title} screenshot ${idx + 1}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {hasMany && (
          <>
            <button
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                grid place-items-center h-9 w-9 rounded-full
                bg-black/40 hover:bg-black/60 text-white
                border border-white/20 backdrop-blur
              "
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              onClick={() => go(1)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                grid place-items-center h-9 w-9 rounded-full
                bg-black/40 hover:bg-black/60 text-white
                border border-white/20 backdrop-blur
              "
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`
                    h-2.5 w-2.5 rounded-full border border-white/40
                    ${i === idx ? 'bg-white/90' : 'bg-white/20'}
                  `}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        <header className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-lg leading-tight truncate">
              {title}
            </h3>
            {meta && <p className="text-white/60 text-sm mt-0.5">{meta}</p>}
          </div>

          {/* Acciones */}
          {(links?.demo || links?.repo || links?.docs) && (
            <div className="flex shrink-0 items-center gap-2">
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank" rel="noreferrer"
                  className="
                    inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5
                    text-xs font-semibold text-black bg-white
                    hover:bg-white/90 transition-colors
                  "
                  title="Live demo"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  Live
                </a>
              )}
              {links.repo && (
                <a
                  href={links.repo}
                  target="_blank" rel="noreferrer"
                  className="
                    inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5
                    text-xs font-semibold text-white bg-white/10 hover:bg-white
                    hover:text-black border border-white/15 backdrop-blur
                    transition-colors
                  "
                  title="GitHub repository"
                >
                  <FaGithub className="h-4 w-4" />
                  Repo
                </a>
              )}
              {links.docs && (
                <a
                  href={links.docs}
                  target="_blank" rel="noreferrer"
                  className="
                    inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5
                    text-xs font-semibold text-white bg-white/10 hover:bg-white
                    hover:text-black border border-white/15 backdrop-blur
                    transition-colors
                  "
                  title="Documentation"
                >
                  <LinkIcon className="h-4 w-4" />
                  Docs
                </a>
              )}
            </div>
          )}
        </header>

        <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
          {description}
        </p>

        {tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => {
              const a = ACCENTS[t.accent ?? 'teal']
              return (
                <li key={t.name}>
                  <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${a.grad} text-white/90 border border-white/10`}>
                    {t.iconUrl && (
                      <img
                        src={t.iconUrl}
                        alt={`${t.name} icon`}
                        className="h-3.5 w-3.5 object-contain"
                        loading="lazy"
                      />
                    )}
                    <span className={`leading-none ${a.text}`}>{t.name}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </article>
  )
}
