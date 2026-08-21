"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

interface CertificateItem {
  id: number;
  studentName: string;
  courseName: string;
  issueDate: string;
  imagePath: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 1,
    studentName: "Aneeza Rasheed",
    courseName: "AI Foundation Course",
    issueDate: "Friday, 14 Aug 2026",
    imagePath: "/images/certificates/certificate-aneeza.png",
  },
  {
    id: 2,
    studentName: "Fatima Zahra",
    courseName: "AI Foundation Course",
    issueDate: "Friday, 14 Aug 2026",
    imagePath: "/images/certificates/certificate-fatima.png",
  },
  {
    id: 3,
    studentName: "Ayat Ali",
    courseName: "AI Foundation Course",
    issueDate: "Friday, 14 Aug 2026",
    imagePath: "/images/certificates/certificate-ayat.png",
  },
  {
    id: 4,
    studentName: "Syed Omar Najm UD din",
    courseName: "AI Foundation Course",
    issueDate: "Friday, 14 Aug 2026",
    imagePath: "/images/certificates/certificate-syed-omar.png",
  },
  {
    id: 5,
    studentName: "Muhammad Adnan",
    courseName: "AI Foundation Course",
    issueDate: "Friday, 14 Aug 2026",
    imagePath: "/images/certificates/certificate-muhammad-adnan.png",
  },
];

export default function StudentCertificates() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // We duplicate the list to make the marquee transition infinite and seamless
  const marqueeList = [...CERTIFICATES, ...CERTIFICATES];

  return (
    <section id="certificates" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Verified Student Achievements"
          subtitle="Congratulations to our recently graduated students who successfully completed their AI courses."
          centered
          className="[&_h2]:text-white [&_p]:text-blue-100"
        />

        {/* Outer marquee wrapper with pause on hover functionality */}
        <div className="relative mt-12 w-full overflow-hidden py-4 pause-marquee select-none mask-gradient">
          {/* Gradient fade borders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex w-max gap-8 animate-marquee">
            {marqueeList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[280px] sm:w-[360px] bg-slate-900/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 cursor-pointer"
                onClick={() => setSelectedImg(item.imagePath)}
              >
                {/* Certificate Frame wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-950 group">
                  <Image
                    src={item.imagePath}
                    alt={`Certificate earned by ${item.studentName}`}
                    fill
                    className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, 360px"
                  />
                  {/* View Icon Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="p-3 rounded-full bg-primary text-white shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Student Info Details */}
                <div className="mt-4 text-center">
                  <h4 className="font-outfit text-base font-bold text-white tracking-wide truncate">
                    {item.studentName}
                  </h4>
                  <p className="text-xs font-semibold text-secondary-light mt-1">
                    {item.courseName}
                  </p>
                  <p className="text-[10px] text-white/50 mt-1.5 font-medium">
                    {item.issueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image viewer modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-200"
            onClick={() => setSelectedImg(null)}
            aria-label="Close viewer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt="Student Certificate Full View"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
