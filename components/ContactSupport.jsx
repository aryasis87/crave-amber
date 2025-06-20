'use client'

import { useState } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Message Sent:', formData)
    // TODO: Integrate with API or email service
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#FFF9F4] to-white dark:from-zinc-900 dark:to-zinc-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left: Contact Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Let’s Connect, Comfortably
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our discreet and friendly support team is ready to help—whether you're shy, curious, or just need a hand.
            </p>
          </div>

          <div className="space-y-6">
            {/* Info Item */}
            {[
              {
                icon: <Phone className="w-6 h-6 text-[#FF6B2C]" />,
                title: 'Phone Support',
                desc: '+62 812 3456 7890\nMon–Fri, 09:00–17:00 WIB',
              },
              {
                icon: <Mail className="w-6 h-6 text-[#FF6B2C]" />,
                title: 'Email Us',
                desc: 'support@positivecrave.co.id\nWe’ll reply within 24 hours.',
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-[#FF6B2C]" />,
                title: 'Live Chat',
                desc: 'Click the chat icon at the bottom right for real-time anonymous support.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFE3CC] dark:bg-[#FF6B2C]/20">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-xl p-10 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: 'Your Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
              { label: 'Email Address', type: 'email', name: 'email', placeholder: 'you@example.com' },
            ].map((input, idx) => (
              <div key={idx}>
                <label className="block mb-2 font-medium">{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  required
                  value={formData[input.name]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA94D]"
                />
              </div>
            ))}

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA94D]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-[#FF6B2C] hover:bg-[#e65c1f] text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
