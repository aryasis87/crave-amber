'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, X, Lock } from 'lucide-react'

const initialCart = [
  { id: 1, name: 'Velvet Pulse Wand', price: 79, quantity: 1, image: '/images/p3.jpg' },
  { id: 2, name: 'Silken Lube Noir', price: 29, quantity: 2, image: '/images/p5.jpg' },
]

export default function CheckoutPage() {
  const [cart, setCart] = useState(initialCart)

  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 12
  const total = subtotal + shipping

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 py-24 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        {/* 🛒 Product List */}
        <div className="md:col-span-2 space-y-10 overflow-x-auto">
          <h2 className="text-4xl font-serif font-semibold mb-4 text-white">
            Your Selection
          </h2>

          <div className="space-y-12">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-6 pb-6 border-b border-white/10"
              >
                <div className="relative w-full md:w-40 h-60 md:h-40 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-light text-white">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-500 hover:text-red-400 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, 'decrease')}
                        className="w-8 h-8 flex items-center justify-center border border-zinc-600 rounded hover:border-orange-500 hover:text-orange-300 transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 'increase')}
                        className="w-8 h-8 flex items-center justify-center border border-zinc-600 rounded hover:border-orange-500 hover:text-orange-300 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-lg text-orange-400 font-medium">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💳 Summary Box */}
        <div className="sticky top-28 self-start bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-xl font-serif tracking-wide mb-4 text-white">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm text-zinc-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="border-t border-zinc-700 pt-4 flex justify-between text-base text-white font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FFA94D] hover:to-[#FF6B2C] text-white font-semibold rounded-xl transition shadow-xl">
            Proceed to Checkout
          </button>

          <div className="flex items-center gap-2 text-xs text-zinc-400 mt-4">
            <Lock size={14} className="text-orange-400" />
            Secure & discreet billing
          </div>
        </div>
      </div>
    </section>
  )
}
