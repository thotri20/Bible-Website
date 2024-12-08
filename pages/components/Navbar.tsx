"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../components/MobileMenu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Bible",
    href: "/bible",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
          <span className="text-blue-500">Adiam</span> Yonas Gidey 
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenu key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname === item.href} className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>

                </Link>
              </NavigationMenu>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center md:col-span-3 justify-end col-span-6">
        <Button className="hidden sm:flex" asChild>
          <a href="mailto:adiamyonas12@gmail.com">Contact the Developer</a>
        </Button>
        <div className="sm:hidden, md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;