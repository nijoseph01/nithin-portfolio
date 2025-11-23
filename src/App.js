import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, Download, Server, Code, Database, Award, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Nithin Joseph",
    role: "MuleSoft Certified Developer | Integration Engineer",
    contact: {
      phone: "+31 617976525",
      email: "nithinjoseph072@gmail.com",
      location: "Amsterdam, Netherlands"
    },
    summary: "Mule Certified Developer (MCD–L1) with 5.5+ years of experience in designing and building APIs. Expert in Mule ESB, Anypoint Studio, and Micro-services architecture. Proven track record in FinTech, Healthcare, and Manufacturing domains with strong skills in CI/CD and System Administration."
  };

  const skills = [
    { category: "MuleSoft Ecosystem", items: ["Anypoint Studio", "Mule Runtime 4.x", "DataWeave", "RAML", "CloudHub", "RTF", "On-prem"] },
    { category: "Development & Scripting", items: ["Java", "C#", "ASP.Net", "Unix Shell", "PowerShell", "Python"] },
    { category: "DevOps & Tools", items: ["Jenkins", "GitHub", "Bitbucket", "Octopus", "Docker", "Splunk"] },
    { category: "Databases", items: ["MS SQL Server", "MySQL", "Oracle DB"] }
  ];

  const experience = [
    {
      company: "EPI Company",
      role: "End-to-End Test Engineer (Payconiq Integration)",
      date: "Nov 2024 - Present",
      location: "Amsterdam, Netherlands",
      desc: [
        "Creating test reports for consumers and acceptors.",
        "Validating ICS test forms and UAT environments.",
        "Developed Postman scripts to verify feature functionality.",
        "Onboarded issuers and acquirers to iDEAL platform for R1/R2."
      ]
    },
    {
      company: "Payconiq Services B.V",
      role: "Integration Engineer",
      date: "Mar 2023 - Oct 2024",
      location: "Amsterdam, Netherlands",
      desc: [
        "Configured Acquirers and Issuers in iDEAL payments.",
        "Managed certificates (ES256, RSA) and mTLS connections.",
        "Configured banks in RAML with deep link URLs.",
        "Automated repetitive process operations."
      ]
    },
    {
      company: "3M ANSR Technology Center",
      role: "Senior MuleSoft Developer",
      date: "Apr 2022 - Feb 2023",
      location: "Bangalore, India",
      desc: [
        "Designed API specifications from RAML for Healthcare domain.",
        "Managed 200+ APIs in CloudHub, RTF, and On-prem environments.",
        "Created CI/CD pipelines for API deployment.",
        "Developed connectors for Salesforce, DB, and SFTP."
      ]
    },
    {
      company: "Wipro Technologies",
      role: "MuleSoft Developer & Senior Project Engineer",
      date: "Sep 2016 - Mar 2022",
      location: "Bangalore, India",
      desc: [
        "Pacsun Project: Designed RAML API specifications and developed Mule applications using SAP, FTP, and HTTP connectors.",
        "Implemented Configuration as a Service (CaaS) for zero-downtime updates and standard error/logging policies.",
        "Eddie Bauer Project: Led migration from Mule 3 to Mule 4 (DataWeave 1.0 to 2.0) and built REST APIs for PeopleSoft integration.",
        "Managed full lifecycle: API-Kit implementation, unit testing, documentation, and CI/CD deployment via Jenkins/Maven.",
        "ABB Project: Led L2/L3 Operational Support and Jenkins Administration (Master/Slave setup, Pipelines, TFS/Azure integration).",
        "Performed Server & DB Administration (Windows 2019, MS SQL 2014), including patching, backup/restore, and performance tuning.",
        "Nokia Siemens Project: Executed Application and Oracle DB upgrades (RHEL, Oracle 12C) and defined Disaster Recovery solutions.",
        "Migrated/Re-hosted HP ALM infrastructure to new data centers and developed Unix shell scripts for automated maintenance."
      ]
    }
  ];

  const education = [
    { degree: "M.Tech in Software Engineering", school: "BITS Pilani", year: "2020" },
    { degree: "Bachelor of Computer Applications", school: "Dr. NGP Arts & Science College", year: "2016" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-mule">NJ.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-mule transition">Home</a>
              <a href="#about" className="hover:text-mule transition">About</a>
              <a href="#experience" className="hover:text-mule transition">Experience</a>
              <a href="#skills" className="hover:text-mule transition">Skills</a>
              <a href="#contact" className="px-4 py-2 bg-mule text-white rounded-md hover:bg-blue-600 transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" className="block px-3 py-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block px-3 py-2 text-mule font-bold" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-300 mb-8">{personalInfo.role}</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <span className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full text-sm">
                <Award size={16} className="text-yellow-400"/> MuleSoft Certified (MCD-L1)
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-mule hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <Mail size={20} /> Hire Me
              </a>
              <button className="border border-white hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <Download size={20} /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Professional Summary</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-mule">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Server className="text-mule" />}
                  {index === 1 && <Code className="text-mule" />}
                  {index === 2 && <Briefcase className="text-mule" />}
                  {index === 3 && <Database className="text-mule" />}
                  <h4 className="font-bold text-lg">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">Work Experience</h3>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-mule rounded-full"></div>
                <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{job.role}</h4>
                      <p className="text-mule font-semibold">{job.company}</p>
                    </div>
                    <div className="text-slate-500 text-sm mt-2 md:mt-0 text-right">
                      <p>{job.date}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.desc.map((point, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-mule" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.school}</p>
                    <p className="text-sm text-slate-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-mule" /> Awards & Honors
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <p className="text-slate-600">🏆 Awarded "Inspiring Performance" for ABB account</p>
                <p className="text-slate-600">🏆 "Victory League" (Extraordinary Commitment) for Nokia Siemens</p>
                <p className="text-slate-600">🏆 "You Made a Difference" Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Nithin Joseph</h4>
              <p className="text-sm">Integration Engineer bridging the gap between complex systems and business value.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 flex flex-col items-center md:items-start">
                <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-2 hover:text-white transition">
                  <Mail size={16} /> {personalInfo.contact.email}
                </a>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> {personalInfo.contact.phone}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition"><Linkedin size={24} /></a>
                {/* Add GitHub link if available */}
              </div>
              <p className="text-xs mt-4 text-slate-500">© {new Date().getFullYear()} Nithin Joseph. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;