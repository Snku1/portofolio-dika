'use client'

import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { RiExternalLinkLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { IProject } from '@/utils/interface/Project'

interface ProjectCardProps extends IProject {
  onOpenModal?: () => void
}

export default function ProjectCard({
  image,
  title,
  description,
  deskripsi,
  repo,
  demo,
  type,
  tech,
  onOpenModal,
}: ProjectCardProps) {
  const imageSrc =
    image?.startsWith('http') || image?.startsWith('/')
      ? image
      : `https://drive.google.com/thumbnail?id=${image}&sz=w3000`

  // Format tech list to display on card
  const techText = Array.isArray(tech) ? tech.join(', ') : tech || ''

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      onClick={onOpenModal}
      className="group relative flex h-full w-full cursor-pointer flex-col justify-between rounded-3xl border-4 border-black-primary bg-white p-5 shadow-image-card shadow-black-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-button-card hover:shadow-black-primary dark:bg-[#10141e]"
    >
      <div>
        {/* Top Thumbnail Frame: object-contain agar ukuran asli gambar utuh & tidak terpotong */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-black-primary bg-[#151c2c] p-2 shadow-sm flex items-center justify-center">
          {/* Type Badge */}
          <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center rounded-full border-2 border-black-primary bg-yellow-primary px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-black-primary shadow-[2px_2px_0px_#183153]">
            {type.trim()}
          </span>

          <Image
            src={imageSrc}
            alt={title}
            fill
            unoptimized
            className="object-contain object-center p-1 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Middle Content: Rata Kiri */}
        <div className="my-4 text-left">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-black-primary transition-colors group-hover:text-orange-primary dark:text-white sm:text-xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Bottom Row: Rata Kiri Kanan (Tech Stack di kiri, Tombol di kanan) */}
      <div className="mt-4 flex items-center justify-between border-t-2 border-slate-200/50 pt-3 dark:border-slate-800">
        {/* Left: Tech stack text */}
        <p className="max-w-[65%] truncate text-xs font-bold text-yellow-primary sm:text-sm">
          {techText}
        </p>

        {/* Right: GitHub & Demo Icon Buttons */}
        <div className="flex items-center gap-2">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-2 border-black-primary bg-white text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-yellow-primary active:translate-y-0.5 active:shadow-none"
              title="View Repository"
            >
              <FaGithub className="text-base sm:text-lg" />
            </a>
          )}
          {demo && demo !== 'none' && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-2 border-black-primary bg-white text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-yellow-primary active:translate-y-0.5 active:shadow-none"
              title="Visit Demo"
            >
              <RiExternalLinkLine className="text-base sm:text-lg" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
