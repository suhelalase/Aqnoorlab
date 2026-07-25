"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileCheck,
  MapPin,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ============================================================================
// DATA
// ============================================================================

const STEPS = [
  { id: 1, name: "Personal Info", description: "Basic details", icon: User },
  { id: 2, name: "Address", description: "Location info", icon: MapPin },
  { id: 3, name: "Preferences", description: "Customization", icon: Settings },
  { id: 4, name: "Review", description: "Final check", icon: FileCheck },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function SidebarStep({
  step,
  currentStep,
}: {
  step: (typeof STEPS)[0];
  currentStep: number;
}) {
  const Icon = step.icon;
  const isCompleted = currentStep > step.id;
  const isCurrent = currentStep === step.id;

  return (
    <div className="relative flex items-center gap-4 py-4">
      {/* Vertical Line */}
      {step.id !== STEPS.length && (
        <div className="absolute left-6 top-10 h-full w-[2px] bg-border/30">
          <motion.div
            className="h-full w-full bg-primary"
            initial={{ height: "0%" }}
            animate={{ height: isCompleted ? "100%" : "0%" }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Icon Bubble */}
      <motion.div
        className={cn(
          "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
          isCompleted
            ? "border-primary bg-primary text-primary-foreground"
            : isCurrent
              ? "border-primary bg-background text-primary shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"
              : "border-border/50 bg-background/50 text-muted-foreground"
        )}
        whileHover={{ scale: 1.05 }}
      >
        {isCompleted ? (
          <Check className="h-5 w-5" strokeWidth={3} />
        ) : (
          <Icon className="h-5 w-5" />
        )}
      </motion.div>

      {/* Text Info */}
      <div className="flex flex-col">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-300",
            isCurrent || isCompleted
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {step.name}
        </span>
        <span className="text-xs text-muted-foreground/70">
          {step.description}
        </span>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="text-sm font-medium text-foreground"
      >
        {label} <span className="text-destructive">*</span>
      </Label>
      <Input
        id={label.toLowerCase().replace(/\s/g, "-")}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border-border/40 bg-background/40 backdrop-blur transition-all focus:border-primary/50 focus:bg-background/60 text-foreground"
      />
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/20 bg-background/40 p-3 backdrop-blur transition-colors hover:bg-background/60">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium text-foreground">{value || "—"}</dd>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function WizardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 000-0000",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    notification: "Email",
    theme: "Dark",
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <div id="onboarding" className="relative w-full max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Interactive Setup
        </Badge>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Account Setup Wizard
        </h1>
        <p className="text-muted-foreground">
          Complete the steps below to verify your details and configure preferences
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/40 p-12 text-center backdrop-blur-xl shadow-xl"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-8 w-8" strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Setup Completed!</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Your profile has been successfully configured. We have saved your preferences and setup options.
          </p>
          <Button onClick={resetForm} className="rounded-full font-semibold">
            Restart Wizard
          </Button>
        </motion.div>
      ) : (
        /* Main Card Container */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-3xl border border-border/40 bg-background/40 backdrop-blur-xl shadow-xl"
        >
          {/* Glass Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Left Sidebar - Steps */}
            <div className="border-b border-border/40 bg-background/30 p-8 lg:border-b-0 lg:border-r">
              <div className="space-y-1">
                {STEPS.map((step) => (
                  <SidebarStep
                    key={step.id}
                    step={step}
                    currentStep={currentStep}
                  />
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col p-8 lg:p-12 bg-card/10">
              <div className="flex-1">
                <motion.div
                  key={currentStep}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {/* Step Header */}
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {STEPS[currentStep - 1].name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {STEPS[currentStep - 1].description}
                    </p>
                  </div>

                  {/* Form Content */}
                  <div className="min-h-[260px]">
                    {currentStep === 1 && (
                      <div className="grid gap-6 md:grid-cols-2">
                        <InputField
                          label="First Name"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(v) => updateField("firstName", v)}
                        />
                        <InputField
                          label="Last Name"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(v) => updateField("lastName", v)}
                        />
                        <InputField
                          label="Email"
                          placeholder="john@example.com"
                          type="email"
                          value={formData.email}
                          onChange={(v) => updateField("email", v)}
                        />
                        <InputField
                          label="Phone"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                          value={formData.phone}
                          onChange={(v) => updateField("phone", v)}
                        />
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <InputField
                          label="Street Address"
                          placeholder="123 Main St"
                          value={formData.street}
                          onChange={(v) => updateField("street", v)}
                        />
                        <div className="grid gap-6 md:grid-cols-3">
                          <InputField
                            label="City"
                            placeholder="New York"
                            value={formData.city}
                            onChange={(v) => updateField("city", v)}
                          />
                          <InputField
                            label="State"
                            placeholder="NY"
                            value={formData.state}
                            onChange={(v) => updateField("state", v)}
                          />
                          <InputField
                            label="ZIP Code"
                            placeholder="10001"
                            value={formData.zip}
                            onChange={(v) => updateField("zip", v)}
                          />
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <Label className="text-base text-foreground font-semibold">
                            Notification Method
                          </Label>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {["Email", "SMS", "Both"].map((option) => {
                              const isChecked = formData.notification === option;
                              return (
                                <label
                                  key={option}
                                  className={cn(
                                    "relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all hover:border-primary/50 hover:bg-background/60",
                                    isChecked
                                      ? "border-primary bg-primary/10 text-primary"
                                      : "border-border/40 bg-background/40 text-muted-foreground"
                                  )}
                                >
                                  <input
                                    type="radio"
                                    name="notification"
                                    checked={isChecked}
                                    onChange={() => updateField("notification", option)}
                                    className="sr-only"
                                  />
                                  <span className="text-sm font-medium">
                                    {option}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-base text-foreground font-semibold">Theme Preference</Label>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {["Auto", "Light", "Dark"].map((option) => {
                              const isChecked = formData.theme === option;
                              return (
                                <label
                                  key={option}
                                  className={cn(
                                    "relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all hover:border-primary/50 hover:bg-background/60",
                                    isChecked
                                      ? "border-primary bg-primary/10 text-primary"
                                      : "border-border/40 bg-background/40 text-muted-foreground"
                                  )}
                                >
                                  <input
                                    type="radio"
                                    name="theme"
                                    checked={isChecked}
                                    onChange={() => updateField("theme", option)}
                                    className="sr-only"
                                  />
                                  <span className="text-sm font-medium">
                                    {option}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="rounded-xl border border-border/40 bg-background/20 p-6">
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Personal Information
                          </h3>
                          <div className="grid gap-3">
                            <ReviewItem label="Full Name" value={`${formData.firstName} ${formData.lastName}`} />
                            <ReviewItem label="Email Address" value={formData.email} />
                            <ReviewItem label="Phone Number" value={formData.phone} />
                          </div>
                        </div>

                        <div className="rounded-xl border border-border/40 bg-background/20 p-6">
                          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Address Details
                          </h3>
                          <div className="grid gap-3">
                            <ReviewItem label="Street" value={formData.street} />
                            <ReviewItem
                              label="Location"
                              value={`${formData.city}, ${formData.state} ${formData.zip}`}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Footer / Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-8">
                <Button
                  variant="ghost"
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  type="button"
                  className="gap-2 rounded-lg font-semibold cursor-pointer"
                >
                  {currentStep === STEPS.length ? "Submit" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
export default WizardForm;
