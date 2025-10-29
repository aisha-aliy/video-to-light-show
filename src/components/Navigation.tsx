import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "./WaitlistDialog";
import logo from "@/assets/logo.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <img src={logo} alt="Paychipa Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>Paychipa</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            Products <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            Company <ChevronDown className="h-4 w-4" />
          </button>
          <ThemeToggle />
          <Button 
            onClick={() => setWaitlistOpen(true)}
            className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button className="w-full flex items-center justify-between text-sm font-medium hover:text-primary transition-colors py-2">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between text-sm font-medium hover:text-primary transition-colors py-2">
              Company <ChevronDown className="h-4 w-4" />
            </button>
            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </nav>
  );
}
