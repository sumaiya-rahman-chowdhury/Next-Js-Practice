import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-yellow-400">
            MyWebsite
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/static" className="hover:text-yellow-400">
            Static
          </Link>
          <Link href="/dynamic" className="hover:text-yellow-400">
            Dynamic
          </Link>
          <Link href="/hybrid" className="hover:text-yellow-400">
            Hybrid
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
