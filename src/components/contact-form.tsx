'use client'

import Joi from 'joi'
import React, { useState } from 'react'

import { Socials } from '@/components/socials'

export const ContactForm = (): React.ReactElement => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sendResult, setSendResult] = useState<null | 'success' | 'error'>(null)

  const emailSchema = Joi.string().email({ tlds: { allow: false } })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const { error } = emailSchema.validate(email)
    if (error) {
      setSendResult('error')
      return
    }

    setIsSending(true)
    setSendResult(null)

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: { email, name, lastName, message } }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSendResult('success')
    } catch {
      setSendResult('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="eyebrow">§ 05 — Contact</div>
      <h2 className="section-title">
        Say <em>hello</em>.
      </h2>

      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Want to get in touch? Send a message — about a project, a role, or just to say hi. I
            read everything.
          </p>
          <Socials />
        </div>

        <form className="contact" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label htmlFor="contact-first">First name</label>
              <input
                id="contact-first"
                type="text"
                placeholder="Dejan"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-last">Last name</label>
              <input
                id="contact-last"
                type="text"
                placeholder="Petković"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Tell me about your project, role, or idea…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending…' : sendResult === 'success' ? 'Sent ✓' : 'Send message →'}
          </button>
          {sendResult === 'error' ? (
            <div className="form-status error">Could not send. Please try again.</div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
