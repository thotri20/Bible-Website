"use client";
 
import Link from "next/link";
import { Menu } from "lucide-react";
 
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
 
import { navigationItems } from "../components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
 
export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    setOpen(false)
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          {navigationItems.map((item, index) => (
            <Link key={index} href={item.href} className={cn(
              pathname === item.href
              ? 'bg-muted'
              : 'hover:bg-muted hover:bg-opacity75', 'group flex items-center px-2 py-2 text-md font-semibold rounded-md'
            )}>
              {item.name}
            </Link>
          ))}
        </div>
 
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu;