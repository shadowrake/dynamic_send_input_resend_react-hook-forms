'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import Footer from "../../../../components/footer"
import NavBar from "../../../../components/nav"
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className="relative isolate min-h-full">
        <NavBar />
        <div className="bg-red-100 relative group">
        <img
          src=""
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 text-center text-white font-bold sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base  sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-7 ">
              <span aria-hidden="true">&larr;</span> Back to recruitment
            </a>
          </div>
        </div>
        <Footer />
      </main>
  )
}