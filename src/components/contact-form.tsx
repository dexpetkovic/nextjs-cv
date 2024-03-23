import { Button, Input, Textarea } from '@nextui-org/react'
import Joi from 'joi'
import React, { useState } from 'react'

export const ContactForm = (): React.ReactElement => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const emailSchema = Joi.string().email({ tlds: { allow: false } })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const { error } = emailSchema.validate(email)
    if (error) {
      console.error(error.details[0].message)
      return
    }

    // Handle form submission here
  }

  return (
    <div className={'flex flex-col w-full h-full p-4'}>
      <p className="text-2xl md:text-4xl dark:text-white light:text-black text-center">Let's keep in touch!</p>
      <form onSubmit={handleSubmit} className={'flex flex-col h-full'}>
        <div>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="py-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            variant={'flat'}
            label="Message"
            labelPlacement="inside"
            placeholder="Enter your message here 🚀"
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
    </div>
  )
}
