import { useEffect, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  Download,
  FileText,
  Headphones,
  IndianRupee,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

const queryClient = new QueryClient();

type IconType = typeof ArrowRight;

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/process', label: 'How it works' },
  { href: '/about', label: 'About us' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/support', label: 'Support' },
];

function Brand() {
  return (
    <Link href="/" className="brand" data-testid="link-brand">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-word">aavansh</span>
    </Link>
  );
}

function Header({ onApply }: { onApply: () => void }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="topbar container-wide">
      <Brand />
      <nav className="nav-menu" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`nav-link ${location === item.href ? 'active' : ''}`}
            data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
          >
            {item.label}
          </Link>
        ))}
        <button className="btn btn-primary" onClick={onApply} data-testid="button-header-apply">
          Check eligibility <ArrowRight size={16} />
        </button>
      </nav>
      <button
        className="mobile-menu"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
        data-testid="button-mobile-menu"
      >
        {mobileOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
              data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {item.label}
            </Link>
          ))}
          <button className="btn btn-primary" onClick={() => { setMobileOpen(false); onApply(); }} data-testid="button-mobile-apply">
            Check eligibility <ArrowRight size={16} />
          </button>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-copy">A clearer way forward when life asks for a little more. Built for India, designed around your dignity.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/process">How it works</Link>
            <Link href="/about">About Aavansh</Link>
            <Link href="/faqs">Common questions</Link>
          </div>
          <div>
            <h4>Borrowers</h4>
            <Link href="/dashboard">Your dashboard</Link>
            <Link href="/support">Get support</Link>
            <a href="mailto:care@aavansh.in">Email us</a>
          </div>
          <div>
            <h4>Our promise</h4>
            <p className="footer-copy" style={{ marginTop: 0 }}>Clear terms. No pressure. Human help when you need it.</p>
            <span className="mono" style={{ color: 'hsl(37 93% 55%)', fontSize: 11 }}>MADE FOR MOVING FORWARD</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Aavansh Financial Services Pvt. Ltd.</span>
          <span>Privacy &nbsp;·&nbsp; Responsible lending &nbsp;·&nbsp; Grievance redressal</span>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children, onApply }: { children: ReactNode; onApply: () => void }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);
  return (
    <div className="site-shell">
      <Header onApply={onApply} />
      <main className="page-in">{children}</main>
      <Footer />
    </div>
  );
}

function LoanCard() {
  return (
    <div className="loan-card rise-3" data-testid="card-loan-overview">
      <div className="loan-card-top">
        <div>
          <div className="loan-card-label">Your flexible credit line</div>
          <div className="loan-card-value">₹40,000</div>
        </div>
        <span className="loan-card-chip">SIMPLE TERMS</span>
      </div>
      <div className="loan-card-visual" aria-hidden="true">
        <svg className="chart-line" viewBox="0 0 420 145" fill="none">
          <path d="M2 115 C48 112 60 85 98 94 C139 104 138 65 181 75 C220 84 229 103 263 78 C298 52 303 66 338 42 C362 26 381 37 418 9" stroke="#F5B638" strokeWidth="3" strokeLinecap="round" />
          <path d="M2 115 C48 112 60 85 98 94 C139 104 138 65 181 75 C220 84 229 103 263 78 C298 52 303 66 338 42 C362 26 381 37 418 9 V145 H2 Z" fill="url(#chart-fill)" opacity=".17" />
          <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#F5B638" /><stop offset="1" stopColor="#F5B638" stopOpacity="0" /></linearGradient></defs>
        </svg>
      </div>
      <div className="loan-card-bottom">
        <div><span>Starting from</span><strong>₹1,200 / month</strong></div>
        <div style={{ textAlign: 'right' }}><span>Tenure</span><strong>3–12 months</strong></div>
      </div>
    </div>
  );
}

