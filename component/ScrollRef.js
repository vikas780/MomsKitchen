'use client'
import { useRef } from 'react'

export default function Home() {
  const subscriptionRef = useRef(null)

  const scrollToSubscription = () => {
    subscriptionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return { scrollToSubscription, subscriptionRef }
}
