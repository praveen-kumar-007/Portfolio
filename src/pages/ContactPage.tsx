import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:praveen.pr105@gmail.com?subject=${encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Email client opened!",
        description: "Please send the email from your email client.",
      });
    }, 1000);
  };

  return (
    <Layout>
      <PageHeader
        badge="Get in Touch"
        title="Contact Me"
        description="Have a project in mind or want to collaborate? I'd love to hear from you!"
      />

      {/* Quick Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", value: "praveen.pr105@gmail.com", href: "mailto:praveen.pr105@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9504904499", href: "tel:+919504904499" },
              { icon: MapPin, label: "Location", value: "Dhanbad, India", href: null },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="block">
                    <GlowCard className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </GlowCard>
                  </a>
                ) : (
                  <GlowCard className="text-center" hoverEffect={false}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </GlowCard>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to take on new challenges and collaborate on interesting projects. 
                  Whether you have a job opportunity, a project idea, or just want to connect, 
                  feel free to reach out!
                </p>
              </div>

              {/* What I'm Looking For */}
              <GlowCard hoverEffect={false}>
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  What I'm Looking For
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full-time ML/AI Engineer positions",
                    "Full Stack Development opportunities",
                    "Research collaborations in AI/ML",
                    "Freelance projects",
                    "Open source collaborations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>

              {/* Availability */}
              <GlowCard hoverEffect={false}>
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Availability
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-primary font-medium">Current Status:</span> Open to opportunities
                  </p>
                  <p>
                    <span className="text-primary font-medium">Response Time:</span> Usually within 24-48 hours
                  </p>
                  <p>
                    <span className="text-primary font-medium">Timezone:</span> IST (UTC+5:30)
                  </p>
                </div>
              </GlowCard>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/praveen-kumar-307697221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/praveen-kumar-007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/20 text-foreground hover:bg-foreground/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlowCard hoverEffect={false}>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      placeholder="Job Opportunity / Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground resize-none"
                      placeholder="Hello Praveen, I'd like to discuss..."
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Opening email...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Final CTA */}
      <section className="py-20 neural-grid">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Based in <span className="text-gradient">Dhanbad, India</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Open to remote opportunities worldwide and relocation for the right role. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:praveen.pr105@gmail.com" className="btn-primary inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Me Directly
              </a>
              <a href="tel:+919504904499" className="btn-outline inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
