"use client";

import React from "react";
import { ArrowDownToLine, ArrowUpRight, Mail, MapPin } from "lucide-react";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { SITE_CONFIG } from "@/data/portfolio";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="border border-[#303540] bg-[#1B1E25]/85 backdrop-blur-sm rounded-sm p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <EditorialHeader
                eyebrow="06 / CONTACT"
                title="Let’s discuss engineering roles, architecture, or product work."
                description="Based in Bengaluru, India. Available for thoughtful conversations around frontend architecture, full-stack systems, and software engineering opportunities."
              />

              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#111318] bg-[#F4F5F7] hover:bg-white rounded-sm transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Send an email</span>
                </a>
                <a
                  href={SITE_CONFIG.resumePath}
                  download="Utkarsh_Harshe_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F4F5F7] bg-[#232731] hover:bg-[#2b303c] border border-[#303540] hover:border-[#6685FF]/60 rounded-sm transition-colors"
                >
                  <ArrowDownToLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                  <span>Download résumé</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 border border-[#303540] bg-[#111318] rounded-sm divide-y divide-[#303540]">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center justify-between p-5 hover:bg-[#1B1E25]/60 transition-colors group"
              >
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                    Email
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                    {SITE_CONFIG.email}
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#A3AAB6] group-hover:text-[#6685FF] transition-colors"
                  aria-hidden="true"
                />
              </a>

              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 hover:bg-[#1B1E25]/60 transition-colors group"
              >
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                    GitHub
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                    github.com/UtkarshRH
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#A3AAB6] group-hover:text-[#6685FF] transition-colors"
                  aria-hidden="true"
                />
              </a>

              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 hover:bg-[#1B1E25]/60 transition-colors group"
              >
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                    LinkedIn
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                    linkedin.com/in/utkarsh-r-harshe
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#A3AAB6] group-hover:text-[#6685FF] transition-colors"
                  aria-hidden="true"
                />
              </a>

              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                    Location
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                    {SITE_CONFIG.location}
                  </div>
                </div>
                <MapPin className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
