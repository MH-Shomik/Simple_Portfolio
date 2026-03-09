import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if ('ontouchstart' in window) return
    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0, raf

    const onMove = e => { mx = e.clientX; my = e.clientY }
    const loop   = () => {
      dot.style.left  = `${mx}px`; dot.style.top  = `${my}px`
      rx += (mx - rx) * 0.13;       ry += (my - ry) * 0.13
      ring.style.left = `${rx}px`; ring.style.top = `${ry}px`
      raf = requestAnimationFrame(loop)
    }
    const enter = () => ring.classList.add('expanded')
    const leave = () => ring.classList.remove('expanded')

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
