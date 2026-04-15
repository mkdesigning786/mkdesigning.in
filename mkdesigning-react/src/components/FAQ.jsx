import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'How long does it take to build a website?',
      a: 'A standard static website takes 5–7 business days, while dynamic websites and e-commerce projects typically take 2–4 weeks depending on features and complexity.',
    },
    {
      q: 'Do you provide hosting and domain registration?',
      a: 'Yes, we can assist with domain registration and hosting setup. We recommend trusted hosting providers and can manage the entire setup process for you.',
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Absolutely! Every website we build is fully responsive and tested across all major devices — smartphones, tablets, laptops, and desktops.',
    },
    {
      q: 'Can I update the website content myself?',
      a: 'Yes, for dynamic websites we provide an easy-to-use admin panel where you can update text, images, blog posts, and product listings without any coding knowledge.',
    },
    {
      q: 'Do you offer post-launch support?',
      a: 'Yes, all our packages include free post-launch support. After the free period, we offer affordable monthly maintenance plans for ongoing updates, security patches, and backups.',
    },
    {
      q: 'What is your payment process?',
      a: 'We work with a 50% advance to start the project and 50% upon completion before final delivery. For larger projects, we offer milestone-based payments.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes! We specialize in website redesigns. We\'ll analyze your current site, preserve what works, and transform the rest into a modern, high-performing website.',
    },
    {
      q: 'Do you offer web development training?',
      a: 'Yes, we offer hands-on training in HTML, CSS, JavaScript, PHP, Angular, React, and SQL. Our courses include live classes, real-world projects, and completion certificates.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="cp-section" id="faq">
      <div className="cp-container">
        <div className="cp-section-label">FAQ</div>
        <h2 className="cp-heading cp-heading-center">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <div className="cp-faq-list">
          {faqs.map((f, i) => (
            <div className={`cp-faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
              <button className="cp-faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span>{f.q}</span>
                <i className={`fas fa-chevron-down cp-faq-arrow ${openIndex === i ? 'rotated' : ''}`}></i>
              </button>
              <div className="cp-faq-answer" style={{ maxHeight: openIndex === i ? '300px' : '0' }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
