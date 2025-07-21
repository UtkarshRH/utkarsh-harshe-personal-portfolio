"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "EMAIL_PROTOCOL",
      value: "utkarshharshe06@gmail.com",
      href: "mailto:utkarshharshe06@gmail.com",
      gradient: "from-white to-gray-50",
      borderColor: "gray-200",
      hoverColor: "gray-400",
    },
    {
      icon: Phone,
      title: "VOICE_CHANNEL",
      value: "+91 9022791408",
      href: "tel:+919022791408",
      gradient: "from-gray-50 to-white",
      borderColor: "gray-200",
      hoverColor: "gray-400",
    },
    {
      icon: Github,
      title: "CODE_REPOSITORY",
      value: "github.com/UtkarshRH",
      href: "https://github.com/UtkarshRH",
      gradient: "from-white to-gray-100",
      borderColor: "gray-200",
      hoverColor: "gray-400",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="INIT_CONTACT"
          subtitle={
            <>
              {">"} Ready to collaborate on next-generation projects
              <br />
              {">"} Let's build something extraordinary together
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {contactMethods.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <Card
                className={`bg-gradient-to-br ${contact.gradient} border border-${contact.borderColor} backdrop-blur-sm text-center hover:border-gray-400 transition-all duration-300 h-full shadow-sm hover:shadow-md`}
              >
                <CardContent className="p-6 sm:p-8">
                  <contact.icon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-mono font-bold text-gray-800 mb-2">{contact.title}</h3>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`text-gray-600 hover:text-gray-700 transition-colors font-mono text-sm break-all`}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open("mailto:utkarshharshe06@gmail.com", "_blank")}
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-700 text-white font-mono px-8 py-3 border-2 border-amber-500 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 rounded-lg hover:border-amber-600"
          >
            <Terminal className="w-5 h-5 mr-2" />
            SEND_EMAIL.SH
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
