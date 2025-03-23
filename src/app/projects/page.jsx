import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {Container} from "@/components/Container";
import {ProjectGrid} from "@/components/projects";
import {
  FaChessKnight,
  FaDna,
  FaMemory
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiUnity
} from 'react-icons/si';
import {
  FiCode,
  FiGlobe,
  FiMessageSquare
} from 'react-icons/fi';
import { GiTreeBranch } from 'react-icons/gi';

const projects = [
  {
    name: 'JunkSpace',
    description: 'Unity 3D reimagining of a mining mechanic from a 2D mining game.',
    link: { href: 'https://github.com/JunkSpace/JunkSpace', label: 'View repository' },
    logo: <SiUnity className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
  },
  {
    name: 'Meteor Mosh Pit',
    description: 'Coding Challenge - Asteroids in C++ with QuadTree Collision Detection.',
    link: { href: 'https://github.com/BlackRece/MeteorMoshPit', label: 'Source code' },
    logo: <SiCplusplus className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
  },
  {
    name: 'Refacta Masta',
    description: 'Taking a flocking simulation from a uni project and refactoring the monolith classes.',
    link: { href: 'https://github.com/BlackRece/RefactaMasta', label: 'Code samples' },
    logo: <FiCode className="h-8 w-8 text-green-500 dark:text-green-400" />,
  },
  {
    name: 'Chess AI',
    description: 'Chess AI framework. Target of MiniMax Algorithm.',
    link: { href: 'https://github.com/BlackRece/Chess-AI', label: 'AI implementation' },
    logo: <FaChessKnight className="h-8 w-8 text-amber-600 dark:text-amber-500" />,
  },
  {
    name: 'Genetic Defence',
    description: 'Tower Defense application of a Genetic Algorithm.',
    link: { href: 'https://github.com/BlackRece/TowerDefense_GA', label: 'Algorithm code' },
    logo: <FaDna className="h-8 w-8 text-pink-500 dark:text-pink-400" />,
  },
  {
    name: 'Memory Manager',
    description: 'C++ memory manager that allocates fixed-size memory blocks from pre-allocated pools.',
    link: { href: 'https://github.com/BlackRece/MemoryManager', label: 'Low-level code' },
    logo: <FaMemory className="h-8 w-8 text-red-500 dark:text-red-400" />,
  },
  {
    name: 'Binary Sequence Search Tree',
    description: 'Minimalistic implementation of a recursive binary sequence search tree.',
    link: { href: 'https://github.com/BlackRece/FMA-BSST', label: 'Data structure code' },
    logo: <GiTreeBranch className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />,
  },
  {
    name: 'WebSockets Experiment',
    description: "Testing the functionality of .Net 5 websockets.",
    link: { href: 'https://github.com/BlackRece/WebSocketsSample', label: 'Network code' },
    logo: <FiGlobe className="h-8 w-8 text-sky-500 dark:text-sky-400" />,
  },
  {
    name: 'Chat Client and Server',
    description: '.Net chat and server project',
    link: { href: 'https://github.com/BlackRece/CNA-ChatClientServer', label: 'Client/server code' },
    logo: <FiMessageSquare className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
  }
]

function LinkIcon(props) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
        />
      </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
      <SimpleLayout
          title="Things I’ve made trying to put my dent in the universe."
          intro="I’ve worked on countless projects over the years, but the ones below are the ones I’m most proud of. While these aren’t open-source, feel free to visit their GitHub repositories to explore the code. If a project catches your eye, you’re welcome to fork it and experiment with your own improvements or customizations—I’d love to see what you create!"
      >
        {/* First Grid with Recent Projects */}
        <Container className="mt-9">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Recent Projects
          </h2>
          <ProjectGrid className="mt-6" />
        </Container>

        {/* Second Grid with Other Projects */}
        <Container className="mt-16">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Other Notable Projects
          </h2>
          <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-6"
          >
            {projects.map((project) => (
                <Card as="li" key={project.name}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    {project.logo}
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href}>{project.name}</Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </Card>
            ))}
          </ul>
        </Container>
      </SimpleLayout>
  )
}