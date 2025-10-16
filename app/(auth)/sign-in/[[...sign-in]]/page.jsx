'use client'

import { SignIn } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const words = ["AI-Powered Courses", "Interactive Learning", "Limitless Creativity"]

function TypingEffect() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length]
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
        setSpeed(50)
      } else {
        setText(currentWord.substring(0, text.length + 1))
        setSpeed(150)
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex(wordIndex + 1)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, speed])

  return <span className="text-5xl font-bold">{text}<span className="border-r-2 border-white animate-pulse ml-1"></span></span>
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex font-sans">

      {/* Left Side: Creative Section */}
      <div className="w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white p-12 relative">
        <div className="text-center max-w-md">
          <TypingEffect />
          <p className="mt-6 text-lg">
            Explore the power of AI to generate, manage, and deliver engaging educational content effortlessly.
          </p>
        </div>
      </div>

      {/* Right Side: Clerk SignIn */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">Welcome Back!</h1>
          <p className="text-gray-500 text-center">
            Sign in to access your AI course dashboard
          </p>
          <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
          />
          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account? <a href="/sign-up" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>

    </div>
  )
}
