const Footer = () => {  
  return (
    <footer className="relative py-12 border-t border-white/20 bg-linear-to-br from-primary-clr/95 to-[#2d8b51]/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/70 text-sm">
            <div>&copy; {new Date().getFullYear()} CropGuards. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;