function Home({ onApply }: { onApply: () => void }) {
  const featureItems: { icon: IconType; title: string; copy: string }[] = [
    { icon: LockKeyhole, title: 'Terms you can actually read', copy: 'See your monthly amount, total repayment and every fee before you decide. No fine print maze.' },
    { icon: Clock3, title: 'A pace that respects yours', copy: 'A guided application that takes a few minutes, not an afternoon. Pause and come back whenever you need.' },
    { icon: Headphones, title: 'People on the other end', copy: 'Our care team speaks plainly, listens properly and helps you make the choice that feels right.' },
  ];
  return (
    <>
      <section className="hero">
        <div className="container-wide hero-grid">
          <div>
            <div className="eyebrow rise-1">Small loan. Clear next step.</div>
            <h1 className="display rise-2">A little room to <em>move forward.</em></h1>
            <p className="hero-copy rise-3">Personal loans up to ₹40,000, with terms that make sense and a process that treats you like a person.</p>
            <div className="hero-actions rise-4">
              <button className="btn btn-primary" onClick={onApply} data-testid="button-hero-apply">See what you could get <ArrowRight size={17} /></button>
              <Link href="/process" className="btn btn-quiet" data-testid="link-hero-process">How it works <ChevronRight size={16} /></Link>
            </div>
            <div className="trust-line rise-4">
              <div className="trust-dots" aria-hidden="true"><span>R</span><span>M</span><span>S</span></div>
              <span>Chosen by 18,000+ people across India</span>
            </div>
          </div>
          <LoanCard />
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split-heading">
            <div>
              <div className="eyebrow">Why Aavansh</div>
              <h2 className="section-title display text-balance">Borrowing should not feel like a test.</h2>
            </div>
            <p className="section-lead">Unexpected expenses already carry enough weight. We remove the confusion so you can focus on the thing that matters.</p>
          </div>
          <div className="feature-layout">
            <div className="feature-aside">
              <div className="big-mark">“</div>
              <h3>Clarity is a form of care.</h3>
              <p>That is why every number, option and next step is shown upfront.</p>
            </div>
            <div className="feature-list">
              {featureItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className={`feature-item rise-${index + 1}`} key={item.title}>
                    <div className="feature-icon"><Icon size={20} strokeWidth={1.8} /></div>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="number-grid">
            <div className="number-block"><div className="number-value">₹40k</div><div className="number-label">maximum personal loan</div></div>
            <div className="number-block"><div className="number-value">3–12</div><div className="number-label">months to choose from</div></div>
            <div className="number-block"><div className="number-value">24/7</div><div className="number-label">application access, your pace</div></div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container-wide quote">
          <div className="quote-mark">“</div>
          <p>“I knew exactly what I would repay before I accepted. That made all the difference.”</p>
          <small>— Meera, Pune · Aavansh borrower</small>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-wide">
          <div className="split-heading">
            <div><div className="eyebrow">Ready when you are</div><h2 className="section-title display">A calmer way to get there.</h2></div>
            <p className="section-lead">Start with a quick eligibility check. It does not affect your credit score, and there is no obligation to continue.</p>
          </div>
          <button className="btn btn-accent" onClick={onApply} data-testid="button-bottom-apply">Start my application <ArrowRight size={16} /></button>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container-wide"><div className="eyebrow">{eyebrow}</div><h1 className="display">{title}</h1><p>{copy}</p></div></section>;
}

function ProcessPage({ onApply }: { onApply: () => void }) {
  const steps = [
    { icon: ClipboardCheck, title: 'Tell us what you need', copy: 'Answer a few simple questions about yourself and the amount that would help. It takes about five minutes.', note: 'No impact to your credit score' },
    { icon: BarChart3, title: 'See a clear offer', copy: 'If eligible, you will see your amount, monthly repayment, tenure and total cost together — before you make a choice.', note: 'You are always in control' },
    { icon: BadgeCheck, title: 'Complete your details', copy: 'Confirm your information and upload a couple of documents securely. Our checks are designed to be quick and respectful.', note: 'Your information stays protected' },
    { icon: Banknote, title: 'Receive your funds', copy: 'Once approved, the amount is sent directly to your bank account. You can follow every update from your dashboard.', note: 'Support is one message away' },
  ];
  return <>
    <PageHero eyebrow="The Aavansh way" title="From a question to a clear next step." copy="A straightforward journey built for real life. No chasing, no jargon, no wondering what happens next." />
    <section className="section">
      <div className="container-wide">
        <div className="process-wrap">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return <div className={`step rise-${(index % 4) + 1}`} key={step.title}>
              <div className="step-num">{index + 1}</div>
              <div><div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon size={15} /> Step {index + 1}</div><h2 className="display">{step.title}</h2><p>{step.copy}</p><span className="step-note"><Check size={13} /> {step.note}</span></div>
            </div>;
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 22 }}><button className="btn btn-primary" onClick={onApply} data-testid="button-process-apply">Start with eligibility <ArrowRight size={16} /></button></div>
      </div>
    </section>
    <section className="quote-section"><div className="container-wide quote"><div className="quote-mark">“</div><p>One clear step at a time is still progress.</p><small>That is the promise behind Aavansh.</small></div></section>
  </>;
}

