import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Users, CheckCircle2, Clock, ArrowRight, Check, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Escrow = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20">
            <Shield className="h-3 w-3 mr-1" />
            Secure Escrow
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Trade with <span className="text-primary text-glow">complete protection</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered escrow protection for all your transactions. Buy and sell with confidence knowing your money is secure until delivery is confirmed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" onClick={() => setWaitlistOpen(true)} className="rounded-full gradient-primary-pink hover:opacity-90 button-glow">
              Create Escrow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How escrow <span className="text-primary text-glow">works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { num: "1", title: "Create Escrow", desc: "Buyer creates transaction and deposits funds" },
            { num: "2", title: "Seller Delivers", desc: "Seller ships product or delivers service" },
            { num: "3", title: "Buyer Confirms", desc: "Buyer verifies and approves delivery" },
            { num: "4", title: "Funds Released", desc: "Money automatically released to seller" }
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="p-8 sm:p-12 text-center gradient-primary-pink">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Start using escrow protection</h2>
          <Button size="lg" onClick={() => setWaitlistOpen(true)} variant="secondary" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </section>

      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Paychipa Logo" className="w-8 h-8" />
                <span className="text-lg font-bold">Paychipa</span>
              </div>
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

export default Escrow;
