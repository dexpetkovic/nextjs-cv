import { Button, Input, Textarea } from '@nextui-org/react'
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
      console.error(error.details[0].message)
      return
    }

    setIsSending(true)
    setSendResult(null)
    const payload = {
      sender: {
        email,
        name,
        lastName,
        message,
      },
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSendResult('success')
    } catch (err) {
      console.error(err)
      setSendResult('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div  id="contact" className={'flex flex-col w-full md:w-1/2 h-full p-4'}>
      <p className="text-xl md:text-4xl dark:text-white light:text-black text-center mb-4">Contact</p>
      <p className="text-sm md:text-lg dark:text-white light:text-black text-center">Want to get in touch? Send me a message!</p>
      <Socials />
      <p className="text-sm md:text-lg dark:text-white light:text-black text-center">Or send me an email:</p>
      <form onSubmit={handleSubmit} className={'flex flex-col h-full'}>
        <div>
          <Input
            type="email"
            label="Email"
            className="py-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            label="Name"
            className="py-2 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            label="Last Name"
            className="py-2 w-full"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Textarea
            variant={'flat'}
            label="Message"
            labelPlacement="inside"
            className="py-2 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex my-4 justify-center">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </form>
      {isSending && (
        <div className="flex justify-center items-center mt-4">
          <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500 mr-2"></span>
          <span>Sending...</span>
        </div>
      )}
      {sendResult === 'success' && (
        <div className="text-green-600 text-center mt-4">Message sent successfully!</div>
      )}
      {sendResult === 'error' && (
        <div className="text-red-600 text-center mt-4">Failed to send message. Try again.</div>
      )}
    </div>
  )
}