function DashboardPage() {
  const [notice, setNotice] = useState('');
  const repayments = [
    { month: '15 May 2024', amount: '₹4,250', state: 'Paid', cls: 'paid' },
    { month: '15 Jun 2024', amount: '₹4,250', state: 'Paid', cls: 'paid' },
    { month: '15 Jul 2024', amount: '₹4,250', state: 'Upcoming', cls: 'pending' },
    { month: '15 Aug 2024', amount: '₹4,250', state: 'Upcoming', cls: 'pending' },
  ];
  const download = (name: string) => {
    setNotice(`${name} is ready — your download would begin here.`);
    window.setTimeout(() => setNotice(''), 4200);
  };
  return <div className="dashboard">
    <div className="container-wide">
      <div className="dash-head">
        <div><div className="eyebrow">Your Aavansh space</div><h1 className="display" data-testid="text-dashboard-greeting">Good morning, Riya.</h1></div>
        <Link href="/support" className="btn btn-secondary" data-testid="link-dashboard-support"><MessageCircle size={16} /> Need a hand?</Link>
      </div>
      {notice && <div className="success-box" role="status" style={{ marginBottom: 20 }} data-testid="status-download">{notice}</div>}
      <div className="dash-grid">
        <div className="dash-main">
          <div className="balance-card" data-testid="card-outstanding-balance">
            <div className="loan-card-label">Outstanding balance</div>
            <h2>₹12,750</h2>
            <div className="balance-meta"><div><span>Original amount</span><strong>₹25,000</strong></div><div><span>Next payment</span><strong>15 Jul · ₹4,250</strong></div><div><span>Loan reference</span><strong>AV-28419</strong></div></div>
          </div>
          <div className="surface schedule-card">
            <div className="card-title-row"><h3>Repayment schedule</h3><span className="mono" style={{ fontSize: 10, color: 'hsl(var(--muted-foreground))' }}>4 PAYMENTS</span></div>
            <div className="table-wrap"><table className="schedule-table"><thead><tr><th>Due date</th><th>Amount</th><th>Status</th></tr></thead><tbody>{repayments.map((item) => <tr key={item.month}><td>{item.month}</td><td>{item.amount}</td><td className={item.cls}>{item.state}</td></tr>)}</tbody></table></div>
          </div>
        </div>
        <aside className="dash-side">
          <div className="surface status-card" data-testid="card-application-status">
            <div className="status-top"><span className="eyebrow">Application status</span><span className="status-badge">Active loan</span></div>
            <h3>Your loan is on track</h3><p>Two of six repayments complete. You are doing great.</p><div className="progress-track" aria-label="Loan repayment progress"><span /></div><div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 9, fontSize: 11, color: 'hsl(var(--muted-foreground))' }}><span>68% remaining</span><span>2 of 6 paid</span></div>
          </div>
          <div className="surface side-card">
            <h3>Your documents</h3>
            <div className="action-list">
              <button className="action-row" onClick={() => download('Loan agreement')} data-testid="button-download-agreement"><span><FileText size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Loan agreement</span><Download size={15} /></button>
              <button className="action-row" onClick={() => download('Repayment schedule')} data-testid="button-download-schedule"><span><CalendarDays size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Repayment schedule</span><Download size={15} /></button>
            </div>
          </div>
          <div className="side-card support-card"><h3>Questions are welcome.</h3><p>Talk to a real person about your account or next payment.</p><Link href="/support" className="btn btn-primary" data-testid="link-dashboard-contact">Contact support <ArrowRight size={15} /></Link></div>
        </aside>
      </div>
    </div>
  </div>;
}

function AboutPage() {
  const values: { icon: IconType; title: string; copy: string }[] = [
    { icon: ShieldCheck, title: 'We show our work', copy: 'A fair decision starts with clear information, not clever wording.' },
    { icon: Sparkles, title: 'We keep it human', copy: 'Behind every application is a person with a real reason. We never forget that.' },
    { icon: IndianRupee, title: 'We lend responsibly', copy: 'The right loan is one that helps you move forward without pulling you back.' },
  ];
  return <>
    <PageHero eyebrow="Who we are" title="Credit that leaves room for dignity." copy="Aavansh exists to make short-term borrowing feel more considered. We build simple financial tools for the moments that do not wait." />
    <section className="section"><div className="container-wide about-grid"><div className="about-copy"><div className="eyebrow">Our point of view</div><h2 className="section-title display">Money is personal. The experience should be too.</h2><p>Most financial products ask people to speak a language they were never taught. We are changing that — one clear screen, one honest answer and one thoughtful interaction at a time.</p><p>Founded in India, Aavansh is for the everyday in-between moments: a repair, a move, a family need or a chance worth taking.</p><div className="belief">“Good credit should make tomorrow feel possible, not more complicated.”</div></div><div className="about-art"><div className="about-art-caption"><strong>Less noise.<br />More next.</strong><span>Our north star is simple: make a difficult moment feel a little lighter.</span></div></div></div></section>
    <section className="section section-soft"><div className="container-wide"><div className="eyebrow">What guides us</div><h2 className="section-title display">Three things we will not compromise.</h2><div className="values-grid">{values.map((value) => { const Icon = value.icon; return <div className="surface value-card" key={value.title}><div className="value-icon"><Icon size={22} /></div><h3>{value.title}</h3><p>{value.copy}</p></div>; })}</div></div></section>
  </>;
}

