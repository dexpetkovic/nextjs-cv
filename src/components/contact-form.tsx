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
    <div className={'flex flex-row items-start p-4 mb-4'}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="my-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          variant={'flat'}
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 my-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" color="primary" className="my-4">
          Submit
        </Button>
      </form>
    </div>
  )
}
