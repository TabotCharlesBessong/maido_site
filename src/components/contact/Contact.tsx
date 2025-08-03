// src/components/ContactSection.tsx
import React from "react";
import { useForm,type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import ContactInfoBox from "./ContactInfoBox";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Get credentials from environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string ;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string ;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string ;

  console.log({serviceId,templateId,publicKey})

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsSubmitting(true);

    const promise = emailjs
      .send(serviceId, templateId, data, publicKey)
      .then(() => {
        reset(); // Reset form on success
      });

    toast
      .promise(promise, {
        loading: "Sending your message...",
        success: "Message sent successfully! We will get back to you soon.",
        error: "Failed to send message. Please try again later.",
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a question or need assistance? Fill out the form below or reach
            out to us directly. We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <ContactInfoBox
              icon={<FiMapPin />}
              title="Our Address"
              line1="123 Health St, Wellness City"
              line2="MedState, 12345"
            />
            <ContactInfoBox
              icon={<FiMail />}
              title="Email Us"
              line1="contact@liva.com"
              line2="support@liva.com"
            />
            <ContactInfoBox
              icon={<FiPhone />}
              title="Call Us"
              line1="+1 (555) 123-4567"
              line2="+1 (555) 765-4321"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-3 p-8 bg-slate-50 rounded-2xl border border-gray-200 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="form-input"
                  />
                  {errors.name && (
                    <p className="form-error">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="form-input"
                />
                {errors.subject && (
                  <p className="form-error">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="form-input"
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for contact info boxes


export default ContactSection;
