'use client'

import { FaGithub } from 'react-icons/fa6'

export default function GithubStar() {
  return (
    <div className="fixed left-6 top-3 z-10 hidden items-center md:flex">
      <a
        href="https://github.com/Snku1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 items-center gap-2.5 rounded-xl border-4 border-black-primary bg-white px-3.5 text-black-primary shadow-image-card duration-150 hover:-translate-y-0.5 hover:shadow-button-card dark:bg-black dark:text-white"
        title="Visit My GitHub @Snku1"
      >
        <FaGithub className="text-2xl text-black-primary dark:text-white" />
        <div className="flex flex-col justify-center text-left">
          <p className="text-xs font-bold leading-tight">GitHub</p>
          <span className="text-xs font-extrabold text-orange-primary dark:text-yellow-primary">
            @Snku1
          </span>
        </div>
      </a>
    </div>
  )
}
