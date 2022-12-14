import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdAddchart,
  MdContentPaste,
  MdHome,
  MdMenuBook,
  MdOutlinePersonOutline,
} from "react-icons/md";

function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav className="block fixed inset-x-0 bottom-0 z-10 text-gray-500 px-2">
      <div
        className="flex justify-between bg-white rounded-t-3xl px-6 py-4"
        style={{
          boxShadow:
            "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      >
        <Link legacyBehavior href="/admin">
          <a
            className={`focus:text-secondary hover:text-secondary flex flex-col justify-between items-center ${
              pathname === "/admin" ? "text-secondary" : ""
            }`}
          >
            <span className="text-3xl">
              <MdHome />
            </span>
            <span className="block text-sm">Beranda</span>
          </a>
        </Link>
        <Link legacyBehavior href="/admin/pesanan">
          <a
            className={`focus:text-secondary hover:text-secondary flex flex-col justify-between items-center ${
              pathname.startsWith("/admin/pesanan") ? "text-secondary" : ""
            }`}
          >
            <span className="text-3xl">
              <MdContentPaste />
            </span>
            <span className="block text-sm">Pesanan</span>
          </a>
        </Link>
        <Link legacyBehavior href="/admin/menu">
          <a
            className={`focus:text-secondary hover:text-secondary flex flex-col justify-between items-center ${
              pathname.startsWith("/admin/menu") ? "text-secondary" : ""
            }`}
          >
            <span className="text-3xl">
              <MdMenuBook />
            </span>
            <span className="block text-sm">Menu</span>
          </a>
        </Link>
        <Link legacyBehavior href="/admin/topping">
          <a
            className={`focus:text-secondary hover:text-secondary flex flex-col justify-between items-center ${
              pathname.startsWith("/admin/profile") ? "text-secondary" : ""
            }`}
          >
            <span className="text-3xl">
              <MdAddchart />
            </span>
            <span className="block text-sm">Topping</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
