import { useEffect, useRef } from 'react'

const CREDENTIALS = [
  { icon: '🎓', title: 'MSc Cybersecurity', description: 'Security engineering foundations behind PCI-DSS, tokenization, 3DS2 and OAuth2 work in payments.' },
  { icon: '🏛', title: 'National Polytechnic University of Armenia', description: 'University studies in engineering and computer science in Yerevan.' },
  { icon: '☕', title: 'Oracle Certified Java Developer (OCA)', description: 'Oracle certification for Java SE programming.' },
  { icon: '✅', title: 'ISTQB Certified Tester', description: 'Testing and quality engineering certification from my automation-framework years.' },
  { icon: '🏆', title: 'Recognition Award · Webb Fontaine', description: 'Award received at Webb Fontaine for work on customs and trade automation.' },
  { icon: '📜', title: 'Ownership Acknowledgment · Workfront', description: 'Ownership recognition received at Workfront, an Adobe company.' },
]

function CredentialCard({ item }: { item: typeof CREDENTIALS[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('fade-in')
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="achievement-card" ref={ref}>
      <div className="achievement-icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">06.</span> Education &amp; Certifications
        </h2>
        <div className="achievements-grid">
          {CREDENTIALS.map(c => (
            <CredentialCard key={c.title} item={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
