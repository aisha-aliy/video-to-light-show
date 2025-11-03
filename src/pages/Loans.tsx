import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Check,
  DollarSign,
  Calculator,
  FileText,
  Users,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Loans = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            Quick Loans
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Get instant loans up to <span className="text-primary text-glow">₦5,000,000</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fast approval, competitive rates, and flexible repayment options. Borrow responsibly and grow your business or meet personal needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setWaitlistOpen(true)}
              className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Apply for Loan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Check Eligibility
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">5 mins</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Approval Time</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">₦5M</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Maximum Amount</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">3-12</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Months Term</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary">3%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Starting Rate</div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Loan Options</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Flexible loans for <span className="text-primary text-glow">every need</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Personal Loans</h3>
            <p className="text-muted-foreground mb-6">
              Quick personal loans for emergencies, bills, or personal projects.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Up to ₦500,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">3-6 months repayment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">3% monthly interest</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">No collateral required</span>
              </div>
            </div>

            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full"
              variant="outline"
            >
              Apply Now
            </Button>
          </Card>

          <Card className="p-8 hover:border-primary transition-colors border-primary scale-105">
            <Badge className="mb-4 gradient-primary-pink text-white border-0">Most Popular</Badge>
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Business Loans</h3>
            <p className="text-muted-foreground mb-6">
              Grow your business with flexible business financing options.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Up to ₦5,000,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">6-12 months repayment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">2.5% monthly interest</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Working capital support</span>
              </div>
            </div>

            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full gradient-primary-pink"
            >
              Apply Now
            </Button>
          </Card>

          <Card className="p-8 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Salary Advance</h3>
            <p className="text-muted-foreground mb-6">
              Get your salary early when you need it most. Repay automatically.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Up to ₦200,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">30 days repayment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">2% monthly interest</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Instant disbursement</span>
              </div>
            </div>

            <Button 
              onClick={() => setWaitlistOpen(true)}
              className="w-full rounded-full"
              variant="outline"
            >
              Apply Now
            </Button>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Simple Process</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get funded in <span className="text-primary text-glow">3 easy steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Apply Online</h3>
            <p className="text-muted-foreground">
              Fill out a simple application form with your loan details and purpose.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Get Approved</h3>
            <p className="text-muted-foreground">
              Instant credit check and approval decision within 5 minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Receive Funds</h3>
            <p className="text-muted-foreground">
              Money is disbursed directly to your account instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="rounded-full mb-4">Eligibility</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple <span className="text-primary text-glow">requirements</span>
            </h2>
          </div>

          <Card className="p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4">Personal Loans</h3>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Age 18-60 years</p>
                    <p className="text-sm text-muted-foreground">Must be of legal age</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Valid BVN</p>
                    <p className="text-sm text-muted-foreground">Bank Verification Number required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Active Bank Account</p>
                    <p className="text-sm text-muted-foreground">Minimum 3 months history</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4">Business Loans</h3>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Registered Business</p>
                    <p className="text-sm text-muted-foreground">CAC registration or business name</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">6 Months Trading</p>
                    <p className="text-sm text-muted-foreground">Minimum business operation period</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Business Documents</p>
                    <p className="text-sm text-muted-foreground">Bank statements, business plan</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to get funded?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Apply for a loan today and get instant approval. Fast, simple, and reliable.
          </p>
          <Button 
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            variant="secondary"
            className="rounded-full"
          >
            Apply for Loan <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Paychipa Logo" className="w-8 h-8" />
                <span className="text-lg font-bold">Paychipa</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Next-generation fintech platform for Africa.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-sm">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/personal-account" className="hover:text-primary transition-colors">Personal Account</a></li>
                <li><a href="/business-account" className="hover:text-primary transition-colors">Business Account</a></li>
                <li><a href="/pos-terminals" className="hover:text-primary transition-colors">POS Terminals</a></li>
                <li><a href="/cards" className="hover:text-primary transition-colors">Cards</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/press" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-sm">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/help-center" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 Paychipa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Loans;
