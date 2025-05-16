import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  message: string
  lastName?: string
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  lastName,
  email,
}) => (
  <div>
    <h1>From: {firstName} {lastName}!</h1>
    <p>Email: {email}</p>
    <p>{message}</p>
  </div>
)