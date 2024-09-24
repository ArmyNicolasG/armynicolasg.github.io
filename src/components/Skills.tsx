export default function LanguageCarousel () {
  const skills = [
  {
    name: 'React.js',
    role: 'Frontend',
    color: 'cyan',
    imageUrl:
      '/media/react-logo.png'
  },
  {
    name: 'Node.js',
    role: 'Backend',
    color: 'lime',
    imageUrl:
      '/media/node-logo.png'
  },
  {
    name: 'TypeScript',
    role: 'Full Stack',
    color: 'teal',
    imageUrl:
      '/media/ts-logo.png'
  },
  {
    name: 'GNU/Linux',
    role: 'Operative System',
    color: 'orange',
    imageUrl:
      '/media/linux-logo.png'
  },
  {
    name: 'Spring Boot',
    role: 'Backend',
    color: 'orange',
    imageUrl:
      '/media/spring-boot-logo.png'
  },
  {
    name: 'Java',
    role: 'Backend',
    color: 'orange',
    imageUrl:
      '/media/java-logo.png'
  },
  {
    name: 'GitHub Actions',
    role: 'DevOps',
    color: 'orange',
    imageUrl:
      '/media/github-actions-logo.png'
  },
  {
    name: 'Agile (SCRUM)',
    role: 'DevOps',
    color: 'orange',
    imageUrl:
      '/media/scrum-agile-logo.png'
  },
]

  return (
    <div className="bg-black py-18 sm:py-22">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl justify-center items-center font-bold tracking-tight text-green-400 sm:text-4xl">Skills</h2>
          <p className="mt-6 text-lg leading-8 text-white text-center">
            Remarkable knowledges about coding and team collaboration:
          </p>
        </div>
        <ul role="list" className="grid gap-x-24 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-center">
          {skills.map((skill) => (
            <li key={skill.name} className="items-center">
              <div className="flex flex-row items-center  justify-between gap-x-6">
                <img className=" p-2 object-cover h-16 w-16 rounded-md" src={skill.imageUrl} alt={ `${skill.name} logo` } />
                <div className="flex flex-col justify-center items-center text-center">
                  <h3 className={`font-semibold leading-7 text-${skill.color}-400 tracking-tight text-2xl text-center`}>{skill.name}</h3>
                  <p className="text-sm font-semibold leading-6">{skill.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}
