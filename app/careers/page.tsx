"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, ChevronUp, Upload, CheckCircle2, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { jobOpeningsData, JobOpening } from "@/lib/data";
import { applySchema, ApplyFormData } from "@/lib/schemas";

export default function Careers() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [activeApplyJob, setActiveApplyJob] = useState<JobOpening | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleExpandJob = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      jobId: "",
      name: "",
      email: "",
      phone: "",
      experience: "",
      portfolioUrl: "",
      coverLetter: "",
      resumeName: "",
    },
  });

  const resumeName = watch("resumeName");

  const openApplyModal = (job: JobOpening) => {
    setActiveApplyJob(job);
    setValue("jobId", job.id);
    setIsSubmitted(false);
  };

  const closeApplyModal = () => {
    setActiveApplyJob(null);
    reset();
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("resumeName", file.name, { shouldValidate: true });
    }
  };

  const onFormSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Shoot premium confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#3b82f6", "#6366f1", "#a855f7"],
        });
      } else {
        alert("Failed to submit application. Please try again.");
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
      
      {/* Background radial glows */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Join Reeyansh</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3">
              Careers at Reeyansh
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              We are constantly seeking brilliant React architects, Flutter experts, UI/UX designers, and DevOps engineers. Join a tech-first remote workspace.
            </p>
          </ScrollReveal>
        </div>

        {/* Job Listings List */}
        <div className="space-y-6">
          {jobOpeningsData.map((job, index) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <ScrollReveal key={job.id} direction="up" delay={index * 0.1}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-slate-950/40 backdrop-blur-xl
                    ${isExpanded ? "border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.1)]" : "border-slate-900 hover:border-slate-800"}`}
                >
                  {/* Job Header Row (Click to toggle) */}
                  <div
                    onClick={() => toggleExpandJob(job.id)}
                    className="p-6 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <h3 className="font-outfit text-xl font-bold text-white group-hover:text-indigo-400">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content (Framer Motion height animation) */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-900/60 pt-6 space-y-6">
                      
                      {/* Description */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">About the Role</h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{job.description}</p>
                      </div>

                      {/* Split list: Requirements & Responsibilities */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Requirements</h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            {job.requirements.map(req => (
                              <li key={req} className="flex gap-2">
                                <span className="text-indigo-400 font-bold">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Responsibilities</h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            {job.responsibilities.map(resp => (
                              <li key={resp} className="flex gap-2">
                                <span className="text-purple-400 font-bold">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Salary & CTA Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-900/60 pt-6">
                        <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                          <DollarSign className="h-4.5 w-4.5 text-emerald-400" />
                          <span className="text-sm">Compensation: {job.salary}</span>
                        </div>
                        <Button size="md" onClick={() => openApplyModal(job)}>
                          Apply For Role
                        </Button>
                      </div>

                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Form Modal Overlay */}
        {activeApplyJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-8 shadow-2xl animate-fadeIn">
              
              {/* Close Button */}
              <button
                onClick={closeApplyModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Application Form</span>
                    <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white mt-1">
                      Applying for {activeApplyJob.title}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
                    {/* Hidden Field for Job ID */}
                    <input type="hidden" {...register("jobId")} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number (E.164)"
                        placeholder="+919876543210"
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                      <Input
                        label="Years of Experience"
                        placeholder="e.g. 5"
                        error={errors.experience?.message}
                        {...register("experience")}
                      />
                    </div>

                    <Input
                      label="Portfolio / LinkedIn URL"
                      placeholder="https://myportfolio.com"
                      error={errors.portfolioUrl?.message}
                      {...register("portfolioUrl")}
                    />

                    <Textarea
                      label="Cover Letter / Why You?"
                      placeholder="Explain what makes you a great fit for this position..."
                      error={errors.coverLetter?.message}
                      {...register("coverLetter")}
                    />

                    {/* Resume Upload Wrapper */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Upload Resume (PDF / Doc)
                      </span>
                      <label className="flex flex-col items-center justify-center border border-dashed border-slate-800 bg-slate-950/60 rounded-lg py-4 px-6 cursor-pointer hover:border-slate-700 transition-colors duration-300">
                        <Upload className="h-6 w-6 text-slate-500 mb-2" />
                        <span className="text-xs text-slate-400">
                          {resumeName ? `Selected: ${resumeName}` : "Click to select a file"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleResumeChange}
                        />
                      </label>
                      {errors.resumeName?.message && (
                        <span className="text-xs font-medium text-red-500 mt-0.5">
                          {errors.resumeName.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <Button variant="secondary" type="button" onClick={closeApplyModal}>
                        Cancel
                      </Button>
                      <Button type="submit" isLoading={isSubmitting}>
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for applying. Our hiring committee will review your resume and experience, and contact you back within 3-5 business days.
                  </p>
                  <div className="pt-4">
                    <Button onClick={closeApplyModal}>Done</Button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
