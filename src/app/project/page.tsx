'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import { GithubStats } from '@/components/common/GithubStats'
import { IProject } from '@/utils/interface/Project'
import { projects } from '@/utils/constant/Projects'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { RiExternalLinkLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'

const githubStatCards = [
  {
    src: 'https://github-stats-extended.vercel.app/api?username=Snku1&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1',
    alt: 'GitHub stats',
  },
  {
    src: 'https://github-stats-extended.vercel.app/api/top-langs?username=Snku1&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2',
    alt: 'Top languages',
  },
  {
    src: 'https://streak-stats.demolab.com?user=Snku1&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3',
    alt: 'GitHub streak stats',
  },
]

export default function Project() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)

  // Dynamically extract categories from projects list
  const categories = useMemo(() => {
    const rawCategories = Array.from(
      new Set(projects.map((p) => p.type.trim().toLowerCase())),
    )
    return ['all', ...rawCategories]
  }, [])

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return 'All'
    if (cat === 'ml') return 'Machine Learning'
    if (cat === 'iot') return 'IoT'
    if (cat === 'api') return 'API'
    return cat.charAt(0).toUpperCase() + cat.slice(1)
  }

  // Filter projects by type
  const filteredProjects = projects.filter((item: IProject) => {
    if (filter === 'all') return true
    return item.type.trim().toLowerCase() === filter.toLowerCase()
  })

  const getImageSrc = (image?: string) => {
    if (!image) return '/landing.png'
    return image.startsWith('http') || image.startsWith('/')
      ? image
      : `https://drive.google.com/thumbnail?id=${image}&sz=w3000`
  }

  // Parse tech stack into array
  const getTechList = (tech?: string[] | string): string[] => {
    if (!tech) return []
    if (Array.isArray(tech)) return tech
    return tech.split(',').map((t) => t.trim())
  }

  return (
    <div className="mx-auto w-full px-4 sm:px-8 xl:px-16 2xl:px-24">
      <TextSection icon="⚒️" text="it's My Projects." />

      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        <div className="my-10 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {githubStatCards.map((card) => (
            <div
              key={card.src}
              className="cursor-pointer rounded-lg border-4 border-black-primary bg-white p-1 shadow-image-card duration-150 hover:shadow-button-card hover:shadow-black-primary dark:bg-black sm:p-1.5"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={10}
                height={10}
                unoptimized
                className="h-auto w-full max-w-[250px] rounded-md sm:max-w-[326px]"
              />
            </div>
          ))}
        </div>

        {/* Filter Navigation Tabs (Dinamis sesuai data project) */}
        <div className="my-6 flex flex-wrap justify-center gap-3 sm:gap-6 font-semibold text-[#616D8A] dark:text-white">
          {categories.map((cat) => {
            const count =
              cat === 'all'
                ? projects.length
                : projects.filter((p) => p.type.trim().toLowerCase() === cat).length

            return (
              <button
                key={cat}
                className="group relative flex cursor-pointer flex-col items-center justify-center px-2 py-1"
                onClick={() => setFilter(cat)}
              >
                <span
                  className={`absolute bottom-0 h-1.5 ${
                    filter === cat ? 'w-full' : 'w-0'
                  } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
                />
                <p className="pb-1 text-sm font-bold sm:text-base">
                  {getCategoryLabel(cat)} ({count})
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid Projects Cards: Rata Kanan Kiri (Edge to Edge) dengan Grid Responsif */}
      <div className="mx-auto mb-16 mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((item: IProject, index: number) => (
          <div key={index} className="flex h-full w-full">
            <ProjectCard
              {...item}
              onOpenModal={() => setSelectedProject(item)}
            />
          </div>
        ))}
      </div>

      {/* Detail Project Modal (Matching Image 2 with project neo-brutalist theme) */}
      <AnimatePresence>
        {selectedProject && (() => {
          const imageSrc = getImageSrc(selectedProject.image)
          const techList = getTechList(selectedProject.tech)
          const descText = selectedProject.description || selectedProject.deskripsi || ''

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6 md:p-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-4 border-black-primary bg-white p-6 shadow-image-card shadow-black-primary dark:bg-[#0F182B] sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-black-primary dark:text-yellow-primary sm:text-3xl">
                    {selectedProject.title}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-black-primary bg-yellow-primary text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-orange-primary active:translate-y-0.5 active:shadow-none"
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
                  {/* Left: Preview Frame (object-contain agar ukuran asli pas dan tidak terpotong) */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-black-primary bg-[#151c2c] dark:bg-black p-2 shadow-button-card shadow-black-primary md:col-span-7 flex items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={selectedProject.title}
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Right: Project Info & Actions */}
                  <div className="flex flex-col justify-between space-y-6 md:col-span-5">
                    <div>
                      {/* Type Badge */}
                      <span className="inline-block rounded-full border-2 border-black-primary bg-yellow-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black-primary shadow-[2px_2px_0px_#183153]">
                        {selectedProject.type.trim()}
                      </span>

                      <h3 className="mt-3 text-xl font-bold text-black-primary dark:text-white sm:text-2xl">
                        About Project
                      </h3>
                      {/* Deskripsi: Rata Kanan Kiri (text-justify) */}
                      <p className="mt-2 text-justify text-sm leading-relaxed text-secondary-text sm:text-base">
                        {descText}
                      </p>

                      {/* Tech Stack Badges */}
                      {techList.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {techList.map((t, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border-2 border-black-primary bg-slate-100 px-3 py-1 text-xs font-bold text-black-primary shadow-[2px_2px_0px_#183153] dark:bg-black/60 dark:text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-2">
                      {selectedProject.demo && selectedProject.demo !== 'none' && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-black-primary bg-yellow-primary px-5 py-3.5 font-bold text-black-primary shadow-button-card shadow-black-primary transition-all hover:bg-orange-primary active:translate-y-1 active:shadow-none"
                        >
                          <span>Visit Website</span>
                          <RiExternalLinkLine className="text-lg" />
                        </a>
                      )}

                      {selectedProject.repo && (
                        <a
                          href={selectedProject.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-black-primary bg-white px-5 py-3 font-bold text-black-primary shadow-button-card shadow-black-primary transition-all hover:bg-gray-100 active:translate-y-1 active:shadow-none dark:bg-black dark:text-white dark:hover:bg-gray-800"
                        >
                          <FaGithub className="text-lg" />
                          <span>View Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
