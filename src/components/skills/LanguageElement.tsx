import { ACCENTS } from "../types/Accents.types"

interface Props {
  name: string
  role: string
  imageUrl: string
  accent?: keyof typeof ACCENTS
}

export default function LanguageElement({ name, role, imageUrl, accent = 'cyan' }: Props) {
  const a = ACCENTS[accent] ?? ACCENTS.cyan

  return (
    <div
      className="
        group relative flex items-center gap-4 rounded-2xl
        border border-white/10 bg-white/5 backdrop-blur-md
        px-4 py-3 shadow transition-all
        hover:-translate-y-0.5 hover:shadow-lg
      "
    >
      <div className={`relative grid h-14 w-14 place-items-center rounded-xl ring-1 ${a.ring} bg-gradient-to-br ${a.grad} to-transparent`}>
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className="h-8 w-8 object-contain"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 text-left">
        <h3 className={`truncate text-[17px] sm:text-lg font-semibold leading-tight ${a.text}`}>
          {name}
        </h3>
        <p className="text-white/70 text-sm leading-snug">{role}</p>
      </div>
    </div>
  )
}
