'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [isSignUp, setIsSignUp] = useState(true)

  return (
    <main className="min-h-dvh grid place-items-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden glass-surface ring-1 ring-white/10 shadow-card">
        {/* Left: image with copy overlay */}
        <div className="relative aspect-[4/5] md:aspect-auto bg-black/20 ring-1 ring-white/10">
          <Image
            src="https://www.purplerain.tech/device-mockup.png"
            alt="Cybersecurity infrastructure"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-zinc-100">
            <p className="text-sm/6 text-zinc-200/80">PurpleRain TechSafe</p>
            <h2 className="mt-2 text-xl font-semibold md:text-2xl">Secure your future, one safeguard at a time.</h2>
            <p className="mt-1 text-sm text-zinc-300/80">Join a community protecting tomorrow&apos;s infrastructure today.</p>
          </div>
        </div>

        {/* Right: form card */}
        <div className="glass-surface p-6 md:p-8 ring-1 ring-white/10">
          <div className="mx-auto w-full max-w-sm">
            {/* Toggle buttons */}
            <div className="flex rounded-md bg-black/20 p-1 mb-6">
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 rounded-sm px-3 py-2 text-sm font-medium transition-all ${
                  isSignUp
                    ? 'bg-[color:var(--pr-primary)] text-[color:var(--pr-bg)] shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 rounded-sm px-3 py-2 text-sm font-medium transition-all ${
                  !isSignUp
                    ? 'bg-[color:var(--pr-primary)] text-[color:var(--pr-bg)] shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Sign In
              </button>
            </div>

            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="mt-1 text-sm text-zinc-300/80">
              {isSignUp
                ? 'Join a network of defenders and unlock premium resources tailored for you.'
                : 'Sign in to access your PurpleRain TechSafe dashboard.'
              }
            </p>

            {/* Social login buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full flex items-center justify-center gap-3 rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--pr-ring)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--pr-ring)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[color:var(--pr-surface)] px-2 text-zinc-400">Or continue with email</span>
              </div>
            </div>

            <form className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm mb-1.5 text-zinc-300">Full name</label>
                  <input
                    type="text"
                    placeholder="Andrew Thomas"
                    className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2.5 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)] transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm mb-1.5 text-zinc-300">Email address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2.5 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)] transition-all"
                />
              </div>

              {isSignUp ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm mb-1.5 text-zinc-300">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2.5 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 text-zinc-300">Confirm password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2.5 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)] transition-all"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm text-zinc-300">Password</label>
                    <Link href="#" className="text-xs text-[color:var(--pr-primary)] hover:text-[color:var(--pr-ring)] transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2.5 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)] transition-all"
                  />
                </div>
              )}

              {isSignUp && (
                <div className="flex items-start gap-2.5 text-sm text-zinc-300/80">
                  <input type="checkbox" className="mt-0.5 accent-[color:var(--pr-primary)]" />
                  <span>By creating an account, you agree to our <Link href="#" className="text-[color:var(--pr-primary)] hover:text-[color:var(--pr-ring)] transition-colors">Terms</Link> and <Link href="#" className="text-[color:var(--pr-primary)] hover:text-[color:var(--pr-ring)] transition-colors">Privacy Policy</Link>.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-[color:var(--pr-primary)] to-violet-400 text-[color:var(--pr-bg)] font-medium py-2.5 hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--pr-ring)] shadow-lg"
              >
                {isSignUp ? 'Create account' : 'Sign in'}
              </button>

              <p className="text-center text-sm text-zinc-300/80">
                {isSignUp ? (
                  <>Already have an account? <button type="button" onClick={() => setIsSignUp(false)} className="text-[color:var(--pr-primary)] hover:text-[color:var(--pr-ring)] transition-colors">Sign in</button></>
                ) : (
                  <>Don&apos;t have an account? <button type="button" onClick={() => setIsSignUp(true)} className="text-[color:var(--pr-primary)] hover:text-[color:var(--pr-ring)] transition-colors">Sign up</button></>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

