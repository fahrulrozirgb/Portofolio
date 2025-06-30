import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "Rozi_12345", // Service ID kamu
        "template_beqeftj", // Template ID kamu
        form.current,
        "O9FneUiXsIpfoBwwT" // Public Key kamu
      )
      .then(
        () => {
          toast({
            title: "Pesan terkirim!",
            description: "Terima kasih, saya akan segera membalasnya.",
          });
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Gagal mengirim pesan",
            description: "Silakan coba lagi nanti.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi
          saya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:Rozi@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Rozi@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+62345678910"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62345678910
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Jl Srigunting Sunggal Kanan
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Nama Kamu"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, saya ingin menyampaikan..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
