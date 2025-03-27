import { Linkedin} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200">
      <div className="flex justify-center gap-4 mb-4 ">
        <a
          href="https://linkedin.com/in/francesco-balestra-a0571a162"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#718096] hover:text-[#A0D1F6] transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
      
      <div className="mt-4 text-sm">
  <a href="/privacy" className="text-[#A0D1F6] hover:underline">
    Informativa privacy
  </a>
</div>



    </footer>
  )
} 