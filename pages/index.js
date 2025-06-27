import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Youtube, Instagram, MapPin, Mail, Phone, ExternalLink, Code, Cpu, Smartphone, Globe } from "lucide-react";


export default function MohammedShafeequeProfile() {
  // Add SEO meta tags dynamically
  useEffect(() => {
    // Set document title
    document.title = "Mohammed Shafeeque Ishwaramangala - Official Profile | Tech Innovator, Speaker & Content Creator";
    
    // Create or update meta tags
    const metaTags = [
      { name: "description", content: "Official profile of Mohammed Shafeeque Ishwaramangala – tech innovator, Flutter developer, AI specialist, public speaker, and content creator from Ishwaramangala, Karnataka. Founder of Islamic Media Shazah and Oru Trippoli channels." },
      { name: "keywords", content: "Mohammed Shafeeque Ishwaramangala, Mohammed Shafeeque, Shafeeque, shafeeqshazah, Islamic Media Shazah, Oru Trippoli, tech speaker, Karnataka, public speaker, Flutter developer, AI specialist, Bekal Fest, VTU, P.A. College of Engineering, Ishwaramangala, Manjanady, software developer, robotics, machine learning, content creator, YouTube channel" },
      { name: "author", content: "Mohammed Shafeeque Ishwaramangala" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Mohammed Shafeeque Ishwaramangala - Tech Innovator & Content Creator" },
      { property: "og:description", content: "Official profile of Mohammed Shafeeque Ishwaramangala – tech innovator, speaker, and content creator from Karnataka, India." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mohammed Shafeeque Ishwaramangala - Tech Innovator" },
      { name: "twitter:description", content: "Tech innovator, Flutter developer, AI specialist, and content creator from Karnataka, India." },
      { name: "twitter:creator", content: "@shafeeqshazah" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Ishwaramangala, Karnataka, India" },
      { name: "geo.position", content: "12.8;74.8" },
      { name: "ICBM", content: "12.8, 74.8" }
    ];

    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.setAttribute('name', tag.name);
        if (tag.property) element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Add JSON-LD structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammed Shafeeque Ishwaramangala",
      "alternateName": ["Mohammed Shafeeque", "Shafeeque", "shafeeqshazah"],
      "description": "Tech innovator, Flutter developer, AI specialist, public speaker, and content creator",
      "url": window.location.href,
      "image": "https://via.placeholder.com/400x400", // Replace with actual image URL
      "sameAs": [
        "https://instagram.com/mohammed_shafeeq_ue",
        "https://www.linkedin.com/in/mohammed-shafeeque-870765195",
        "https://x.com/shafeeqshazah",
        "https://www.youtube.com/@Islamicmedia313",
        "https://www.youtube.com/@shazah48"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ishwaramangala",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "P.A. College of Engineering"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Government Polytechnic Bantwal"
        }
      ],
      "knowsAbout": [
        "Flutter Development",
        "Firebase",
        "Artificial Intelligence",
        "Machine Learning",
        "Robotics",
        "ROS",
        "Full-stack Development",
        "Mobile App Development",
        "Public Speaking",
        "Content Creation"
      ],
      "jobTitle": "Software Developer and Content Creator",
      "worksFor": {
        "@type": "Organization",
        "name": "Self-employed"
      }
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: <Smartphone className="w-6 h-6" />, title: "Flutter & Firebase", desc: "Mobile App Development" },
    { icon: <Cpu className="w-6 h-6" />, title: "AI & ML Security", desc: "Intelligent Systems" },
    { icon: <Code className="w-6 h-6" />, title: "ROS Robotics", desc: "Robotic Interfaces" },
    { icon: <Globe className="w-6 h-6" />, title: "Full-stack Dev", desc: "Web & Mobile Apps" }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/mohammed_shafeeq_ue", label: "Instagram", color: "hover:text-pink-400" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/mohammed-shafeeque-870765195", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/shafeeqshazah", label: "X (Twitter)", color: "hover:text-sky-400" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://www.youtube.com/@Islamicmedia313", label: "Islamic Media Shazah", color: "hover:text-red-400" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://www.youtube.com/@shazah48", label: "Oru Trippoli", color: "hover:text-red-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <header className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
<div className="relative group">
  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 animate-spin-slow">
    <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
      <img 
        src="/images/20240111_101034.jpg" 
        alt="Mohammed Shafeeque Ishwaramangala"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>


              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Mohammed Shafeeque Ishwaramangala
                </h1>
                <div className="text-lg text-purple-200 mb-2">
                  Also known as: Mohammed Shafeeque, Shafeeque, shafeeqshazah
                </div>
                <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                  Tech Innovator • Flutter Developer • AI Specialist • Public Speaker • Content Creator
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ishwaramangala, Karnataka, India</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 ${link.color}`}
                    >
                      {link.icon}
                      <span className="text-sm hidden sm:inline">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className={`py-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:rotate-1 ${
                    activeSection === index ? 'ring-2 ring-purple-400 bg-white/20' : ''
                  }`}
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`py-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Profile Summary */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-purple-300">Profile Summary</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Mohammed Shafeeque Ishwaramangala is a forward-thinking technologist and community leader from Ishwaramangala, Karnataka, India. 
                  Known professionally as Mohammed Shafeeque or simply Shafeeque, he has gained recognition for innovative contributions to 
                  Flutter development, AI/ML security systems, robotics, and educational outreach. A notable speaker at regional events 
                  including Bekal Fest 2K24, he combines technical expertise with community engagement through his popular YouTube channels.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Content Channels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Youtube className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-medium">Islamic Media Shazah</p>
                        <p className="text-sm text-gray-400">Islamic and cultural content</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Youtube className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-medium">Oru Trippoli</p>
                        <p className="text-sm text-gray-400">Travel and events ("A Traveller")</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-purple-300">Education</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="font-semibold text-lg">B.Tech Computer Science</h3>
                    <p className="text-blue-300">P.A. College of Engineering</p>
                    <p className="text-gray-400 text-sm">Visvesvaraya Technological University (VTU)</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-lg">Diploma</h3>
                    <p className="text-blue-300">Government Polytechnic Bantwal</p>
                  </div>
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <h3 className="font-semibold text-lg">Schooling</h3>
                    <p className="text-blue-300">Khaleel Salah English Medium School</p>
                    <p className="text-blue-300">Al Madeena English Medium School</p>
                    <p className="text-gray-400 text-sm">Manjanady</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-8 text-center text-gray-400 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Mohammed Shafeeque Ishwaramangala. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}