function FaqsPage() {
  const faqs = [
    ['How much can I borrow?', 'Aavansh offers personal loans up to ₹40,000. The amount you see depends on your information and what you can comfortably repay.'],
    ['Will checking my eligibility affect my credit score?', 'No. Checking your initial eligibility does not affect your credit score. We only ask for your consent before any relevant verification.'],
    ['How quickly can I receive the money?', 'Once your application is approved and your details are verified, funds are sent to your registered bank account. Timing can vary by bank.'],
    ['What documents do I need?', 'Usually, a valid identity document, address details and bank information. We will tell you exactly what is needed for your application — nothing extra.'],
    ['Can I repay early?', 'You can ask our support team about early repayment options and any applicable terms. We believe you should always understand your choices before deciding.'],
    ['How do I get help with my loan?', 'Your dashboard has your key details and repayment schedule. For anything else, visit Support and send us a message — a member of our care team will respond.'],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return <><PageHero eyebrow="Questions, answered" title="No question is too basic." copy="The short version is here. If you need a little more context, our support team is happy to help." /><section className="section"><div className="container-wide faq-layout"><div className="faq-intro"><div className="eyebrow">Good to know</div><h2 className="section-title display">Clarity is always a valid ask.</h2><p className="section-lead">We have kept these answers plain on purpose. You should never have to decode a financial product.</p><Link href="/support" className="btn btn-secondary" style={{ marginTop: 24 }} data-testid="link-faq-support">Ask us directly <ArrowRight size={16} /></Link></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button className="faq-question" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)} data-testid={`button-faq-${index}`}><span>{question}</span><ChevronDown size={18} className={`chevron ${open === index ? 'open' : ''}`} /></button>{open === index && <div className="faq-answer" data-testid={`text-faq-answer-${index}`}>{answer}</div>}</div>)}</div></div></section></>;
}

function SupportPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'My application', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'A little more detail will help us respond.';
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  };
  return <><PageHero eyebrow="We are here" title="A real answer, from a real person." copy="Tell us what is on your mind. Our care team usually responds within one business day." /><section className="section"><div className="container-wide support-grid"><div><div className="eyebrow">Reach out</div><h2 className="section-title display">Let’s make this easier.</h2><p className="section-lead">Whether you are midway through an application or simply exploring your options, you can ask us anything.</p><div className="support-contact"><div className="contact-row"><Mail size={18} /><span>care@aavansh.in</span></div><div className="contact-row"><Phone size={18} /><span>1800 123 4400 · Mon–Sat, 9am–7pm</span></div><div className="contact-row"><MessageCircle size={18} /><span>Replies in one business day</span></div></div></div><div className="surface form-card">{submitted ? <div className="success-state"><div className="success-icon"><Check size={31} /></div><h2 className="display">Message received.</h2><p>Thank you for reaching out, {form.name.split(' ')[0] || 'there'}. We will be in touch within one business day.</p><div className="reference">REFERENCE · AVS-{Math.floor(10000 + Math.random() * 80000)}</div><button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: 'My application', message: '' }); }} data-testid="button-send-another">Send another message</button></div> : <form onSubmit={submit} noValidate><div className="card-title-row"><div><div className="eyebrow">Contact form</div><h3 style={{ marginTop: 7, fontSize: 23 }}>How can we help?</h3></div><Headphones size={24} color="hsl(var(--primary))" /></div><div className="form-grid"><div className="field"><label htmlFor="support-name">Your name</label><input id="support-name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Riya Sharma" data-testid="input-support-name" />{errors.name && <span className="field-error">{errors.name}</span>}</div><div className="field"><label htmlFor="support-email">Email address</label><input id="support-email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" data-testid="input-support-email" />{errors.email && <span className="field-error">{errors.email}</span>}</div><div className="field full"><label htmlFor="support-topic">What can we help with?</label><select id="support-topic" value={form.topic} onChange={(e) => update('topic', e.target.value)} data-testid="select-support-topic"><option>My application</option><option>My repayment</option><option>Documents</option><option>Something else</option></select></div><div className="field full"><label htmlFor="support-message">Your message</label><textarea id="support-message" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us a little about what you need..." data-testid="textarea-support-message" />{errors.message && <span className="field-error">{errors.message}</span>}</div></div><div className="modal-actions"><span className="hint">Your details are kept private.</span><button className="btn btn-primary" type="submit" data-testid="button-submit-support">Send message <ArrowRight size={16} /></button></div></form>}</div></div></section></>;
}

function ApplicationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '', amount: '25000', income: '' });
  const [error, setError] = useState('');
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const next = () => {
    if (step === 1 && (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone))) { setError('Enter your name and a valid 10-digit mobile number.'); return; }
    if (step === 2 && (!form.city.trim() || !form.income)) { setError('Add your city and monthly income to continue.'); return; }
    setError('');
    if (step < 2) setStep(2); else setSuccess(true);
  };
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="application-title" data-testid="modal-application">
    {!success ? <><div className="modal-head"><div><div className="eyebrow">Eligibility check · {step} of 2</div><h2 id="application-title" className="display">Let’s start with you.</h2><p>It takes about two minutes. No obligation.</p></div><button className="close-btn" onClick={onClose} aria-label="Close application" data-testid="button-close-application"><X size={17} /></button></div><div className="application-steps" aria-hidden="true"><span className="done" /><span className={step === 2 ? 'done' : ''} /></div>{step === 1 ? <div className="form-grid"><div className="field full"><label htmlFor="app-name">Full name</label><input id="app-name" autoFocus value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="As on your ID" data-testid="input-application-name" /></div><div className="field full"><label htmlFor="app-phone">Mobile number</label><input id="app-phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit mobile number" data-testid="input-application-phone" /></div></div> : <div className="form-grid"><div className="field full"><label htmlFor="app-city">Where do you live?</label><input id="app-city" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="City and state" data-testid="input-application-city" /></div><div className="field"><label htmlFor="app-amount">Amount needed</label><select id="app-amount" value={form.amount} onChange={(e) => update('amount', e.target.value)} data-testid="select-application-amount"><option value="10000">₹10,000</option><option value="25000">₹25,000</option><option value="40000">₹40,000</option></select></div><div className="field"><label htmlFor="app-income">Monthly income</label><select id="app-income" value={form.income} onChange={(e) => update('income', e.target.value)} data-testid="select-application-income"><option value="">Select range</option><option>₹15,000–₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000+</option></select></div></div>}{error && <div className="field-error" role="alert" style={{ marginTop: 14 }}>{error}</div>}<div className="modal-actions"><span className="hint"><LockKeyhole size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Your details are secure</span><button className="btn btn-primary" onClick={next} data-testid="button-application-next">{step === 1 ? 'Continue' : 'Check my eligibility'} <ArrowRight size={16} /></button></div></> : <div className="success-state"><div className="success-icon"><Check size={31} /></div><h2 className="display">You are on your way.</h2><p>Thanks, {form.name.split(' ')[0] || 'there'}. We have saved your eligibility check. A clear offer will be ready for you shortly.</p><div className="reference">REFERENCE · AV-{Math.floor(10000 + Math.random() * 80000)}</div><Link href="/dashboard" className="btn btn-primary" onClick={onClose} data-testid="link-application-dashboard">View sample dashboard <ArrowRight size={16} /></Link></div>}
  </div></div>;
}

function Router({ onApply }: { onApply: () => void }) {
  return <Switch>
    <Route path="/"><Home onApply={onApply} /></Route>
    <Route path="/process"><ProcessPage onApply={onApply} /></Route>
    <Route path="/dashboard"><DashboardPage /></Route>
    <Route path="/about"><AboutPage /></Route>
    <Route path="/faqs"><FaqsPage /></Route>
    <Route path="/support"><SupportPage /></Route>
    <Route component={NotFound} />
  </Switch>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Layout onApply={() => setApplicationOpen(true)}><RoutedErrorBoundary><Router onApply={() => setApplicationOpen(true)} /></RoutedErrorBoundary></Layout>{applicationOpen && <ApplicationModal onClose={() => setApplicationOpen(false)} />}</WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;