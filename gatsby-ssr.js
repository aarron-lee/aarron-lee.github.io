import React from "react"

const InjectInitialTheme = () => {
  const codeToRunOnClient = `
(function() {
  const LOCALSTORAGE_KEY = "currentThemeColor"
  window.__initialColor = window.localStorage.getItem(LOCALSTORAGE_KEY) || "light"
})()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InjectInitialTheme />)
}
