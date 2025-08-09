'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SubscribeButton({ label, variant = 'default' }) {
  const { user } = useKindeBrowserClient()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    if (!user) {
      setLoading(true)
      router.push('/api/auth/login')
      return
    }
    setLoading(true)
    setTimeout(() => {
      router.push('/subscribe')
    }, 1000)
  }

  // Dynamic button styles
  const variantStyles = {
    try: 'bg-blue-600 hover:bg-blue-700 text-white', // Trial
    next: 'bg-green-600 hover:bg-green-700 text-white', // Fast Start
    pro: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg', // Pro
    default: 'bg-[#006EF5] hover:opacity-90 text-white',
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full rounded-[5px] py-[15px] px-[25px] text-[14px] font-semibold transition-all cursor-pointer ${
        loading ? 'bg-gray-400 cursor-not-allowed' : variantStyles[variant]
      }`}
    >
      {loading ? 'Redirecting...' : label}
    </button>
  )
}
