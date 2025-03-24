import { Linkedin} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200">
      <div className="flex justify-center gap-4 mb-4 ">
        <a
          href="https://www.linkedin.com/in/francesco-balestra-07010a2b1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <div>
       
      </div>
    </footer>
  )
} 