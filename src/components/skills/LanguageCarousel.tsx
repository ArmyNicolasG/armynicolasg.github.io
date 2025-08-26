import LanguageElement from './LanguageElement'
import { ACCENTS } from '../types/Accents.types'

export default function LanguageCarousel () {
  const skills = [
      { name: '.NET Core',    role: 'Backend',         accent: 'purple', imageUrl: '/media/dotnet-logo.png' },
      { name: 'Node.js',          role: 'Backend',          accent: 'lime',   imageUrl: '/media/node-logo.png' },
      { name: 'SQL',    role: 'Backend',         accent: 'cyan', imageUrl: '/media/mysql-logo.png' },
      { name: 'TypeScript',       role: 'Frontend & Backend',       accent: 'teal',   imageUrl: '/media/ts-logo.png' },
      { name: 'React.js',         role: 'Frontend',         accent: 'cyan',   imageUrl: '/media/react-logo.png' },
    { name: 'GNU/Linux',        role: 'Operating System', accent: 'orange', imageUrl: '/media/linux-logo.png' },
    { name: 'CI/CD Pipelines',   role: 'DevOps',           accent: 'indigo', imageUrl: '/media/github-actions-logo.png' },
    { name: 'Agile (SCRUM)',    role: 'Soft skills',         accent: 'purple', imageUrl: '/media/scrum-agile-logo.png' },
  ]

  return (
    <section id="skills" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-400 sm:text-4xl">Skills</h2>
          <p className="mt-4 text-base sm:text-lg leading-7 text-white/80">
            Strong teamwork, clean code, and reliable delivery.
          </p>
        </div>

        <ul
          role="list"
          className="
            mt-12 grid grid-cols-1 gap-5
            sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {skills.map(s => (
            <li key={s.name} className="list-none">
              <LanguageElement
                name={s.name}
                role={s.role}
                imageUrl={s.imageUrl}
                accent={s.accent as keyof typeof ACCENTS}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
