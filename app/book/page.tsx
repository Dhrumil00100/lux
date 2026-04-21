"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar,
  User,
  Scissors,
  CreditCard,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, staff } from "@/lib/mock-data";
import { BookingStep, Service, Staff } from "@/types";

const steps: { id: BookingStep; label: string; icon: typeof Scissors }[] = [
  { id: "service", label: "Service", icon: Scissors },
  { id: "staff", label: "Stylist", icon: User },
  { id: "datetime", label: "Date & Time", icon: Calendar },
  { id: "details", label: "Your Details", icon: CreditCard },
  { id: "confirm", label: "Confirm", icon: Check },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const goToNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const goToPrevious = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case "service":
        return !!selectedService;
      case "staff":
        return !!selectedStaff;
      case "datetime":
        return !!selectedDate && !!selectedTime;
      case "details":
        return formData.name && formData.email && formData.phone;
      default:
        return true;
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-cream pt-24 pb-16">        <div className="max-w-2xl mx-auto px-6 md:px-8 lg:px-12"
        >          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gold/20 p-10 md:p-12 text-center"
          >            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gold/10 flex items-center justify-center mx-auto mb-8 relative"
            >              <Check className="w-12 h-12 text-gold" />            </motion.div>            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl font-semibold text-dark mb-4"
            >              Booking Confirmed!            </motion.h1>            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted mb-10"
            >              Thank you, {formData.name}. Your appointment has been scheduled. We&apos;ve sent a confirmation to {formData.email}.
            </motion.p>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-cream p-6 mb-10 text-left border border-gold/10"
            >              <div className="grid grid-cols-2 gap-6 text-sm"
              >                <div>                  <p className="text-muted font-subheading text-xs uppercase tracking-[0.2em] mb-1">Service</p>                  <p className="font-medium text-dark text-lg">{selectedService?.name}</p>                </div>                <div>                  <p className="text-muted font-subheading text-xs uppercase tracking-[0.2em] mb-1">Stylist</p>                  <p className="font-medium text-dark text-lg">{selectedStaff?.name}</p>                </div>                <div>                  <p className="text-muted font-subheading text-xs uppercase tracking-[0.2em] mb-1">Date</p>                  <p className="font-medium text-dark">{selectedDate}</p>                </div>                <div>                  <p className="text-muted font-subheading text-xs uppercase tracking-[0.2em] mb-1">Time</p>                  <p className="font-medium text-dark">{selectedTime}</p>                </div>              </div>              <div className="mt-6 pt-6 border-t border-gold/10"
              >                <div className="flex justify-between items-center">                  <span className="text-muted">Total Amount</span>                  <span className="font-heading text-2xl text-gold font-semibold">                    ₹{selectedService?.price.toLocaleString()}                  </span>                </div>              </div>            </motion.div>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >              <Link
                href="/"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold text-dark font-medium hover:bg-gold-light transition-colors font-subheading text-sm tracking-[0.2em] uppercase rounded-sm"
              >                Return to Home              </Link>              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-10 py-4 border border-dark/20 text-dark font-medium hover:bg-dark hover:text-white transition-colors font-subheading text-sm tracking-[0.2em] uppercase rounded-sm"
              >                Book Another              </button>            </motion.div>          </motion.div>        </div>      </div>    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}      <section className="bg-dark py-20 md:py-28 relative overflow-hidden"
      >        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
        >          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-px bg-gold"
            />            <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold"
            >              Book Appointment            </span>          </motion.div>          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1] tracking-tight"
          >            Reserve Your            <br />            <span className="text-gold italic">Experience</span>          </motion.h1>        </div>      </section>

      {/* Booking Steps */}      <section className="py-16"
      >        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12"
        >          <div className="mb-16"
          >            <div className="flex items-center justify-center"
            >              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStepIndex;
                const isCompleted = index < currentStepIndex;

                return (                  <div key={step.id} className="flex items-center"
                  >                    <div className={`flex flex-col items-center ${index > 0 ? "ml-4 sm:ml-8" : ""}`}
                    >                      <motion.div
                        initial={isCompleted ? { scale: 0.8 } : {}}
                        animate={{ scale: 1 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gold text-dark"
                            : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-dark/10 text-muted"
                        }`}
                      >                        {isCompleted ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6" />                        ) : (
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />                        )}                      </motion.div>                      <span
                        className={`text-xs sm:text-sm mt-3 font-medium ${
                          isActive ? "text-gold" : "text-muted"
                        }`}
                      >                        {step.label}                      </span>                    </div>                    {index < steps.length - 1 && (                      <div
                        className={`w-8 sm:w-16 h-px ml-4 sm:ml-8 transition-all duration-500 ${
                          isCompleted ? "bg-green-500" : "bg-dark/10"
                        }`}
                      />                    )}                  </div>                );
              })}            </div>          </div>
          <AnimatePresence mode="wait">            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >              <div className="space-y-6">                <h2 className="font-heading text-2xl font-semibold text-dark mb-8"
                >                  {currentStep === "service" && "Select a Service"}                  {currentStep === "staff" && "Choose Your Stylist"}                  {currentStep === "datetime" && "Select Date & Time"}                  {currentStep === "details" && "Your Details"}                  {currentStep === "confirm" && "Confirm Your Booking"}                </h2>              </div>              {currentStep === "service" && (                <div className="grid sm:grid-cols-2 gap-px bg-gold/20"
                >                  {services.map((service, index) => (                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >                      <Card
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg rounded-sm ${
                          selectedService?.id === service.id
                            ? "ring-2 ring-gold bg-gold/5 border-gold/30"
                            : "hover:border-gold/30"
                        }`}
                        onClick={() => setSelectedService(service)}
                      >                        <CardContent className="p-6"
                        >                          <div className="flex justify-between items-start mb-4"
                        >                            <span className="font-subheading text-xs uppercase tracking-[0.2em] text-gold"
                            >                              {service.category.replace("-", " ")}                            </span>                            <div className="flex items-center text-muted text-sm"
                            >                              <Clock className="w-4 h-4 mr-1" />                              {service.duration} min                            </div>                          </div>                          <h3 className="font-heading text-xl font-semibold text-dark mb-2"
                          >                            {service.name}                          </h3>                          <p className="text-muted text-sm line-clamp-2"
                          >{service.description}</p>                          <div className="mt-4 pt-4 border-t border-gold/10 flex justify-between items-center"
                          >                            <span className="font-heading text-xl text-gold font-semibold"
                            >                              ₹{service.price.toLocaleString()}                            </span>                            {selectedService?.id === service.id && (                              <span className="text-green-600 text-sm font-medium flex items-center"
                              >                                <Check className="w-4 h-4 mr-1" /> Selected                              </span>                            )}                          </div>                        </CardContent>                      </Card>                    </motion.div>                  ))}                </div>              )}

              {currentStep === "staff" && (                <div className="grid sm:grid-cols-2 gap-px bg-gold/20"
                >                  {staff.map((member, index) => (                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >                      <Card
                        className={`cursor-pointer overflow-hidden transition-all duration-300 rounded-sm ${
                          selectedStaff?.id === member.id
                            ? "ring-2 ring-gold"
                            : "hover:border-gold/30"
                        }`}
                        onClick={() => setSelectedStaff(member)}
                      >                        <div className="flex"
                        >                          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-dark/10 overflow-hidden"
                          >                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />                          </div>                          <CardContent className="p-4 flex flex-col justify-center flex-grow"
                          >                            <div className="flex justify-between items-start"
                          >                              <div>                                <h3 className="font-heading text-lg font-semibold text-dark"
                                >                                  {member.name}                                </h3>                                <p className="text-gold text-sm">{member.role}</p>                                <p className="text-muted text-xs mt-1">                                  {member.experience} years experience                                </p>                              </div>                              {selectedStaff?.id === member.id && (                                <div className="w-6 h-6 bg-gold flex items-center justify-center"
                                >                                  <Check className="w-4 h-4 text-dark" />                                </div>                              )}                            </div>                          </CardContent>                        </div>                      </Card>                    </motion.div>                  ))}                </div>              )}

              {currentStep === "datetime" && (                <div className="space-y-8"
                >                  <div>                    <h3 className="font-heading text-xl font-semibold text-dark mb-6"
                    >Select Date</h3>                    <div className="grid grid-cols-7 gap-2"
                    >                      {Array.from({ length: 14 }, (_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i + 1);
                        const dateStr = date.toISOString().split("T")[0];
                        const dayName = date.toLocaleDateString("en-US", {                          weekday: "short",
                        });
                        const dayNum = date.getDate();
                        const isSelected = selectedDate === dateStr;

                        return (                          <button
                            key={dateStr}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`p-3 text-center transition-all duration-300 rounded-sm ${
                              isSelected
                                ? "bg-gold text-dark"
                                : "bg-white border border-gold/10 hover:border-gold/30"
                            }`}
                          >                            <p className={`text-xs ${isSelected ? "text-dark/70" : "text-muted"}`}>{dayName}</p>                            <p className={`font-heading text-lg font-semibold ${isSelected ? "text-dark" : "text-dark"}`}>{dayNum}</p>                          </button>                        );
                      })}                    </div>                  </div>                  {selectedDate && (                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >                      <h3 className="font-heading text-xl font-semibold text-dark mb-6"
                      >Select Time</h3>                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3"
                      >                        {timeSlots.map((time) => (                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                              selectedTime === time
                                ? "bg-gold text-dark"
                                : "bg-white border border-gold/10 hover:border-gold/30"
                            }`}
                          >                            {time}                          </button>                        ))}                      </div>                    </motion.div>                  )}                </div>              )}

              {currentStep === "details" && (                <div className="max-w-xl mx-auto"
                >                  <div className="space-y-6"
                  >                    <div>                      <Label htmlFor="name" className="text-dark"
                      >                        Full Name *                    </Label>                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                      />                    </div>                    <div className="grid sm:grid-cols-2 gap-6"
                    >                      <div>                        <Label htmlFor="email" className="text-dark"
                        >                          Email *                      </Label>                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                        />                      </div>                      <div>                        <Label htmlFor="phone" className="text-dark"
                        >                          Phone *                      </Label>                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                        />                      </div>                    </div>                    <div>                      <Label htmlFor="notes" className="text-dark"
                      >                        Special Requests (Optional)                    </Label>                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any allergies, preferences, or requests?"
                        className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm resize-none"
                        rows={4}
                      />                    </div>                  </div>                </div>              )}

              {currentStep === "confirm" && (                <div className="max-w-xl mx-auto"
                >                  <div className="bg-white border border-gold/20 p-8 space-y-4"
                  >                    <div className="flex justify-between py-3 border-b border-gold/10"
                    >                      <span className="text-muted">Service</span>                      <span className="font-medium text-dark text-lg">{selectedService?.name}</span>                    </div>                    <div className="flex justify-between py-3 border-b border-gold/10"
                    >                      <span className="text-muted">Stylist</span>                      <span className="font-medium text-dark">{selectedStaff?.name}</span>                    </div>                    <div className="flex justify-between py-3 border-b border-gold/10"
                    >                      <span className="text-muted">Date & Time</span>                      <span className="font-medium text-dark">{selectedDate} at {selectedTime}</span>                    </div>                    <div className="flex justify-between py-3 border-b border-gold/10"
                    >                      <span className="text-muted">Duration</span>                      <span className="font-medium text-dark">{selectedService?.duration} minutes</span>                    </div>                    <div className="flex justify-between items-center py-4"
                    >                      <span className="text-muted">Total</span>                      <span className="font-heading text-3xl text-gold font-semibold">                        ₹{selectedService?.price.toLocaleString()}                      </span>                    </div>                  </div>                </div>              )}            </motion.div>          </AnimatePresence>

          <div className="flex justify-between mt-12"
          >            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={currentStepIndex === 0}
              className="border-dark/20 text-dark hover:bg-dark hover:text-white disabled:opacity-50 px-8 py-6 rounded-sm"
            >              <ChevronLeft className="w-4 h-4 mr-2" />              Back            </Button>            {currentStep === "confirm" ? (              <Button
                onClick={handleConfirm}
                className="bg-gold hover:bg-gold-light text-dark px-10 py-6 rounded-sm"
              >                Confirm Booking                <Check className="w-4 h-4 ml-2" />              </Button>            ) : (              <Button
                onClick={goToNext}
                disabled={!canProceed()}
                className="bg-gold hover:bg-gold-light text-dark disabled:opacity-50 px-10 py-6 rounded-sm"
              >                Continue                <ChevronRight className="w-4 h-4 ml-2" />              </Button>            )}          </div>        </div>      </section>    </div>
  );
}
