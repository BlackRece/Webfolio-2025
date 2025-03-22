import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon} from '@/components/SocialIcons'
import { MailIcon, BriefcaseIcon, ArrowDownIcon, ResumeIcon, FloppyDiskIcon} from "@/components/Icons";
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { ProjectGrid } from '@/components/projects'

function Article({ article }) {
  return (
      <Card as="article">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
  )
}

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
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <FloppyDiskIcon className="h-6 w-6 flex-none" />
          <MailIcon className="h-6 w-6 flex-none" />
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <ResumeIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">TWork - icon dont work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
              <div
                  key={image.src}
                  className={clsx(
                      'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                      rotations[imageIndex % rotations.length],
                  )}
              >
                <Image
                    src={image}
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
          ))}
        </div>
      </div>
  )
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
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                  <Article key={article.slug} article={article} />
              ))}
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
            </div>
          </div>
        </Container>
      </>
  )
}