import { test, expect } from '@playwright/test'

test.describe('Visual Tests', () => {
  test('1. Homepage - overall layout', async ({ page }) => {
    await page.goto('http://localhost:4321')
    await page.waitForLoadState('networkidle')

    // Take full page screenshot
    await page.screenshot({
      path: 'test-artifacts/01-homepage-full.png',
      fullPage: true
    })

    // Take viewport screenshot
    await page.screenshot({
      path: 'test-artifacts/01-homepage-viewport.png'
    })

    // Check page title
    const title = await page.title()
    console.log('Page title:', title)
  })

  test('2. Theme toggle functionality', async ({ page }) => {
    await page.goto('http://localhost:4321')
    await page.waitForLoadState('networkidle')

    // Check initial theme
    const html = page.locator('html')
    const initialTheme = await html.getAttribute('class') || await html.getAttribute('data-theme') || 'no-theme-attr'
    console.log('Initial theme:', initialTheme)

    // Take screenshot of initial state
    await page.screenshot({ path: 'test-artifacts/02-theme-initial.png' })

    // Find and click theme toggle button
    const themeButton = page.locator('button[class*="theme"], button[aria-label*="theme"], button[aria-label*="Theme"], [data-testid="theme-toggle"]').first()

    if (await themeButton.isVisible({ timeout: 2000 })) {
      console.log('Found theme button, clicking...')
      await themeButton.click()
      await page.waitForTimeout(500)

      // Check theme after toggle
      const afterTheme = await html.getAttribute('class') || await html.getAttribute('data-theme') || 'no-theme-attr'
      console.log('Theme after toggle:', afterTheme)

      // Take screenshot after toggle
      await page.screenshot({ path: 'test-artifacts/02-theme-toggled.png' })
    } else {
      console.log('Theme button not found with standard selectors')
      // Try to find any button that might be theme related
      const buttons = await page.locator('button').all()
      for (const btn of buttons) {
        const text = await btn.textContent()
        const aria = await btn.getAttribute('aria-label')
        if (text?.toLowerCase().includes('theme') || aria?.toLowerCase().includes('theme')) {
          console.log('Found potential theme button:', text, aria)
        }
      }
    }
  })

  test('3. Documentation page', async ({ page }) => {
    await page.goto('http://localhost:4321/docs/getting-started/introduction')
    await page.waitForLoadState('networkidle')

    // Take full page screenshot
    await page.screenshot({
      path: 'test-artifacts/03-docs-page-full.png',
      fullPage: true
    })

    // Take viewport screenshot
    await page.screenshot({
      path: 'test-artifacts/03-docs-page-viewport.png'
    })

    // Check if content loaded
    const mainContent = page.locator('main, article, [role="main"]')
    const contentVisible = await mainContent.isVisible({ timeout: 2000 })
    console.log('Main content visible:', contentVisible)
  })

  test('4. TOC (Table of Contents) check', async ({ page }) => {
    await page.goto('http://localhost:4321/docs/getting-started/introduction')
    await page.waitForLoadState('networkidle')

    // Look for TOC elements
    const tocSelectors = [
      'nav[aria-label*="Table of Contents"]',
      '[class*="toc"]',
      '[class*="TableOfContents"]',
      'aside nav',
      '[data-testid="toc"]',
      '.toc',
      '#toc'
    ]

    let tocFound = false
    let tocSelector = ''

    for (const selector of tocSelectors) {
      const toc = page.locator(selector)
      if (await toc.isVisible({ timeout: 1000 }).catch(() => false)) {
        tocFound = true
        tocSelector = selector
        console.log('TOC found with selector:', selector)

        // Take screenshot of TOC
        await toc.screenshot({ path: 'test-artifacts/04-toc-element.png' })
        break
      }
    }

    if (!tocFound) {
      console.log('TOC not found with standard selectors')

      // Take screenshot of right side of page where TOC usually is
      await page.screenshot({
        path: 'test-artifacts/04-toc-area.png',
        clip: { x: 1200, y: 0, width: 400, height: 800 }
      })

      // List all nav elements
      const navs = await page.locator('nav').all()
      console.log('Found', navs.length, 'nav elements')
      for (let i = 0; i < navs.length; i++) {
        const text = await navs[i].textContent()
        const aria = await navs[i].getAttribute('aria-label')
        console.log(`Nav ${i}: aria="${aria}", text="${text?.substring(0, 50)}..."`)
      }
    }

    // Also take a wider viewport screenshot to show the TOC area
    await page.setViewportSize({ width: 1600, height: 900 })
    await page.screenshot({ path: 'test-artifacts/04-docs-wide-viewport.png' })
  })
})
