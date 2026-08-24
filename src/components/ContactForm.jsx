import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Unable to send your message right now.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-widest uppercase text-accent-dark mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-ink/20 focus:border-accent outline-none py-2 text-ink placeholder:text-ink/30 transition-colors resize-none"
          placeholder="Tell us about your business needs..."
        />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 text-sm font-medium tracking-wide disabled:opacity-60 disabled:cursor-not-allowed hover:bg-ink-light transition-colors"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-accent-dark font-medium"
          >
            Message sent — we&rsquo;ll be in touch shortly.
          </motion.span>
        )}
        {status === 'error' && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-red-600 font-medium"
          >
            {errorMsg}
          </motion.span>
        )}
      </div>
    </form>
  )
}

function Field({ label, name, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono tracking-widest uppercase text-accent-dark mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className="w-full bg-transparent border-b border-ink/20 focus:border-accent outline-none py-2 text-ink placeholder:text-ink/30 transition-colors"
      />
    </div>
  )
}
