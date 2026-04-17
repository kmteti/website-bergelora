import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-950 to-black text-white">
      <div className="max-w-2xl text-center space-y-6 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
          Welcome to your Next.js project
        </h1>
        <p className="text-lg text-indigo-100/80">
          Tailwind CSS v4 & Configuration has been applied successfully!
        </p>
        <div className="pt-6">
          <a
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            href="https://nextjs.org/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js Documentation
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 opacity-60 text-sm">
        <p>Update this page by editing</p>
        <a className="hover:text-blue-400 hover:underline underline-offset-4 transition-colors" href="#">
          <code className="font-mono bg-white/10 px-2 py-1 rounded">app/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
