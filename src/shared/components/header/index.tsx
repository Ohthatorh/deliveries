import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.webp";
import { Heart } from "../icons";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <Link className="block max-w-[140px]" href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <Link
          className="text-grey hover:text-white transition-colors"
          href="/favorites/"
        >
          <Heart fill />
        </Link>
      </div>
    </header>
  );
};

export default Header;
