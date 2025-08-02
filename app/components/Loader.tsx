'use client'

import { useEffect, useState } from 'react'

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const navigationEntry = performance?.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming
    const isReload = navigationEntry?.type === 'reload'
    const isPageNavigation = sessionStorage.getItem('isNavigating') && !isReload
    
    if (isPageNavigation) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-300 animate-spin" />
        <div className="absolute inset-0 h-16 w-16 rounded-full border-t-4 border-black animate-spin" />
      </div>
    </div>
  )
}
