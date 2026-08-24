import { useState } from 'react'
import { motion } from 'framer-motion'

const interestOptions = [
  'Managing Taxes',
  'Business Strategy',
  'Company Structure',
  'Acquisition',
  'Superannuation',
  'Investment',
  'Business Loans',
]

const yearsOptions = ['0 - 2 Years', '2 - 10 Years', '10+ Years']

const initialState = {
  name: '',
  industry: '',
  phone: '',
  email: '',
  yearsInOperation: '',
  interests: [],
  notes: '',
}

export default function ConsultForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const toggleInterest = (interest) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/consult', {
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
      setErrorMsg(err.message || 'Unable to submit your request right now.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
        <Field
          label="Business Industry"
          name="industry"
          value={form.industry}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
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
        <label
          htmlFor="yearsInOperation"
          className="block text-xs font-mono tracking-widest uppercase text-accent-dark mb-2"
        >
          Years In Operation
        </label>
        <select
          id="yearsInOperation"
          name="yearsInOperation"
          value={form.yearsInOperation}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-ink/20 focus:border-accent outline-none py-2 text-ink transition-colors"
        >
          <option value="" disabled>
            Select an option
          </option>
          {yearsOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="block text-xs font-mono tracking-widest uppercase text-accent-dark mb-3">
          I&rsquo;m interested in (select one or more)
        </span>
        <div className="flex flex-wrap gap-2.5">
          {interestOptions.map((interest) => {
            const active = form.interests.includes(interest)
            return (
              <button
                type="button"
                key={interest}
                onClick={() => toggleInterest(interest)}
                aria-pressed={active}
                className={`px-4 py-2 text-xs font-medium tracking-wide border transition-colors ${
                  active
                    ? 'bg-ink text-accent border-ink'
                    : 'border-ink/20 text-ink/60 hover:border-accent hover:text-accent-dark'
                }`}
              >
                {interest}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs font-mono tracking-widest uppercase text-accent-dark mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-ink/20 focus:border-accent outline-none py-2 text-ink placeholder:text-ink/30 transition-colors resize-none"
          placeholder="Tell us a little more about what you need help with..."
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
          {status === 'loading' ? 'Submitting…' : 'Arrange A Consultation'}
        </motion.button>

        {status === 'success' && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-accent-dark font-medium"
          >
            Request received — a Partner associate will reach out shortly.
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
