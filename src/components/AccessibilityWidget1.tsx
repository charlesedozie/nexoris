"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes";
import {
  Accessibility,
  Eye,
  RotateCcw,
  Volume2,
  Plus,
  Minus,
  X,
  Globe,
  ScanLine,
  Palette,
  MoveHorizontal,
  Keyboard
} from "lucide-react"

type Lang = "en" | "fr" | "ha"

const MIN_FONT = 14
const MAX_FONT = 28

const text = {
  en: {
    title: "Accessibility",
    speech: "Read selected text",
    reset: "Reset all",
    contrast: "High contrast",
    dyslexic: "Dyslexia-friendly",
    ruler: "Reading ruler",
    keyboard: "Keyboard mode",
    spacing: "Line spacing",
    language: "Language",
    colorblind: "Color blind filter",
  },
  fr: {
    title: "Accessibilité",
    speech: "Lire le texte sélectionné",
    reset: "Réinitialiser",
    contrast: "Contraste élevé",
    dyslexic: "Police dyslexie",
    ruler: "Règle de lecture",
    keyboard: "Mode clavier",
    spacing: "Espacement",
    language: "Langue",
    colorblind: "Filtre daltonien",
  },
  ha: {
    title: "Samun dama",
    speech: "Karanta rubutun da aka zaɓa",
    reset: "Sake saitawa",
    contrast: "Bambanci mai ƙarfi",
    dyslexic: "Rubutun masu dyslexia",
    ruler: "Mai biyowa da karatu",
    keyboard: "Yanayin madannai",
    spacing: "Tazarar layi",
    language: "Harshe",
    colorblind: "Matsalar gani",
  },
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [contrast, setContrast] = useState(false)
  const [dyslexic, setDyslexic] = useState(false)
  const [ruler, setRuler] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [keyboardMode, setKeyboardMode] = useState(false)
  const [lineHeight, setLineHeight] = useState(1.6)
  const [lang, setLang] = useState<Lang>("en")
  const [filter, setFilter] = useState("none")
const { resolvedTheme } = useTheme()
const [mounted, setMounted] = useState(false)

useEffect(() => setMounted(true), [])
  const rulerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const t = text[lang]

  /* Load saved prefs */
  useEffect(() => {
    const saved = localStorage.getItem("a11y")
    if (saved) Object.assign({
      setFontSize,
      setContrast,
      setDyslexic,
      setRuler,
      setFocusMode,
      setLineHeight,
      setLang,
      setFilter
    }, JSON.parse(saved))
  }, [])

  /* Save prefs */
  useEffect(() => {
    localStorage.setItem(
      "a11y",
      JSON.stringify({
        fontSize,
        contrast,
        dyslexic,
        ruler,
        focusMode,
        lineHeight,
        lang,
        filter
      })
    )

    document.documentElement.style.fontSize = `${fontSize}px`
    //document.body.style.lineHeight = String(lineHeight)
    document.documentElement.style.setProperty("--a11y-line-height", String(lineHeight))
    document.body.classList.toggle("high-contrast", contrast)
    document.body.classList.toggle("focus-mode", focusMode)
    document.body.style.filter = filter
    document.body.style.fontFamily = dyslexic
      ? "Arial, Verdana, Tahoma"
      : ""

  }, [fontSize, contrast, dyslexic, ruler, focusMode, lineHeight, lang, filter])

  /* Reading ruler */
  useEffect(() => {
    if (!ruler) return

    const move = (e: MouseEvent) => {
      if (!rulerRef.current) return
      rulerRef.current.style.top = `${e.pageY}px`
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [ruler])

  /* Keyboard nav mode */
  useEffect(() => {
    if (!keyboardMode) return
    document.body.classList.add("keyboard-nav")

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setKeyboardMode(false)
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [keyboardMode])

  /* TTS */
  const handleSpeech = () => {
    const txt =
      window.getSelection()?.toString() ||
      document.querySelector("main")?.textContent ||
      document.body.innerText

    const utter = new SpeechSynthesisUtterance(txt)
    speechSynthesis.cancel()
    speechSynthesis.speak(utter)
  }

  const resetAll = () => {
    setFontSize(16)
    setContrast(false)
    setDyslexic(false)
    setRuler(false)
    setFocusMode(false)
    setKeyboardMode(false)
    setLineHeight(1.6)
    setLang("en")
    setFilter("none")
  }

if (!mounted) return null

const isDark = resolvedTheme === "dark"
  return (
    <div className={`${isDark ? "bg-slate-900 text-gray-100" : "text-gray-900"}`}>
      {/* Floating Button */}
      <button
        aria-label="Accessibility settings"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 pointer right-6 z-[9999] bg-black text-white p-4 rounded-full shadow-xl"
      >
        <Accessibility />
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility panel"
          className={`fixed bottom-4 right-4 left-4 md:left-auto md:w-[340px]
max-w-[90vw] max-h-[80vh] overflow-y-auto shadow-2xl rounded-2xl p-5 z-[9999]
${isDark ? "bg-slate-900 text-gray-100" : "bg-white text-gray-900"}`}
>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold mb-2">{t.title}</h2>
            <button className="pointer" onClick={() => setOpen(false)}><X /></button>
          </div>

          {/* Font size */}
          <div className="flex justify-between mb-3">
            <span>Font</span>
            <div className="flex gap-2">
              <button onClick={() => setFontSize(f => Math.max(MIN_FONT, f - 1))}><Minus /></button>
              <span>{fontSize}px</span>
              <button onClick={() => setFontSize(f => Math.min(MAX_FONT, f + 1))}><Plus /></button>
            </div>
          </div>

          {/* Line spacing */}
          <label className="flex justify-between text-sm mb-1">
  <span>{t.spacing}</span>
  <span className="font-mono">{lineHeight}</span>
</label>
          <input
            type="range"
            min="1.2"
            max="2.6"
            step="0.1"
            value={lineHeight}
            onChange={e => setLineHeight(Number(e.target.value))}
            className="w-full mb-3"
          />

         

          {/* Color Blind Modes */}
          <label>{t.colorblind}</label>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className={`w-full mb-3 pointer ${isDark ? " darkModeBg " : " bg-white "}`}
          >
            <option value="none">Normal</option>
            <option value="grayscale(1)">Achromatopsia</option>
            <option value="sepia(1)">Protanopia</option>
            <option value="hue-rotate(90deg)">Deuteranopia</option>
            <option value="hue-rotate(200deg)">Tritanopia</option>
          </select>



          <button onClick={() => setRuler(!ruler)} className="a11y-btn pointer">
            <MoveHorizontal size={16} /> {t.ruler}
          </button>

          <button onClick={() => setKeyboardMode(!keyboardMode)} className="a11y-btn pointer">
            <Keyboard size={16} /> {t.keyboard}
          </button>

          <button onClick={handleSpeech} className="a11y-btn pointer">
            <Volume2 size={16} /> {t.speech}
          </button>

          <button onClick={resetAll} className="a11y-btn text-red-600 pointer">
            <RotateCcw size={16} /> {t.reset}
          </button>
        </div>
      )}

      {/* Reading ruler */}
      {ruler && (
        <div
          ref={rulerRef}
          className="fixed left-0 right-0 h-[40px] bg-black/30 pointer-events-none z-[9990]"
        />
      )}

      {/* Global Styles */}
      <style jsx global>{`
        .high-contrast {
          background: #000 !important;
          color: #fff !important;
        }

        .focus-mode *:not(:focus) {
          opacity: 0.3;
          transition: 0.2s;
        }

        .keyboard-nav :focus {
          outline: 4px solid #3b82f6 !important;
        }

 .a11y-btn {
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.2s;
  background: rgb(243 244 246); /* light */
  color: rgb(17 24 39);
}

.dark .a11y-btn {
  background: rgb(30 41 59); /* slate-800 */
  color: rgb(226 232 240);
  margin-bottom:5px;
}

.a11y-btn:hover {
  background: rgb(229 231 235);
}
.dark .a11y-btn:hover {
  background: rgb(51 65 85);
}

      `}</style>
    </div>
  )
}
