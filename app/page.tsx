import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-dvh grid place-items-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass-surface ring-1 ring-white/10 shadow-card">
        {/* Left: image with copy overlay */}
        <div className="relative aspect-[4/5] md:aspect-auto bg-black/20 ring-1 ring-white/10">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop"
            alt="Architectural structure"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-zinc-100">
            <p className="text-sm/6 text-zinc-200/80">PurpleRain TechSafe</p>
            <h2 className="mt-2 text-xl font-semibold md:text-2xl">Secure your future, one safeguard at a time.</h2>
            <p className="mt-1 text-sm text-zinc-300/80">Join a community protecting tomorrow's infrastructure today.</p>
          </div>
        </div>

        {/* Right: form card */}
        <div className="glass-surface p-6 md:p-8 ring-1 ring-white/10">
          <div className="mx-auto w-full max-w-sm">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Create your account</h1>
            <p className="mt-1 text-sm text-zinc-300/80">Join a network of defenders and unlock premium resources tailored for you.</p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm mb-1 text-zinc-300">Full name</label>
                <input
                  type="text"
                  placeholder="Andrew Thomas"
                  className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)]"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-zinc-300">Email address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-zinc-300">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-zinc-300">Confirm password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pr-ring)]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-zinc-300/80">
                <input type="checkbox" className="mt-1 accent-[color:var(--pr-primary)]" />
                <span>By creating an account, you agree to our <Link href="#" className="underline decoration-white/30 hover:text-white">Terms</Link> and <Link href="#" className="underline decoration-white/30 hover:text-white">Privacy Policy</Link>.</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[color:var(--pr-primary)] to-violet-400 text-[color:var(--pr-bg)] font-medium py-2.5 hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-[color:var(--pr-ring)]"
              >
                Create account
              </button>

              <p className="text-center text-sm text-zinc-300/80">
                Already have an account? <Link href="#" className="underline decoration-white/30 hover:text-white">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

