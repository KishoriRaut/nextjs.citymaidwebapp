export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 bg-gray-50 border-t mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        <div>
          &copy; {new Date().getFullYear()} City Maid Services. All rights reserved.
        </div>
        <div className="flex gap-4 justify-center text-sm">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
