"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Twitter, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { contactSchema, ContactFormData } from "@/lib/schemas";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get a free key at web3forms.com (delivers straight to your email)
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Reeyansh Tech Solutions Website",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        // Trigger celebratory confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#3b82f6", "#6366f1", "#a855f7"],
        });
      } else {
        alert("Failed to submit contact request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-slate-950 py-16 md:py-24 overflow-hidden">
      
      {/* Background glowing gradients */}
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Get In Touch</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3">
              Let's Discuss Your Project
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              Have a software requirement or a pipeline migration challenge? Fill out the contact form below to start a consultation.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <ScrollReveal direction="left" className="h-full flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="font-outfit text-2xl font-bold text-white">Contact Information</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Connect directly with our architects via phone or email, or drop by our technology center in Hyderabad.
                </p>

                <ul className="space-y-6 pt-4 text-sm text-slate-355">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5 animate-pulse">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Our Technology Center</h4>
                      <p className="leading-relaxed">604, Pallavi, Kalyan Nilayam, IDA Jeedimetla, Subhash Nagar, Jeedimetla, Hyderabad, Telangana 500085</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="leading-relaxed hover:text-white transition-colors duration-200">
                        <a href="tel:+919666848983">+91 96668 48983</a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="leading-relaxed hover:text-white transition-colors duration-200">
                        <a href="mailto:info@reeyanshtech.com">info@reeyanshtech.com</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-900/60">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <Card className="p-6 sm:p-10 border-slate-900 bg-slate-950/40" glowColor="blue">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Your Name"
                        placeholder="John Doe"
                        error={errors.name?.message}
                        {...register("name")}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>

                    <Input
                      label="Subject"
                      placeholder="e.g. App Development Proposal"
                      error={errors.subject?.message}
                      {...register("subject")}
                    />

                    <Textarea
                      label="Your Message"
                      placeholder="Detail your requirements or infrastructure scaling problems..."
                      error={errors.message?.message}
                      {...register("message")}
                    />

                    <Button type="submit" size="lg" className="w-full gap-2" isLoading={isSubmitting}>
                      Send Message
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="h-8 w-8 animate-bounce" />
                    </div>
                    <h3 className="font-outfit text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-slate-450 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Reeyansh Tech Solutions. A technical account director will reply to your request at the email provided within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          </div>

        </div>

        {/* Google Maps Embed */}
        <ScrollReveal direction="up" className="w-full">
          <div className="rounded-3xl border border-slate-900 overflow-hidden h-[350px] md:h-[450px] shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9255745778846!2d77.59202537575239!3d12.976593914757134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672c10b2a8d%3A0x6e2df40cbdf08efd!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716912384218!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reeyansh Tech Solutions Office Location Map"
              className="grayscale invert contrast-[95%] brightness-[90%]"
            />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
