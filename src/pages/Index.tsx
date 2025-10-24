import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  CreditCard, 
  PiggyBank, 
  Receipt, 
  CheckCircle2, 
  Briefcase,
  Smartphone,
  TrendingUp,
  Shield,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Apple,
  Star,
  Check
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="rounded-full border-primary/20">
              <Zap className="h-3 w-3 mr-1" />
              Now Available in Nigeria
            </Badge>
            
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Banking for <br />
                <span className="text-primary">Everyone</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Send money, pay bills, save & invest with our all-in-one payment platform built for Nigerians.
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                App Coming Soon
              </Button>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/60 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-8 left-8 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-xs text-white/80">Transfer Successful</div>
                <div className="text-2xl font-bold text-white">₦50,000</div>
              </div>
              <div className="h-96 flex items-end justify-center">
                <div className="w-64 h-80 bg-background/10 backdrop-blur-sm rounded-2xl" />
              </div>
              <div className="absolute bottom-8 right-8 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-xs text-white/80">Monthly Savings</div>
                <div className="text-xl font-bold text-white">₦2.5M</div>
                <div className="text-xs text-success">+16% this month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">Free</div>
            <div className="text-sm text-muted-foreground">POS Terminals</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Setup Fees</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Instant</div>
            <div className="text-sm text-muted-foreground">Account Opening</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          Powered by <span className="text-primary font-medium">Stripe and Flutterwave</span>
        </div>
      </section>

      {/* All-in-One Platform Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4">All-in-One Platform</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything you need, <span className="text-primary">one app</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From everyday payments to business growth, Paychipa has you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Transfers</h3>
            <p className="text-muted-foreground">
              Send money to any bank in Nigeria instantly at zero cost.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Virtual & Physical Cards</h3>
            <p className="text-muted-foreground">
              Get instant virtual cards and physical debit cards for all your payments.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <PiggyBank className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Savings</h3>
            <p className="text-muted-foreground">
              Automated savings with up to 15% annual interest. Reach your goals faster.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Receipt className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bill Payments</h3>
            <p className="text-muted-foreground">
              Pay for airtime, data, electricity, cable TV, and more in seconds.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">X & Meta Verification</h3>
            <p className="text-muted-foreground">
              Get verified on X (Twitter) Blue and Meta platforms directly from the app.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Tools</h3>
            <p className="text-muted-foreground">
              Accept payments, manage inventory, and track sales with ease.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">POS Terminals</h3>
            <p className="text-muted-foreground">
              Get POS machines for your business with instant settlement.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Loans & Credit</h3>
            <p className="text-muted-foreground">
              Access instant loans up to ₦5M with flexible repayment options.
            </p>
          </Card>

          <Card className="p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Protected</h3>
            <p className="text-muted-foreground">
              Advanced security measures to keep your transactions and data safe.
            </p>
          </Card>
        </div>
      </section>

      {/* POS Terminals Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-secondary rounded-3xl p-12 aspect-square flex items-center justify-center">
              <div className="text-center text-muted-foreground">POS Terminal Image</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="outline" className="rounded-full">For Businesses</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Accept payments anywhere with our POS terminals
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a free POS machine and start accepting card payments from your customers. Instant settlement directly to your account.
            </p>

            <div className="space-y-3">
              {[
                "Free POS terminal with zero setup cost",
                "Accept all card types - Mastercard, Visa, Verve",
                "Instant settlement to your bank account",
                "24/7 customer support and maintenance",
                "Real-time sales tracking on your phone",
                "Multiple terminals for multiple locations"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Learn More About POS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Cards Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full">Smart Cards</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Physical & virtual cards for all your needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant virtual cards for online shopping and physical debit cards delivered to your doorstep. Shop online and offline with ease.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Virtual Cards</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant virtual cards for online payments. Create multiple cards for different purposes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Created instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Dollar & Naira cards
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Freeze/unfreeze anytime
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2">Physical Cards</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mastercard debit cards delivered to you. Use at ATMs and POS terminals nationwide.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Free delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Contactless payments
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    Worldwide acceptance
                  </li>
                </ul>
              </Card>
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Explore Cards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <div className="text-center text-muted-foreground">Card Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Banking Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="rounded-full">Personal Banking</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Send money, pay bills, save & invest
            </h2>
            <p className="text-lg text-muted-foreground">
              Open a free account in minutes. No paperwork, no minimum balance. Just simple, fast banking.
            </p>

            <div className="space-y-3">
              {[
                "Free transfers to all banks in Nigeria",
                "Automated savings with 15% interest",
                "Pay bills - airtime, data, electricity, cable",
                "Request and send money with ease",
                "Instant loans up to ₦5M",
                "Investment options with high returns"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Discover Personal Banking
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="bg-secondary rounded-3xl p-12 aspect-square flex items-center justify-center">
              <div className="text-center text-muted-foreground">Personal Banking Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Escrow Protection Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl p-12 aspect-square flex items-center justify-center relative">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Secure Escrow</h3>
                  <p className="text-sm text-muted-foreground">Your protection guarantee</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground">Protected</div>
                  </div>
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold">Fast</div>
                    <div className="text-xs text-muted-foreground">Release</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="outline" className="rounded-full">Secure Transactions</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Trade with confidence using Escrow protection
            </h2>
            <p className="text-lg text-muted-foreground">
              Buy and sell safely online. Your money is held securely until both buyer and seller are satisfied. Perfect for marketplace transactions and high-value purchases.
            </p>

            <div className="space-y-3">
              {[
                "100% buyer & seller protection",
                "Secure payment holding",
                "Expert dispute resolution",
                "Perfect for online marketplaces",
                "Instant release after confirmation",
                "Verified user transactions"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Learn About Escrow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4">Why Paychipa?</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Built for Nigerians</h2>
          <p className="text-lg text-muted-foreground">
            Banking should be simple, fast, and accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Free POS terminals that actually work, instant settlement, and zero fees. Finally, a payment solution designed for Nigerian businesses."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary" />
              <div>
                <div className="font-semibold">Small Business Owners</div>
                <div className="text-sm text-muted-foreground">Retail & Services</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Virtual cards for online payments, instant transfers, and bill payments all in one app. Everything we need to run our businesses smoothly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary" />
              <div>
                <div className="font-semibold">Freelancers & Creatives</div>
                <div className="text-sm text-muted-foreground">Digital Entrepreneurs</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6">
              "Smart savings, automated transfers, and easy bill payments. Banking that actually makes our lives easier, not harder."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary" />
              <div>
                <div className="font-semibold">Everyday Nigerians</div>
                <div className="text-sm text-muted-foreground">Personal Banking</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-card border border-border rounded-3xl p-12 text-center">
          <Badge variant="outline" className="rounded-full mb-6">
            <span className="mr-1">🚀</span> Launching Soon
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're putting the finishing touches on Paychipa. Join the waitlist to be the first to know when we launch.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" variant="outline" className="rounded-full">
              <Apple className="mr-2 h-5 w-5" />
              Coming to App Store
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <Smartphone className="mr-2 h-5 w-5" />
              Coming to Google Play
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Instant transfers and settlements. Money moves at the speed of light.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-bold mb-2">100% Secure</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security measures to keep your transactions and data safe.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-bold mb-2">Free Everything</h3>
              <p className="text-sm text-muted-foreground">
                Free cards, free POS, zero setup fees. Banking without the burden.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Stay updated on our launch</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow us @paychipa on social media for exclusive updates, tips, and launch announcements
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>

            <Badge variant="outline" className="rounded-full">
              <span className="mr-1">⏰</span> Expected Launch: 2026
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <span className="text-primary">P</span>
                <span>Paychipa</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Making payments simple and accessible for everyone in Nigeria. Bank smarter with Paychipa.
              </p>
              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Instagram className="h-4 w-4" />
                </button>
                <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Personal Account</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business Account</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">POS Terminals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cards</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Savings</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Loans</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Escrow</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>hello@paychipa.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+234 901 234 5678</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Abuja, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 Paychipa. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
