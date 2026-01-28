import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface HeaderNavProps {
  items: NavItem[];
  isScrolled: boolean;
  onItemClick?: () => void;
  isMobile?: boolean;
}

const HeaderNav = ({ items, isScrolled, onItemClick, isMobile = false }: HeaderNavProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    if (!isMobile) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const handleClick = (label: string, hasChildren: boolean) => {
    if (isMobile && hasChildren) {
      setOpenDropdown(openDropdown === label ? null : label);
    } else if (!hasChildren) {
      onItemClick?.();
    }
  };

  const isAnchorLink = (href: string) => href.startsWith("#");

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (isAnchorLink(href)) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      onItemClick?.();
    }
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-1 py-4">
        {items.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => handleClick(item.label, true)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={onItemClick}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/30 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : isAnchorLink(item.href) ? (
              <a
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                onClick={onItemClick}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-1">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children ? (
            <>
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isScrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-accent/50"
                    : "text-white hover:text-white/80 hover:bg-white/10"
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openDropdown === item.label && "rotate-180"
                  )}
                />
              </button>
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onItemClick}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : isAnchorLink(item.href) ? (
            <a
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isScrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-accent/50"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              )}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href}
              onClick={onItemClick}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isScrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-accent/50"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderNav;
