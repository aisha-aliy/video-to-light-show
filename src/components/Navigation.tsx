import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">P</span>
            <span>Paychipa</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            Products <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            Company <ChevronDown className="h-4 w-4" />
          </button>
          <ThemeToggle />
          <Button className="rounded-full bg-primary hover:bg-primary/90">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}
