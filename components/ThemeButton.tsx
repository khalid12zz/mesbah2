"use client"
import { themes } from "@/lib/themes"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MdSettings } from "react-icons/md"

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(resolvedTheme)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div className="tooltip tooltip-left" data-tip="settings">
        <label tabIndex={0} className="btn m-1 text-3xl btn-circle bg-clr100">
          <MdSettings />
        </label>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <h2>Theme</h2>
        <select
          className="select select-accent w-full max-w-xs"
          value={currentTheme}
          onChange={(e) => {
            const theme = e.currentTarget.value
            setCurrentTheme(theme)
            setTheme(theme)
          }}
        >
          {themes.map((theme) => {
            if (theme === currentTheme) {
              return (
                <option key={theme} disabled value={theme}>
                  {theme}
                </option>
              )
            }
            return (
              <option key={theme} value={theme}>
                {theme}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default ThemeButton
