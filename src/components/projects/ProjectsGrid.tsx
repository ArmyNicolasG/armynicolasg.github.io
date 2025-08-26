import ProjectCard from './ProjectCard'
import { ACCENTS } from '../types/Accents.types'

type AccentKey = keyof typeof ACCENTS;

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Santería's Vape",
      meta: 'Full-Stack • Node.js + React • AWS',
      description:
        'Vaping E-commerce with orders and product inventory panel.',
      images: [
        '/media/projects/santerias-vape-landing-1.png'
      ],
      tech: [
        { name: 'Node.js', accent: 'lime' as AccentKey, iconUrl: '/media/node-logo.png' },
        { name: 'React', accent: 'cyan' as AccentKey, iconUrl: '/media/react-logo.png' },
        { name: 'TypeScript', accent: 'teal' as AccentKey, iconUrl: '/media/ts-logo.png' },
        { name: 'AWS', accent: 'orange' as AccentKey, iconUrl: '/media/aws-logo.png' },
        { name: 'CI/CD Pipelines', accent: 'indigo' as AccentKey, iconUrl: '/media/aws-logo.png' },
        { name: 'MySQL', accent: 'cyan' as AccentKey, iconUrl: '/media/mysql-logo.png' },
      ],
      links: {
        demo: 'https://santeriasvape.com',
      },
    }
  ]

  return (
    <section id="projects" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-400 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 text-white/80">
            Selected work that balances reliability, speed, and DX.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} images={p.images} tech={p.tech} links={p.links} meta={p.meta} />
          ))}
        </div>
      </div>
    </section>
  )
}
