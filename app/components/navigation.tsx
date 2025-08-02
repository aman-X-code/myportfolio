import Link from "next/link"
import { Home, User, Briefcase, Mail, Code, Video, CuboidIcon as Cube } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="space-y-4">
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Home className="h-4 w-4" />
        HOME
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <User className="h-4 w-4" />
        ABOUT ME
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Code className="h-4 w-4" />
        DEVELOPMENT
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Video className="h-4 w-4" />
        VIDEO EDITING
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Cube className="h-4 w-4" />
        3D ANIMATION
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Briefcase className="h-4 w-4" />
        PROJECTS
      </Link>
      <Link 
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-4 w-4" />
        CONTACT
      </Link>
    </nav>
  )
}

