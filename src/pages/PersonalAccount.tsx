import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  CreditCard, 
  PiggyBank, 
  Receipt, 
  Shield,
  ArrowRight,
  Check,
  Smartphone,
  TrendingUp,
  Bell,
  Users,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const PersonalAccount = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Personal Banking
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Banking made <span className="text-primary text-glow">simple</span> for you
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Open a free personal account in minutes. Send money, pay bills, save, and invest—all from one simple app.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setWaitlistOpen(true)}
              className="rounded-full gradient-primary-pink hover:opacity-90 button-glow"
            >
              Open Free Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">₦0</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Account Opening</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">₦0</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Monthly Fees</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Instant</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Transfers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">15%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Savings Interest</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Account Features</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need in <span className="text-primary text-glow">one account</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Transfers</h3>
            <p className="text-muted-foreground">
              Send money to any Nigerian bank account instantly with zero charges. No hidden fees.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Virtual Cards</h3>
            <p className="text-muted-foreground">
              Get instant virtual cards for online shopping. Create multiple cards for different purposes.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <PiggyBank className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Savings</h3>
            <p className="text-muted-foreground">
              Automated savings with up to 15% annual interest. Set goals and watch your money grow.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Receipt className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bill Payments</h3>
            <p className="text-muted-foreground">
              Pay for airtime, data, electricity, cable TV, and more. All in one place.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
            <p className="text-muted-foreground">
              Access your account from anywhere. iOS and Android apps with biometric security.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
            <p className="text-muted-foreground">
              Your money and data are protected with advanced encryption and fraud detection.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Investment Options</h3>
            <p className="text-muted-foreground">
              Access mutual funds, treasury bills, and other investment products directly from your app.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Alerts</h3>
            <p className="text-muted-foreground">
              Get instant notifications for all your transactions. Stay in control of your finances.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our support team is always here to help. Chat, call, or email anytime.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-secondary/5 rounded-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Simple Onboarding</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Open your account in <span className="text-primary text-glow">3 easy steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Download App</h3>
            <p className="text-muted-foreground">
              Download Paychipa from the App Store or Google Play Store.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Verify Identity</h3>
            <p className="text-muted-foreground">
              Provide your BVN and basic information for quick verification.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Start Banking</h3>
            <p className="text-muted-foreground">
              Your account is ready! Start sending money and enjoying all features.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Join thousands of Nigerians who trust Paychipa for their daily banking needs.
          </p>
          <Button 
            size="lg"
            onClick={() => setWaitlistOpen(true)}
            variant="secondary"
            className="rounded-full"
          >
            Open Free Account <ArrowRight className="ml-2 h-4 w-4" />
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

export default PersonalAccount;
