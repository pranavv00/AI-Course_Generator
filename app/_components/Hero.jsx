import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
 function Hero() {
   return (
     <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
      AI Course Generator<br></br>
        <strong className="font-extrabold text-black sm:block">
        Custom Learning Paths, Powered by AI
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Unlock personalized education with AI driven course creation. Tailor your learning journey to fit yout unqiue goals and pace
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/sign-in">Get Started</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

   )
 }
 
 export default Hero