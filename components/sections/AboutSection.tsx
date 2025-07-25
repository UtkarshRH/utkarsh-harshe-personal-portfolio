"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Code, Lightbulb, Rocket } from "lucide-react"; // Added new icons for fun facts
import SectionHeader from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card"; // Using Card for consistency

const AboutSection = () => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const greetings = [
    { text: "नमस्ते!", language: "Hindi", script: "Devanagari" },
    { text: "Hello!", language: "English", script: "Latin" },
    { text: "नमस्कार!", language: "Marathi", script: "Devanagari" },
    { text: "Bonjour!", language: "French", script: "Latin" },
    { text: "¡Hola!", language: "Spanish", script: "Latin" },
    { text: "Ciao!", language: "Italian", script: "Latin" },
    { text: "こんにちは!", language: "Japanese", script: "Hiragana" },
    { text: "你好!", language: "Chinese", script: "Simplified Chinese" },
    { text: "안녕하세요!", language: "Korean", script: "Hangul" },
    { text: "Привет!", language: "Russian", script: "Cyrillic" },
    { text: "مرحبا!", language: "Arabic", script: "Arabic" },
    { text: "হ্যালো!", language: "Bengali", script: "Bengali" },
    { text: "வணக்கம்!", language: "Tamil", script: "Tamil" },
    { text: "హలో!", language: "Telugu", script: "Telugu" },
    { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!", language: "Punjabi", script: "Gurmukhi" },
  ];

  const multilingualText = [
    "hi",
    "hello",
    "ciao",
    "hola",
    "bonjour",
    "नमस्ते",
    "வணக்கம்",
    "హలో",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "Привет",
    "হ্যালো",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(107, 114, 128, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(75, 85, 99, 0.08) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader title="ABOUT_ME" />

        <div className="max-w-4xl mx-auto">
          {/* Main Greeting Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              key={currentGreetingIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4">
                {greetings[currentGreetingIndex].text}
              </h3>
              <p className="text-lg text-gray-600 font-mono">
                {greetings[currentGreetingIndex].language} •{" "}
                {greetings[currentGreetingIndex].script}
              </p>
            </motion.div>

            {/* Multilingual Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 flex flex-wrap justify-center gap-2">
                {multilingualText.map((greeting, index) => (
                  <span key={index} className="inline-block">
                    {greeting}
                    {index < multilingualText.length - 1 && ","}
                  </span>
                ))}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Let’s build something impactful together.
                </p>
                <p className="text-lg sm:text-xl text-gray-600">
                  Open to exciting opportunities, collaborations, and
                  conversations —&nbsp;
                  <a
                    href="#contact"
                    className="text-blue-600 underline hover:text-blue-800 transition whitespace-nowrap"
                  >
                    let's connect
                  </a>
                  .
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Content & Language Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-white/80 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg shadow-gray-500/5"
            >
              <h3 className="text-xl font-mono font-bold text-gray-800 mb-4">
                WHO_AM_I:
              </h3>
              <div className="space-y-4 text-gray-700 font-mono">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="text-gray-600">{">"}</span> Passionate Full
                  Stack Developer with expertise in cutting-edge web
                  technologies
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="text-gray-600">{">"}</span> Currently
                  engineering AI solutions at TBP CODOT LLP for Ola's Kruti.ai
                  platform
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="text-gray-600">{">"}</span> Specializing in
                  React, Next.js, Node.js, and AI-powered applications
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="text-gray-600">{">"}</span> Building bridges
                  between technology and human creativity
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-gray-600 font-mono">
                  <MapPin className="w-5 h-5" />
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 font-mono">
                  <Briefcase className="w-5 h-5" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Language Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-white/80 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg shadow-gray-500/5"
            >
              <h3 className="text-xl font-mono font-bold text-gray-800 mb-4">
                LANG_MATRIX:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {greetings.slice(0, 6).map((greeting, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                      index === currentGreetingIndex
                        ? "border-gray-500 bg-gray-100 shadow-lg shadow-gray-500/20"
                        : "border-gray-200 bg-white/80 hover:border-gray-400 hover:shadow-md hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentGreetingIndex(index)}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2 text-gray-800">
                        {greeting.text}
                      </div>
                      <div className="text-xs text-gray-500 font-mono">
                        {greeting.language}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-xl shadow-gray-500/10 p-6 sm:p-8">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 font-mono text-center">
                  <span className="text-gray-600">{"<"}</span>
                  FUN_FACTS
                  <span className="text-gray-600">{"/>"}</span>
                </h4>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center flex flex-col items-center">
                    <Code className="w-10 h-10 text-gray-600 mb-2" />
                    <div className="text-3xl font-bold text-gray-700 mb-2">
                      ∞
                    </div>
                    <div className="text-gray-600 font-mono text-sm">
                      Lines of code written
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <Lightbulb className="w-10 h-10 text-gray-600 mb-2" />
                    <div className="text-3xl font-bold text-gray-700 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600 font-mono text-sm">
                      Learning new technologies
                    </div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <Rocket className="w-10 h-10 text-gray-600 mb-2" />
                    <div className="text-3xl font-bold text-gray-700 mb-2">
                      🚀
                    </div>
                    <div className="text-gray-600 font-mono text-sm">
                      Always ready for new challenges
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
