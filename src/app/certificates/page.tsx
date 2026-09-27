'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ICertificate } from '@/utils/interface/Certificate'
import { certificates } from '@/utils/constant/Certificates'
import { motion, AnimatePresence } from 'framer-motion'
import TextSection from '@/components/common/TextSection'
import { RiDownloadLine, RiExternalLinkLine, RiAwardLine } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<ICertificate | null>(null)

  const getFileUrl = (cert: ICertificate) => {
    const url = cert.pdf || cert.image || cert.href || ''
    return url.startsWith('http') || url.startsWith('/')
      ? url
      : `https://drive.google.com/thumbnail?id=${url}&sz=w3000`
  }

  const checkIsPdf = (url: string) => {
    return url.toLowerCase().includes('.pdf')
  }

  return (
    <div className="mx-auto w-full px-4 sm:px-8 xl:px-24 2xl:px-40">
      <TextSection
        icon="🎓"
        text="My Certificates"
        classNames="mb-10 text-center"
      />

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 justify-center">
        {certificates.map((cert: ICertificate, index: number) => {
          const fileUrl = getFileUrl(cert)
          const isPdf = checkIsPdf(fileUrl)

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative h-[290px] w-full overflow-hidden rounded-2xl border-4 border-black-primary bg-[#0F182B] shadow-image-card shadow-black-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-button-card hover:shadow-black-primary sm:h-[320px]"
            >
              {/* Background Certificate Preview (Image or PDF) */}
              {isPdf ? (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-slate-900">
                  <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="h-[140%] w-[140%] -translate-y-4 pointer-events-none opacity-80"
                    tabIndex={-1}
                    title={cert.title}
                  />
                </div>
              ) : (
                <Image
                  src={fileUrl}
                  alt={cert.title}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/80 to-black-primary/35 transition-opacity duration-300" />

              {/* Card Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                {/* Top Badges */}
                <div className="flex items-start justify-between gap-3">
                  {/* Company Pill Badge */}
                  <span className="inline-flex max-w-[70%] items-center truncate rounded-full border-2 border-black-primary bg-yellow-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black-primary shadow-[2px_2px_0px_#183153]">
                    {cert.company}
                  </span>

                  {/* Type / Date Badge */}
                  <span className="inline-flex items-center rounded-full border-2 border-black-primary bg-white px-3 py-1 text-xs font-bold text-black-primary shadow-[2px_2px_0px_#183153]">
                    {cert.type || cert.date || 'Certificate'}
                  </span>
                </div>

                {/* Bottom Section */}
                <div>
                  <h3 className="mb-4 line-clamp-2 text-lg font-bold leading-snug text-white drop-shadow-md sm:text-xl">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between pt-1">
                    {/* View Certificate Button (Opens Modal) */}
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black-primary bg-yellow-primary px-3.5 py-1.5 text-xs sm:text-sm font-bold text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-orange-primary active:translate-y-0.5 active:shadow-none"
                    >
                      <RiAwardLine className="text-base" />
                      <span>View Certificate</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Direct Download Button */}
                      <a
                        href={fileUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-black-primary bg-white text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-yellow-primary active:translate-y-0.5 active:shadow-none"
                        title="Download Certificate"
                      >
                        <RiDownloadLine className="text-base sm:text-lg" />
                      </a>

                      {/* External Link Button if provided and different from fileUrl */}
                      {cert.href && cert.href !== fileUrl && (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-black-primary bg-white text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-yellow-primary active:translate-y-0.5 active:shadow-none"
                          title="Open Link"
                        >
                          <RiExternalLinkLine className="text-base sm:text-lg" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Modal / Dialog Preview */}
      <AnimatePresence>
        {selectedCert && (() => {
          const fileUrl = getFileUrl(selectedCert)
          const isPdf = checkIsPdf(fileUrl)

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6 md:p-8"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-4 border-black-primary bg-white dark:bg-[#0F182B] p-6 shadow-image-card shadow-black-primary sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black-primary bg-yellow-primary text-black-primary shadow-[2px_2px_0px_#183153]">
                    <RiAwardLine className="text-xl" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-black-primary bg-yellow-primary text-black-primary shadow-[2px_2px_0px_#183153] transition-all hover:bg-orange-primary active:translate-y-0.5 active:shadow-none"
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
                  {/* Left: Certificate Preview Frame (Supports PDF iframe or Image) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-black-primary bg-gray-100 dark:bg-black shadow-button-card shadow-black-primary md:col-span-7">
                    {isPdf ? (
                      <iframe
                        src={`${fileUrl}#toolbar=0`}
                        className="h-full w-full border-none"
                        title={selectedCert.title}
                      />
                    ) : (
                      <Image
                        src={fileUrl}
                        alt={selectedCert.title}
                        fill
                        unoptimized
                        className="object-contain p-2"
                      />
                    )}
                  </div>

                  {/* Right: Info & Action Buttons */}
                  <div className="flex flex-col justify-between space-y-6 md:col-span-5">
                    <div>
                      <span className="inline-block rounded-full border-2 border-black-primary bg-yellow-primary px-3.5 py-1 text-xs font-bold text-black-primary shadow-[2px_2px_0px_#183153]">
                        {selectedCert.company}
                      </span>
                      <h2 className="mt-3 text-xl font-bold leading-tight text-black-primary dark:text-white sm:text-2xl">
                        {selectedCert.title}
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm font-semibold text-secondary-text">
                        <span>{selectedCert.type}</span>
                        {selectedCert.date && (
                          <>
                            <span>•</span>
                            <span>{selectedCert.date}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <a
                        href={fileUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-black-primary bg-yellow-primary px-5 py-3.5 font-bold text-black-primary shadow-button-card shadow-black-primary transition-all hover:bg-orange-primary active:translate-y-1 active:shadow-none"
                      >
                        <RiDownloadLine className="text-lg" />
                        <span>Download / View PDF</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(null)}
                        className="w-full cursor-pointer rounded-xl border-2 border-black-primary bg-white dark:bg-black px-5 py-3 font-bold text-black-primary dark:text-white shadow-button-card shadow-black-primary transition-all hover:bg-gray-100 dark:hover:bg-gray-800 active:translate-y-1 active:shadow-none"
                      >
                        Close Preview
                      </button>
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




