export default function LanguageCarousel () {
  const skills = [
  {
    name: 'React',
    role: 'Front-End',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

  return (
    <div className="bg-black py-18 sm:py-22">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 justify-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl justify-center font-bold tracking-tight text-green-400 sm:text-4xl">Skills</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Remarkable knowledges about coding and team collaboration:
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={skill.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{skill.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{skill.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}
