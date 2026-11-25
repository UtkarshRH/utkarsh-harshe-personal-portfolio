"use client";

import React from "react";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { SITE_CONFIG } from "@/data/portfolio";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <EditorialHeader
              eyebrow="Contact"
              title="Open to conversations on engineering, architecture, and product roles."
              description="Based in Bengaluru, India. Reach out directly by email or connect on GitHub and LinkedIn."
            />

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#111318] bg-[#F5F5F6] hover:bg-white rounded-md transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Send an email</span>
              </a>

              <a
                href={SITE_CONFIG.resumePath}
                download="Utkarsh_Harshe_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F5F5F6] bg-[#181B21] hover:bg-[#1E222A] border border-[#2A2E37] hover:border-[#3c4250] rounded-md transition-colors"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                <span>Download résumé</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center justify-between py-4 group"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  Email
                </div>
                <div className="mt-1 text-sm sm:text-base text-[#F5F5F6] group-hover:text-[#6685FF] transition-colors">
                  {SITE_CONFIG.email}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A1A7B3] group-hover:text-[#6685FF]" aria-hidden="true" />
            </a>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 group"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  GitHub
                </div>
                <div className="mt-1 text-sm sm:text-base text-[#F5F5F6] group-hover:text-[#6685FF] transition-colors">
                  github.com/UtkarshRH
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A1A7B3] group-hover:text-[#6685FF]" aria-hidden="true" />
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 group"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  LinkedIn
                </div>
                <div className="mt-1 text-sm sm:text-base text-[#F5F5F6] group-hover:text-[#6685FF] transition-colors">
                  linkedin.com/in/utkarsh-r-harshe
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A1A7B3] group-hover:text-[#6685FF]" aria-hidden="true" />
            </a>

            <div className="py-4">
              <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                Location
              </div>
              <div className="mt-1 text-sm sm:text-base text-[#F5F5F6]">
                {SITE_CONFIG.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
