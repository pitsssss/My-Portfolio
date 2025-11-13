export default function Footer() {
  return (
    <footer className="py-5 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
        <p className="pl-2">
          &copy; {new Date().getFullYear()} Peter Toss. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
