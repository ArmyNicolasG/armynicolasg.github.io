import WorkTimeline, { type Experience } from './work/WorkTimeline'

export default function ExperienceSection() {
    const xp: Experience[] = [
        {
            title: 'Node.js backend and React developer | .NET Jr. Developer',
            company: 'Calima Technologies',
            start: '2025-02',
            end: '2025-08',
            summary:
                'Built a new platform for WhatsApp chatbot creation and deployment; stack: Node.js, .NET, MySQL, Docker, React. Creation of new functions inside .NET existing internal backend platform.',
            tech: [
                { name: 'Node.js', accent: 'lime', iconUrl: '/media/node-logo.png' },
                { name: '.NET Core', accent: 'cyan', iconUrl: '/media/dotnet-logo.png' },
                { name: 'Docker', accent: 'teal', iconUrl: '/media/docker-logo.png' },
                { name: 'React', accent: 'cyan', iconUrl: '/media/react-logo.png' },
                { name: 'TypeScript', accent: 'cyan', iconUrl: '/media/ts-logo.png' },
                { name: 'MySQL', accent: 'orange', iconUrl: '/media/mysql-logo.png' },
                { name: 'Azure DevOps', accent: 'cyan', iconUrl: '/media/azure-devops-logo.png' }
            ],
            duties: [
                'Tasks planning and software architecture.',
                'Database and backend implementation.',
                'API development and integration.',
                'Deployment automation with Docker and Azure DevOps.',
            ],
            link: { label: 'Go to LAIA Platform', href: 'https://laia-digital.com' },
        },
        {
            title: "Node backend developer & AWS DevOps Manager",
            company: "Santería's Vape",
            start: '2024-06',
            end: '2024-12',
            summary:
                'Development of Santería\'s Vape backend, database and AWS infraestructure and WhatsApp automated chatbot that can access database, show catalog and create orders from this messaging app.',
            tech: [
                { name: 'Node.js', accent: 'lime', iconUrl: '/media/node-logo.png' },
                { name: 'React', accent: 'cyan', iconUrl: '/media/react-logo.png' },
                { name: 'TypeScript', accent: 'teal', iconUrl: '/media/ts-logo.png' },
                { name: 'MySQL', accent: 'orange', iconUrl: '/media/mysql-logo.png' },
                { name: 'AWS', accent: 'orange', iconUrl: '/media/aws-logo.png' }
            ],
            duties: [
                'Tasks planning and software architecture.',
                'Database and backend implementation.',
                'Repository reviewings and CI/CD automation through AWS server.',
            ],
            link: { label: 'Visit store', href: 'https://santeriasvape.com' },
        },
        {
            title: "Node.js backend developer",
            company: "SENA - Apprenticeship project",
            start: '2024-02',
            end: '2025-02',
            summary:
                'Development of Gestor de Eventos platform backend, database and dev server infrastructure.',
            tech: [
                { name: 'Node.js', accent: 'lime', iconUrl: '/media/node-logo.png' },
                { name: 'TypeScript', accent: 'teal', iconUrl: '/media/ts-logo.png' },
                { name: 'MySQL', accent: 'orange', iconUrl: '/media/mysql-logo.png' },
                { name: 'Linux', accent: 'orange', iconUrl: '/media/linux-logo.png' }
            ],
            duties: [
                'Tasks planning and software architecture.',
                'Database and backend implementation.',
                'Repository reviewings and CI/CD automation through self-hosted server.',
            ],
        }
    ]

    return <WorkTimeline items={xp} />
}
