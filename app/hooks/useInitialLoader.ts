'use client'

import { useState, useEffect } from 'react'

export function useInitialLoader() {
  const [showLoader, setShowLoader] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if this is a page navigation or direct URL access
    const navigationEntry = performance?.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming
    const isReload = navigationEntry?.type === 'reload'
    const isPageNavigation = sessionStorage.getItem('isNavigating') && !isReload
    
    if (isPageNavigation) {
      // If navigating between pages (but not reloading), don't show loader
      setShowLoader(false)
      setShowContent(true)
      return
    }

    // Set navigation flag for next route change
    sessionStorage.setItem('isNavigating', 'true')

    const loaderTimer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 2300)

    return () => {
      clearTimeout(loaderTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return { showLoader, showContent }
}

