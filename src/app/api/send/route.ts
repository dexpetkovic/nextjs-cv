import { Resend } from 'resend'

import { EmailTemplate } from '@/components/email-template'
import { config } from '@/util/config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const sender = body.sender
    if (!sender || !sender.email || !sender.name || !sender.lastName || !sender.message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const apiKey = config().resend.apiKey
    if (!apiKey) {
      return Response.json({ error: 'Email service not configured' }, { status: 503 })
    }
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: `Customer <hello@petkovic.nl>`,
      to: ['dexpetkovic@gmail.com'],
      subject: 'Message from Dejan Petkovic CV site',
      react: EmailTemplate({ firstName: sender.name, lastName: sender.lastName, message: sender.message, email: sender.email }),
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : error }, { status: 500 })
  }
}