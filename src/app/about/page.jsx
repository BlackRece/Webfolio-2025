import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
      <li className={clsx(className, 'flex')}>
        <Link
            href={href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
  )
}

function MailIcon(props) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            fillRule="evenodd"
            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'Rece - Game Developer | 2:1 Games Programming Graduate from Staffordshire University | Spectrum 48K Veteran',
}

export default function About() {
  return (
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                  src={portraitImage}
                  alt="Rece - Game Developer"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hi, I'm Rece - Game Developer with Roots in 8-Bit Programming
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My programming journey began where many 80s kids started - with a ZX Spectrum 48K
                and the endless possibilities of BASIC. Those early days of POKE and PEEK commands
                to manipulate memory directly taught me the fundamentals of computational thinking
                and sparked a lifelong passion for creative coding.
              </p>
              <p>
                After cutting my teeth on 8-bit systems, I formalized my skills with a 2:1 in Games
                Programming from Staffordshire University. My academic work focused on modern C++
                game development, Unity workflows, and low-level engine programming - but I'll
                always keep a soft spot for the minimalist elegance of those early home computers.
              </p>
              <p>
                During my degree, I bridged old and new by recreating classic Spectrum titles with
                modern physics systems. One particularly rewarding project involved reimagining
                "Jumping Jack Flash" with a comical character that tumbles over with a physics-based
                ragdoll system, complete with a circle of dazed tweety birds orbiting the fallen
                avatar - maintaining that classic feel while adding modern cartoonish charm.
              </p>
              <p>
                My technical strengths lie in gameplay programming and systems architecture.
                I've developed everything from retro-style pixel-perfect collision systems to
                modern AR interaction frameworks. What excites me most is solving the unique
                challenges that emerge when creative vision meets technical constraints.
              </p>
              <p>
                When not coding, I'm usually analyzing game design patterns across eras,
                from 8-bit classics to modern AAA titles. I maintain an active GitHub
                where I experiment with demakes - recreating contemporary game mechanics
                from Spectrum-style aesthetics.
              </p>
              <p>
                I'm currently seeking roles where I can apply both my modern technical
                skills and my appreciation for optimized, efficient code honed through
                early experiences with hardware limitations.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://x.com/BlackRece" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href="https://github.com/BlackRece"
                  icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/blackrece/" icon={LinkedInIcon} className="mt-4">
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                  href="mailto:blackrece@gmail.com"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                blackrece@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
  )
}
