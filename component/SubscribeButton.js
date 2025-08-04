'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SubscribeButton({ label }) {
  const { user } = useKindeBrowserClient()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    if (!user) {
      setLoading(true)
      router.push('/api/auth/login') // or your login route
      return
    }

    setLoading(true)

    setTimeout(() => {
      router.push('/subscribe')
    }, 1000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`rounded-[5px] py-[15px] px-[25px] text-[14px] font-semibold transition-all cursor-pointer ${
        loading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-[#006EF5] text-white hover:opacity-90'
      }`}
    >
      {loading ? 'Redirecting...' : label}
    </button>
  )
}
