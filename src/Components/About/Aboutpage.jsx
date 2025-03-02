import { Github, Linkedin, Mail, Twitter, Code, Server, Database, Globe } from "lucide-react";
import { skills, experiences } from "./data";
import { motion } from "framer-motion";
import AboutMeSection from "./AboutMeSection";
import Skill from "./Skill";
import Experiance from "./Experiance";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto max-w-6xl py-6 px-0">
        
        {/* About Section */}

<AboutMeSection />

        {/* Skills Section */}

<Skill />

        {/* Experience Section */}
<Experiance />

      </main>
    </div>
  );
}
