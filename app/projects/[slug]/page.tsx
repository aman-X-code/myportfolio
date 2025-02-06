"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useDarkMode } from "@/app/context/DarkModeContext"
import { motion } from "framer-motion"

// This should be moved to a separate file and imported
const projects = [
  // Add more projects here...
  {
    title: "FOOD COURT MANAGER",
    slug: "foodcourt",
    category: "WEB APPLICATION",
    description:
      "A dynamic website showcasing the beauty of nature and promoting environmental awareness. This project aims to inspire visitors to appreciate and protect our planet's diverse ecosystems.",
    fullDescription:
      "A seamless college food court management system with time slot selection, multiple food options, and integrated money management. Built with React and TypeScript, deployed on Vercel for efficient user experience.",
    timeline: "AUGUST 2024 - NOVEMBER 2024",
    images: ["/foodcourt/onef.png", "/foodcourt/onef2.png", "/foodcourt/onef3.png"],
    technologies: [
      { name: "React", icon: "/tech-icons/react.svg" },
      { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
      { name: "Three.js", icon: "/tech-icons/threejs.svg" },
      { name: "GSAP", icon: "/tech-icons/gsap.svg" },
    ],
    challenges: [
      "Handling concurrent slot bookings without conflicts or overlaps.",
      "Optimizing database queries for fast retrieval and minimal latency.",
      "Implementing secure authentication and transaction integrity to prevent fraud.",
    ],
    solutions: [
      "Used optimistic concurrency control to prevent booking conflicts.",
      "Optimized database indexing and caching for faster query performance.",
      "Implemented secure OAuth authentication and encrypted transactions.",
    ],
    outcomes: "Delivered a fast, secure, and seamless food court management system with real-time booking, smooth transactions, and an intuitive user experience.",
    liveUrl: "https://college-food-court.vercel.app/",
    githubUrl: "https://github.com/example/poweroflife",
  },
  {
    title: "CALENDAR SYNC",
    slug: "calendar-sync",
    category: "WEB APPLICATION",
    description:
      "An interactive platform for managing and optimizing household electricity consumption. This innovative solution helps users track, analyze, and reduce their energy usage.",
    fullDescription:
      "A calendar sync web application designed for efficient task and event management, integrating Google SSO for secure authentication and Google APIs for real-time synchronization. Users can seamlessly create, edit, and manage their schedules across multiple devices, ensuring cross-platform accessibility. The app provides intuitive UI/UX, notifications, and automated syncing to keep events up to date. Deployed on Vercel, it offers fast performance, scalability, and a smooth user experience.",
    timeline: "JANUARY 2025",
    images: ["/calendar/two.png", "/calendar/twof.png", "/calendar/two2.png"],
    technologies: [
      { name: "Vue.js", icon: "/tech-icons/vuejs.svg" },
      { name: "D3.js", icon: "/tech-icons/d3js.svg" },
      { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
    ],
    challenges: [
      "Integrating Google SSO and ensuring smooth user authentication across platforms.",
      "Implementing real-time calendar sync with Google APIs, handling large datasets efficiently.",
      "Ensuring cross-platform compatibility and seamless UI/UX for various devices and screen sizes.",
    ],
    solutions: [
      "Successfully integrated Google SSO for secure and efficient user authentication.",
      "Achieved real-time synchronization of tasks and events with Google APIs, ensuring data accuracy.",
      "Delivered a responsive, cross-platform application with an intuitive interface for users on any device.",
    ],
    outcomes: "Helped users to reduce time in managing the tasks.",
    liveUrl: "https://calendarsync-opal.vercel.app/",
    githubUrl: "https://github.com/example/handleyourelectricity",
  },
  {
    title: "METRO ROUTE WIZARD",
    slug: "metro",
    category: "WEB APPLICATION",
    description:
      "A comprehensive dashboard for managing multiple social media accounts and analyzing engagement metrics.",
    fullDescription:
      "The Metro Route Planner is a web application that calculates the most efficient metro routes based on minimum interchanges and cost. Using the shortest path algorithm, it provides users with optimal routes, ensuring faster and more affordable travel options. The app analyzes the metro network to suggest the best possible routes, saving time and money while enhancing the commuter experience.",
    timeline: "OCTOBER 2024 - NOVEMBER 2024",
    images: ["/metro/mm.png", "/metro/mm2.png"],
    technologies: [
      { name: "React", icon: "/tech-icons/react.svg" },
      { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
      { name: "Firebase", icon: "/tech-icons/firebase.svg" },
    ],
    challenges: [
      "Handling large metro networks and ensuring fast route calculation.",
      "Balancing between minimizing interchanges and reducing travel costs.",
      "Designing a user-friendly interface that simplifies complex route options.",
    ],
    solutions: [
      "Implemented optimized graph algorithms to handle large datasets and ensure quick calculations.",
      "Used weighted shortest path algorithms to prioritize both interchanges and cost effectively.",
      "Developed an intuitive UI with filters and clear visualizations to make route selection easy for users.",
    ],
    outcomes: "The Metro Route Planner efficiently calculates optimal routes, balancing interchanges and cost using advanced algorithms, ensuring fast and accurate results even for large metro networks. It provides users with intuitive and easy-to-use route options, simplifying the travel planning process while saving time and money.",
    liveUrl: "https://metro-fawn.vercel.app/",
    githubUrl: "https://github.com/example/socialmediadashboard",
  },
  {
    title: "AI POEM GENERATOR",
    slug: "aipoem",
    category: "WEB APPLICATION",
    description:
      "A fully-featured online shopping experience with advanced product filtering and secure checkout. This project showcases the implementation of a robust e-commerce solution using modern web technologies.",
    fullDescription:
      "This web-based AI poem generator allows users to input a word or set of words, generating a unique poem based on the input. The application then analyzes the emotion of the poem and displays an animated emoji that reflects the mood. With an intuitive interface and seamless functionality, the project showcases the intersection of AI and creative expression, offering an interactive and engaging user experience. The app is deployed for easy access and real-time poem generation.",
    timeline: "OCTOBER 2024 - NOVEMBER 2024",
    images: ["/poem/th.png", "/poem/th2.jpg"],
    technologies: [
      { name: "React", icon: "/tech-icons/react.svg" },
      { name: "Redux", icon: "/tech-icons/redux.svg" },
      { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
    ],
    challenges: [
      "Analyzing the emotional tone of the generated poem accurately.",
      "Ensuring real-time poem generation without performance lags.",
      "Matching the generated poem's emotion with an appropriate animated emoji.",
    ],
    solutions: [
      "Implemented sentiment analysis algorithms to accurately detect emotions in poems.",
      "Optimized backend processes and used caching techniques for faster poem generation.",
      "Developed an emoji classification system that associates emotions with specific poem tones, ensuring the correct emoji is animated.",
    ],
    outcomes:
      "The AI poem generator accurately analyzes emotions from user-input words, delivering poems with real-time generation and seamless performance. It enhances the user experience by matching emotions with animated emojis, making the interaction dynamic and engaging.",
    liveUrl: "https://poem-qk18.vercel.app/",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    title: "PORTFOLIO SHOWCASE",
    slug: "portfolio-showcase",
    category: "WEB APPLICATION",
    description:
      "An elegant and responsive portfolio website for showcasing creative works and professional achievements.",
    fullDescription:
      "This portfolio website showcases my creative works and professional achievements in a visually appealing and user-friendly manner.  It is designed to be responsive and adapt to different screen sizes, ensuring a consistent experience across all devices.",
    timeline: "January 2024 - February 2024",
    images: ["/portfolio/pp.png", "/portfolio/pp2.png"],
    technologies: [
      { name: "HTML", icon: "/tech-icons/html.svg" },
      { name: "CSS", icon: "/tech-icons/css.svg" },
      { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    ],
    challenges: [
      "Creating a visually appealing and user-friendly portfolio that effectively showcases my skills and experience.",
      "Optimizing the website for performance and SEO.",
      "Ensuring the website is accessible to users with disabilities.",
    ],
    solutions: [
      "Used a modern and clean design with high-quality images and animations.",
      "Implemented SEO best practices to improve search engine rankings.",
      "Followed accessibility guidelines to ensure the website is usable by everyone.",
    ],
    outcomes: "Improved user experience and increased visibility of my work.",
    liveUrl: "https://aman-x-code.github.io/Portfolio/",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    title: "KANBAN BOARD",
    slug: "kanban",
    category: "WEB APPLICATION",
    description: "A powerful content management system tailored for bloggers with advanced SEO optimization features.",
    fullDescription:
      "The Kanban Board application is a project management tool designed to help users visually organize and track tasks through customizable columns and cards. It allows users to create, update, and move tasks between stages like \"To Do,\" \"In Progress,\" and \"Completed,\" providing a clear overview of project status. With features like drag-and-drop functionality, task prioritization, and real-time collaboration, the app enhances productivity and streamlines workflow management.",
    timeline: "SEPTEMBER 2024 - OCTOBER 2024",
    images: ["/kanban/ka.png", "/kanban/ka2.png"],
    technologies: [
      { name: "PHP", icon: "/tech-icons/php.svg" },
      { name: "MySQL", icon: "/tech-icons/mysql.svg" },
      { name: "WordPress", icon: "/tech-icons/wordpress.svg" },
      { name: "Yoast SEO", icon: "/tech-icons/yoastseo.svg" },
    ],
    challenges: [
      "Managing real-time collaboration between multiple users on the same board.",
      "Ensuring smooth drag-and-drop functionality for task organization.",
      "Customizing columns and cards for different project needs while maintaining flexibility.",
    ],
    solutions: [
      "Implemented WebSocket-based real-time updates to synchronize changes instantly across users.",
      "Optimized front-end code and used libraries like React DnD for smooth drag-and-drop interactions.",
      "Designed a flexible column and card system that allows users to customize layouts based on their project requirements.",
    ],
    outcomes: "The Kanban Board app enables real-time collaboration with seamless synchronization across users, offering smooth drag-and-drop functionality for efficient task management. It provides a flexible and customizable task management system, catering to various project needs and enhancing productivity.",
    liveUrl: "https://kanban-board-pi-rust.vercel.app/",
    githubUrl: "https://github.com/example/blogcms",
  },
  {
    title: "Digital Twin System for Real-Time Telerehabilitation",
    slug: "digital-twin",
    category: "PATENT & PROTOTYPE",
    description: "A groundbreaking smart home device that revolutionizes energy efficiency and user comfort.",
    fullDescription:
      "This aims to address the growing need for effective and remote rehabilitation solutions. The system leverages IoT-enabled sensors like ESP32 and MPU6050 IMUs to capture real-time motion data of major joints, such as the knee and ankle, during rehabilitation exercises.",
    timeline: "AUGUST 2024 -  FEBRUARY 2025",
    images: ["/imu/leg.jpg", "/imu/arm.jpg", "/imu/g.png"],
    video: "",
    technologies: [
      { name: "Arduino", icon: "/tech-icons/arduino.svg" },
      { name: "ESP32", icon: "/tech-icons/esp32.svg" },
      { name: "Raspberry Pi", icon: "/tech-icons/raspberrypi.svg" },
      { name: "Python", icon: "/tech-icons/python.svg" },
    ],
    challenges: [
      "Lack of real-time monitoring for patient recovery progress.",
      "High dependency on in-person therapy sessions.",
      "Difficulty in accurately tracking joint movement during rehabilitation exercises remotely.",
    ],
    solutions: [
      "Ensuring accurate joint movement tracking with IoT sensors.",
      "Managing and analyzing large volumes of real-time data.",
      "Providing real-time feedback to patients and therapists.",
    ],
    outcomes: " This innovation bridges the gap between traditional rehabilitation and modern IoT technologies, paving the way for scalable and efficient remote healthcare solutions.",
    liveUrl: "https://innovgadget.example.com",
    githubUrl: "https://github.com/example/innovgadget",
  },
  {
    title: "Smart Glove for Translating Sign Language into Text and Enabling Home Automation Control",
    slug: "smart-home-system",
    category: "PATENT & PROTOTYPE",
    description: "An integrated system that seamlessly connects and controls all aspects of a modern smart home.",
    fullDescription:
      "The global mute community faces significant communication barriers due to the limited understanding of sign language among the general population. This project aims to bridge this gap by developing a smart glove that translates sign language into text, making communication more accessible for mute individuals. Built on an embedded system, the device also integrates non-gesture sensors to enable home automation, allowing users to control appliances such as lights and fans. ",
    timeline: "FEBRUARY 2025",
    images: ["/hand/image.png", "/hand/ff.jpg", "/hand/dd .png"],
    technologies: [
      { name: "Home Assistant", icon: "/tech-icons/homeassistant.svg" },
      { name: "Node-RED", icon: "/tech-icons/nodered.svg" },
      { name: "MQTT", icon: "/tech-icons/mqtt.svg" },
      { name: "Zigbee", icon: "/tech-icons/zigbee.svg" },
    ],
    challenges: [
      "The problem statement for developing a glove that translates sign language into text and speech",
      "limited interaction and misunderstanding in various social and professional settings.",
      "Community in daily life, education, and employment opportunities. ",
    ],
    solutions: [
      "By leveraging technology for accessibility and inclusion, this project contributes to a more connected and equitable society.",
      "Implemented standardized communication protocols for seamless integration.",
      "Developed comprehensive monitoring and error handling mechanisms.",
    ],
    outcomes: "Developed a robust and scalable smart home system that improves home automation and energy efficiency.",
    liveUrl: "https://smarthome.example.com",
    githubUrl: "https://github.com/example/smarthome",
  },
]

export default function ProjectShowcase() {
  const params = useParams()
  const router = useRouter()
  const { darkMode } = useDarkMode()
  const [project, setProject] = useState<(typeof projects)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === params.slug)
    if (foundProject) {
      setProject(foundProject)
      setIsLoading(false)
    } else {
      router.push("/404")
    }
  }, [params.slug, router])

  if (isLoading) return null
  if (!project) return null

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl mb-8">{project.category}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-4">{project.fullDescription}</p>
            <p className="mb-4">
              <strong>Timeline:</strong> {project.timeline}
            </p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">Challenges</h3>
            <ul className="list-disc list-inside mb-4">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Solutions</h3>
            <ul className="list-disc list-inside mb-4">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
            <p>{project.outcomes}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            {project.video && (
              <div className="mt-4 relative aspect-video">
                <iframe
                  src={project.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold transition-colors ${
              darkMode ? "bg-white/20 hover:bg-white/30 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            View Live Demo
            <ExternalLink className="ml-2" size={20} />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold transition-colors ${
              darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            View on GitHub
            <Github className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

