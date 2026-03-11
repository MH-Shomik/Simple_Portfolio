import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { chatbotIntents } from '../data/chatbotData'
import { buildEngine } from '../utils/chatbotEngine'

// ─── Fallback replies when confidence is too low ──────────────────────────────
const FALLBACK = [
  "I'm trained to answer questions about Mehedi Hassan Shomik only. Try asking about his skills, projects, education, or contact info! 😊",
  "Hmm, I don't have info on that. Ask me about his background, tech skills, projects, or how to reach him!",
  "That's outside my knowledge. I specialise in everything about Mehedi! Try: 'What are his skills?' or 'Tell me about his projects.'",
]

// ─── Typing dots indicator ────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex justify-start">
      <div
        className="px-4 py-3 rounded-2xl rounded-tl-sm"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(80,120,180,0.15)',
        }}
      >
        <span className="flex items-center gap-1">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: 'var(--muted-2)',
                animation: 'chatBounce 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

// ─── Chat message bubble ──────────────────────────────────────────────────────
function Bubble({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className="text-sm leading-relaxed px-3 py-2.5 max-w-[82%]"
        style={{
          borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
          background: isUser ? 'rgba(61,217,208,0.14)' : 'rgba(255,255,255,0.05)',
          color: isUser ? 'var(--accent)' : 'var(--text)',
          border: `1px solid ${isUser ? 'rgba(61,217,208,0.28)' : 'rgba(80,120,180,0.15)'}`,
          whiteSpace: 'pre-wrap',
        }}
      >
        {msg.content}
      </div>
    </div>
  )
}

// ─── Suggested questions ──────────────────────────────────────────────────────
const SUGGESTIONS = [
  'What are his top skills?',
  'Tell me about his projects',
  'What is his education?',
  'How can I contact him?',
]

// ─── Engine & welcome message ─────────────────────────────────────────────────
let engine = null   // built once on first mount

const WELCOME = {
  role: 'model',
  content: "👋 Hi! I'm Mehedi's AI assistant — trained on his resume using TF-IDF & cosine similarity. No API key needed, runs 100% in your browser!\n\nAsk me about his skills, projects, experience, or education.",
}

// ─── ChatBot component ────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen]             = useState(false)
  const [messages, setMessages]     = useState([WELCOME])
  const [input, setInput]           = useState('')
  const [loading, setLoading]       = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  // Build TF-IDF engine once
  useEffect(() => {
    engine = buildEngine(chatbotIntents)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  function sendMessage(text) {
    const trimmed = (text ?? input).trim()
    if (!trimmed || loading) return

    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setLoading(true)

    // Simulate a short thinking delay for natural feel
    setTimeout(() => {
      const response =
        engine?.query(trimmed) ??
        FALLBACK[Math.floor(Math.random() * FALLBACK.length)]

      setMessages(prev => [...prev, { role: 'model', content: response }])
      setLoading(false)
    }, 650 + Math.random() * 500)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Bounce animation keyframes */}
      <style>{`
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* ── Chat panel ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="chat-panel"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 'min(360px, calc(100vw - 24px))',
                maxHeight: 520,
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--surface)',
                border: '1px solid rgba(61,217,208,0.18)',
                borderRadius: 18,
                boxShadow: '0 30px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(61,217,208,0.06)',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div
                className="px-4 py-3 flex items-center justify-between flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(80,120,180,0.12)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(61,217,208,0.15)', border: '1px solid rgba(61,217,208,0.3)' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                        fill="none" stroke="var(--accent)" strokeWidth="1.5"
                      />
                      <circle cx="12" cy="12" r="3" fill="var(--accent)" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-page-text font-display font-semibold text-sm leading-none mb-0.5">
                      Ask About Shomik
                    </p>
                    <p className="label text-xs" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}>
                      AI ASSISTANT · NO API KEY
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                  style={{ color: 'var(--muted-2)', background: 'transparent' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-3"
                style={{ overflowY: 'auto' }}
              >
                {messages.map((msg, i) => (
                  <Bubble key={i} msg={msg} />
                ))}

                {/* Suggested questions (shown only initially) */}
                {showSuggestions && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {SUGGESTIONS.map(q => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs px-3 py-1.5 rounded-full transition-all duration-150"
                        style={{
                          background: 'rgba(61,217,208,0.08)',
                          border: '1px solid rgba(61,217,208,0.2)',
                          color: 'var(--muted-2)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(61,217,208,0.15)'
                          e.currentTarget.style.color = 'var(--accent)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(61,217,208,0.08)'
                          e.currentTarget.style.color = 'var(--muted-2)'
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </motion.div>
                )}

                {loading && <TypingDots />}
                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div
                className="p-3 flex-shrink-0"
                style={{ borderTop: '1px solid rgba(80,120,180,0.12)' }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(80,120,180,0.18)',
                  }}
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask about Mehedi…"
                    disabled={loading}
                    maxLength={200}
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: 'var(--text)', caretColor: 'var(--accent)' }}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: input.trim() && !loading ? 'var(--accent)' : 'rgba(61,217,208,0.1)',
                      cursor: input.trim() && !loading ? 'pointer' : 'default',
                    }}
                    aria-label="Send"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                        stroke={input.trim() && !loading ? '#06080f' : 'var(--muted-2)'}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <p
                  className="text-center mt-1.5 text-xs"
                  style={{ color: 'rgba(110,139,160,0.5)', fontSize: 10 }}
                >
                  TF-IDF · Cosine Similarity · Trained on resume data
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Floating trigger button ── */}
        <motion.button
          onClick={() => setOpen(v => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="w-14 h-14 rounded-full flex items-center justify-center relative"
          style={{
            background: open ? 'rgba(61,217,208,0.15)' : 'var(--accent)',
            border: open ? '1px solid rgba(61,217,208,0.4)' : 'none',
            boxShadow: open ? 'none' : '0 8px 28px rgba(61,217,208,0.38)',
          }}
          aria-label={open ? 'Close chat' : 'Open AI assistant'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                style={{ color: 'var(--accent)', fontSize: 18, fontWeight: 700, lineHeight: 1 }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.svg
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
                width="22" height="22" viewBox="0 0 24 24" fill="none"
              >
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  stroke="#06080f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </AnimatePresence>
          {/* Pulse ring when closed */}
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: 'rgba(61,217,208,0.3)', animationDuration: '2.5s' }}
            />
          )}
        </motion.button>
      </div>
    </>
  )
}
