import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'

const contactCards = [
  {
    icon:  '📍',
    title: 'Location',
    lines: [
      'Emirates Stadium',
      'Hornsey Road',
      'London N7 7AJ',
      'United Kingdom',
    ],
  },
  {
    icon:  '✉️',
    title: 'Email Support',
    lines: [
      'General Inquiries:',
      'info@goonersportal.com',
      '',
      'Membership:',
      'membership@goonersportal.com',
    ],
  },
  {
    icon:  '🌐',
    title: 'Social Media',
    lines: ['Facebook', 'Twitter / X', 'Instagram', 'YouTube'],
  },
]

const contactReasons = [
  { value: 'general',    label: 'General Inquiry'   },
  { value: 'membership', label: 'Membership Question' },
  { value: 'feedback',   label: 'Feedback'          },
  { value: 'support',    label: 'Technical Support'  },
]

const INITIAL_FORM = { name: '', email: '', reason: '', message: '' }

export default function Contact() {
  const [form,        setForm]        = useState(INITIAL_FORM)
  const [errors,      setErrors]      = useState({})
  const [submitted,   setSubmitted]   = useState(false)
  const [submitting,  setSubmitting]  = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Full name is required.'
    if (!form.email.trim())   errs.email   = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                 errs.email   = 'Please enter a valid email address.'
    if (!form.reason)         errs.reason  = 'Please select a reason for contacting.'
    if (!form.message.trim()) errs.message = 'Message cannot be empty.'
    return Object.keys(errs).length ? errs : null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (errs) { setErrors(errs); return }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(INITIAL_FORM)
    }, 1200)
  }

  return (
    <>
      <section
        className="relative pt-32 pb-16 text-center text-white bg-gunner-dark-2 overflow-hidden"
        aria-label="Contact page header"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #e30713 0, #e30713 1px, transparent 0, transparent 50%)',
            backgroundSize: '14px 14px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-gunner-gold text-gunner-dark text-xs font-extrabold
                           uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
            Contact <span className="text-gunner-red">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Get in touch with our community or join the Arsenal family.
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-gunner-dark-2 rounded-2xl p-8 text-white">
                  <div className="w-16 h-16 rounded-full bg-gunner-red flex items-center justify-center
                                  text-3xl font-extrabold text-gunner-gold mb-6 shadow-lg">
                    G
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">
                    Reach The Gooners Community
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Whether you have a question, feedback, or just want to share your passion
                    for Arsenal, we're here for every Gooner around the globe.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                      <span className="text-gunner-gold text-lg">📧</span>
                      <div>
                        <p className="text-xs text-gray-400">Email us at</p>
                        <p className="text-sm text-white font-semibold">info@goonersportal.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                      <span className="text-gunner-gold text-lg">📍</span>
                      <div>
                        <p className="text-xs text-gray-400">Based near</p>
                        <p className="text-sm text-white font-semibold">Emirates Stadium, London</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                      <span className="text-gunner-gold text-lg">⚡</span>
                      <div>
                        <p className="text-xs text-gray-400">Response time</p>
                        <p className="text-sm text-white font-semibold">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionHeader
                title="Send Us a Message"
                center={false}
              />

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-scale-in">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-extrabold text-green-700 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-green-600 text-sm mb-6">
                    Thanks for reaching out. A member of The Gooners Portal team will
                    get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-gunner-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-gunner-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="reason" className="form-label">
                      Reason for Contacting <span className="text-gunner-red">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className={`form-input bg-white appearance-none cursor-pointer
                                  ${errors.reason ? 'border-red-400 focus:ring-red-400' : ''}`}
                      aria-required="true"
                    >
                      <option value="" disabled>Choose a reason…</option>
                      {contactReasons.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.reason && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.reason}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="text-gunner-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind…"
                      className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                      aria-required="true"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                    <p className="mt-1 text-right text-xs text-gray-400">
                      {form.message.length} characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center py-4 text-base
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Submit Message →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gunner-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Community Hub"
            subtitle="Multiple ways to connect with The Gooners Portal team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-md p-8 text-center
                           hover:shadow-card-hover hover:-translate-y-1
                           transition-all duration-300 border border-transparent
                           hover:border-gunner-red/20"
              >
                <div className="text-4xl mb-4" role="img" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gunner-red mb-4">{card.title}</h3>
                <div className="space-y-1">
                  {card.lines.map((line, i) => (
                    <p
                      key={i}
                      className={`text-sm ${
                        line.endsWith(':') || line === ''
                          ? 'font-semibold text-gray-700 mt-3'
                          : 'text-gray-500'
                      }`}
                    >
                      {line || <>&nbsp;</>}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-red text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Join the Arsenal Community
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Connect with thousands of Gooners worldwide. Share your passion,
            celebrate victories, and support the team together.
          </p>
          <button
            disabled
            className="btn-gold opacity-70 cursor-not-allowed text-base px-8 py-4"
            title="Coming in a future update"
          >
            Membership Portal — Coming Soon
          </button>
        </div>
      </section>
    </>
  )
}