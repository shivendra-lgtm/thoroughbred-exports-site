import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { COMPANY, WEB3FORMS_ACCESS_KEY } from "@/data/site";

const initial = { name: "", email: "", company: "", country: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      setStatus("error");
      setErrorMsg(
        "Contact form is not yet configured. Please email us directly at " +
          COMPANY.email
      );
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry — ${values.name} (${values.company || "N/A"})`,
          from_name: values.name,
          replyto: values.email,
          ...values,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setValues(initial);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email us directly at " + COMPANY.email);
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="bg-brand-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-8 pt-8 pb-20 md:pt-14 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="overline text-brand-terracotta mb-4 font-bold">
              Send an enquiry
            </p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-brand-dark mb-10 leading-tight">
              Tell us what you&rsquo;re looking for.
            </h2>

            {status === "success" ? (
              <div
                data-testid="contact-form-success"
                className="border border-brand-green bg-brand-cream p-10 flex flex-col items-start"
              >
                <CheckCircle2 size={40} className="text-brand-green mb-4" />
                <h3 className="font-serif text-3xl text-brand-dark mb-3">
                  Message received.
                </h3>
                <p className="text-brand-ink leading-relaxed">
                  Thank you for reaching out. We&rsquo;ll get back to you within
                  24 hours, usually much sooner.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  data-testid="contact-send-another"
                  className="mt-8 overline text-brand-green hover:text-brand-terracotta transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="contact-form"
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <FieldInput
                    label="Your Name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required
                    testId="contact-input-name"
                  />
                  <FieldInput
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    testId="contact-input-email"
                  />
                  <FieldInput
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    testId="contact-input-company"
                  />
                  <FieldInput
                    label="Country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    testId="contact-input-country"
                  />
                </div>

                <div>
                  <label className="overline text-brand-ink block mb-3">
                    Your Enquiry
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    required
                    rows={5}
                    data-testid="contact-input-message"
                    placeholder="Tell us the product, volume, target market and any specifications…"
                    className="w-full bg-transparent border-b border-brand-dark/25 focus:border-brand-green outline-none py-3 text-brand-dark placeholder:text-brand-ink/40 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div
                    data-testid="contact-form-error"
                    className="border border-brand-terracotta/50 bg-brand-terracotta/5 p-4 text-brand-terracotta text-sm"
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  data-testid="contact-submit-button"
                  className="inline-flex items-center gap-3 bg-brand-green text-brand-cream px-10 py-5 text-xs uppercase tracking-[0.22em] hover:bg-brand-dark transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FieldInput({ label, name, value, onChange, type = "text", required, testId }) {
  return (
    <div>
      <label className="overline text-brand-ink block mb-3">
        {label} {required && <span className="text-brand-terracotta">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        data-testid={testId}
        className="w-full bg-transparent border-b border-brand-dark/25 focus:border-brand-green outline-none py-3 text-brand-dark transition-colors"
      />
    </div>
  );
}
