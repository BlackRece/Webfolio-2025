import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon} from '@/components/SocialIcons'
import { MailIcon, BriefcaseIcon, ArrowDownIcon, ResumeIcon, FloppyDiskIcon} from "@/components/Icons";
import { getAllArticles } from '@/lib/articles'
import { ProjectGrid } from '@/components/projects'
import { FaBriefcase, FaChalkboardTeacher, FaServer, FaGamepad, FaCode, FaLaptopCode, FaDownload } from 'react-icons/fa';

function SocialLink({ icon: Icon, ...props }) {
  return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
  )
}

function Role({ role }) {
  let startLabel =
      typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
      typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </dl>
      </li>
  )
}

function Resume() {
    let resume = [
        {
            company: 'Staffordshire University',
            title: 'Part-Time Lecturer',
            icon: FaChalkboardTeacher,
            start: '2024',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Codeweavers Ltd',
            title: '.NET Backend Developer',
            icon: FaServer,
            start: '2021',
            end: '2022',
        },
        {
            company: 'Your Strategy Game Network',
            title: 'Game Developer',
            icon: FaGamepad,
            start: '2022',
            end: '2022',
        },
        {
            company: '21st Century Media Ltd',
            title: 'Web Developer',
            icon: FaCode,
            start: '2013',
            end: '2013',
        },
        {
            company: 'Elf Software Ltd',
            title: 'Junior Software Engineer',
            icon: FaLaptopCode,
            start: '2007',
            end: '2007',
        },
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <FaBriefcase className="h-6 w-6 flex-none" />
                <span className="ml-3">Work Experience</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <role.icon className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime={role.start}>{role.start}</time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={typeof role.end === 'object' ? role.end.dateTime : role.end}>
                                    {typeof role.end === 'object' ? role.end.label : role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <a
                href="/CV - MLT - Games Developer 6.pdf"
                download
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 shadow-lg shadow-zinc-800/5 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
                Download CV
                <FaDownload className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-100" />
            </a>
        </div>
    );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
      <>
        <Container className="mt-9">
          <div className="flex justify-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                C++/C# programmer, software engineer, game developer, and strategy gamer.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I&apos;m a passionate Game Developer with experience creating engaging gaming experiences.
                I specialize in game mechanics and have worked on a variety of projects spanning
                industries such as automotive - manufacturing, theatrical entertainment and mobile games.
              </p>
              <div className="mt-6 flex gap-6">
                <SocialLink
                    href="https://x.com/BlackRece"
                    aria-label="Follow on X"
                    icon={XIcon}
                />
                <SocialLink
                    href="https://github.com/BlackRece"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                />
                <SocialLink
                    href="https://www.linkedin.com/in/blackrece/"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                />
              </div>
            </div>
          </div>
        </Container>
        <Container className="mt-9">
          <ProjectGrid />
        </Container>
        <Container className="mt-24 md:mt-28">
            <Resume />
        </Container>
      </>
  )
}