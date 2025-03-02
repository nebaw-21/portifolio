import { Github, Linkedin, Mail, Twitter, Code, Server, Database, Globe } from "lucide-react"
import Image from "../assets/github-142-svgrepo-com.svg"

export default function AboutMe() {
  // Personal details - replace with your own
  const personalDetails = {
    name: "Nebiyu Zewge",
    title: "Full-stack Developer and AWS Certified Solutions Architect",
    bio: "Passionate full-stack developer with 5+ years of experience building web applications. I specialize in React.js, Node.js, and modern JavaScript frameworks. I love solving complex problems and creating intuitive user experiences.",
    location: "Addis Ababa, Ethiopia",
    email: "zewgenebiyu@gmail.com",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
  }

  // Skills with proficiency levels (0-100)
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "TypeScript", proficiency: 85 },
        { name: "HTML/CSS", proficiency: 90 },
        { name: "Next.js", proficiency: 80 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "Java", proficiency: 65 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 },
        { name: "MySQL", proficiency: 70 },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 70 },
        { name: "AWS", proficiency: 85 },

      ],
    },
  ]

  // Experience - replace with your own
  const experiences = [
    {
      company: "Kuraz tech company",
      position: "Intern backend developer", 
      period: "2024-present",
      description:
        "Lead frontend development for enterprise applications using React.js and Next.js. Implemented state management solutions and optimized application performance.",
    },

  ]



  return (
    <div className="min-h-screen bg-gray-900 ">

      <main className="container mx-auto max-w-6xl py-6 px-0">

        {/* About Section */}
        <section className="mb-16 ">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </span>
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-white">{personalDetails.bio}</p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 ">Personal Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <p className="text-gray-900 dark:text-white">{personalDetails.location}</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Email:</span>
                  <p className="text-gray-900 dark:text-white">{personalDetails.email}</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Available for:</span>
                  <p className="text-gray-900 dark:text-white">Freelance, Full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </span>
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  {skillGroup.category === "Frontend" && <Code className="h-5 w-5" />}
                  {skillGroup.category === "Backend" && <Server className="h-5 w-5" />}
                  {skillGroup.category === "Database" && <Database className="h-5 w-5" />}
                  {skillGroup.category === "Other" && <Globe className="h-5 w-5" />}
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </span>
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{exp.position}</h3>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm inline-block">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.company}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

   
      </main>


    </div>
  )
}

