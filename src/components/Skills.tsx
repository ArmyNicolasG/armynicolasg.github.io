export default function LanguageCarousel () {
  const skills = [
  {
    name: 'React',
    role: 'Front-End',
    color: 'cyan',
    imageUrl:
      '/media/react-logo.png'
  },
  {
    name: 'Node',
    role: 'Back-end',
    color: 'green',
    imageUrl:
      '/media/node-logo.png'
  },
]

  return (
    <div className="bg-black py-18 sm:py-22">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 justify-center text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl justify-center font-bold tracking-tight text-green-400 sm:text-4xl">Skills</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Remarkable knowledges about coding and team collaboration:
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-center">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-auto " src={skill.imageUrl} alt={ `${skill.name} logo` } />
                <div>
                  <h3 className={` font-semibold leading-7 text-${skill.color}-400 tracking-tight text-2xl text-center`}>{skill.name}</h3>
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
