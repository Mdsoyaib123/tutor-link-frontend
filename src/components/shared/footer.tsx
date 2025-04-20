import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-50 border-t border-blue-100 mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">TutorLink 🎓</h3>
            <p>Connecting students with verified tutors for academic success.</p>
          </div>
  
          {/* Explore */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Explore</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/browse-tutors" className="hover:text-blue-600">Browse Tutors</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
  
          {/* For Users */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">For Users</h4>
            <ul className="space-y-1">
              <li><Link href="/login" className="hover:text-blue-600">Login</Link></li>
              <li><Link href="/register" className="hover:text-blue-600">Register</Link></li>
              <li><Link href="/dashboard/student" className="hover:text-blue-600">Student Dashboard</Link></li>
              <li><Link href="/dashboard/tutor" className="hover:text-blue-600">Tutor Dashboard</Link></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Contact</h4>
            <p>Email: support@tutorlink.com</p>
            <p>Phone: +880-1234-567890</p>
            <p>Dhaka, Bangladesh 🇧🇩</p>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="border-t border-blue-100 text-center text-xs py-4 text-gray-500">
          © {new Date().getFullYear()} TutorLink. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;