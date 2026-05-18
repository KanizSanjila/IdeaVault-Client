import Link from 'next/link';
// import { Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMessageCircleFilled } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <span className="text-3xl font-bold tracking-tight">IdeaVault</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Securely share, refine, and launch your startup ideas.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/ideas" className="hover:text-white transition">Browse Ideas</Link></li>
              <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
              <li><Link href="/vaultmind" className="hover:text-white transition">VaultMind AI</Link></li>
              <li><Link href="/new-idea" className="hover:text-white transition">Create Idea</Link></li>
              <li><Link href="/my-vault" className="hover:text-white transition">My Vault</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-white font-semibold mb-4">Discover</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/trending" className="hover:text-white transition">Trending Ideas</Link></li>
              <li><Link href="/launches" className="hover:text-white transition">Latest Launches</Link></li>
              <li><Link href="/co-founders" className="hover:text-white transition">Co-Founder Matching</Link></li>
              <li><Link href="/investors" className="hover:text-white transition">Investor Opportunities</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition">Success Stories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/enterprise" className="hover:text-white transition">For Enterprises</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="/guidelines" className="hover:text-white transition">Community Guidelines</Link></li>
              <li><Link href="/feedback" className="hover:text-white transition">Send Feedback</Link></li>
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/ip-protection" className="hover:text-white transition">IP Protection</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          
          <div className="text-zinc-500">
            © 2026 IdeaVault, Inc. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://x.com" target="_blank" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaInstagramSquare />

            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <TbMessageCircleFilled />
            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>

          {/* Contact */}
          <div>
            <a 
              href="kanizsm13@gmail.com" 
              className="text-zinc-500 hover:text-white transition"
            >
            kanizsm13@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}