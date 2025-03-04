import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-slate-400" />
                <span>zewgenebiyu@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-slate-400" />
                <span>+251966600710</span>
              </li>
              <li className="flex items-center gap-2 align-top">
                <MapPin size={18} className="text-slate-400 mt-1 flex-shrink-0" />
                <span>
                  Tulu Dimtu
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <Link
                to="https://github.com/nebaw-21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                to="https://t.me/nebaw_21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                <FaTelegram size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nebiyu-zewge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="https://www.instagram.com/nebiyu_zewge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Newsletter or Additional Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-slate-300">
              i provide high-quality services to my clients. Feel free to reach out to me for any inquiries.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-2 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} @nebaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

