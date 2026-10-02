'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Download,
  FileText,
  Home,
  IndianRupee,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  Dumbbell,
  Baby,
  Car,
  Building2,
  CalendarDays,
  Menu,
  X,
} from 'lucide-react'

const brand = {
  project: 'The Courtyard Residences',
  location: 'North Bengaluru',
  eyebrow: 'A signature address by ArisUnitern',
  headline: 'A better everyday begins at home.',
  description:
    'Thoughtfully planned 2 & 3 BHK residences for families who want more light, more room and a neighbourhood that keeps up with life.',
}

const highlights = [
  { icon: Home, label: 'Configuration', value: '2 & 3 BHK residences' },
  { icon: Compass, label: 'Location', value: 'North Bengaluru' },
  { icon: IndianRupee, label: 'Starting from', value: '₹[Price] onwards' },
  { icon: Building2, label: 'Project size', value: '[X] acres' },
]

const amenities = [
  { icon: Waves, title: 'Resort-style pool', text: 'A calm space to slow down and recharge.' },
  { icon: Dumbbell, title: 'Fitness studio', text: 'A dedicated room for your everyday rhythm.' },
  { icon: Leaf, title: 'Landscaped greens', text: 'Open, shaded spaces designed for connection.' },
  { icon: Baby, title: 'Kids’ play zone', text: 'Safe, lively corners made for little explorers.' },
  { icon: ShieldCheck, title: '24/7 security', text: 'Peace of mind, thoughtfully built in.' },
  { icon: Car, title: 'Covered parking', text: 'Convenience for every arrival and departure.' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', alt: 'Warm contemporary living room', label: 'Living room' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85', alt: 'Premium bedroom interior', label: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85', alt: 'Modern open kitchen', label: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85', alt: 'Modern residential exterior', label: 'Exterior' },
]

function Logo() {
  return <a href="#top" className="flex items-center gap-3" aria-label="ArisUnitern home"><span className="grid size-10 place-items-center rounded-xl bg-[#f2b84b] text-[#211940]"><Sparkles className="size-5" /></span><span className="text-lg font-semibold tracking-[0.18em] text-white">ARIS<span className="text-[#f2b84b]">UNITERN</span></span></a>
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    if (!data.get('name') || !data.get('phone')) { setError('Please add your name and phone number.'); return }
    setLoading(true)
    window.setTimeout(() => { setLoading(false); setSubmitted(true); form.reset() }, 650)
  }
  if (submitted) return <div className="flex min-h-56 flex-col items-center justify-center gap-3 text-center"><span className="grid size-12 place-items-center rounded-full bg-[#e7f4ef] text-[#147d65]"><Check /></span><h3 className="text-xl font-semibold text-[#211940]">Thank you for reaching out.</h3><p className="max-w-xs text-sm text-slate-600">A property advisor will connect with you shortly with project details.</p><button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-[#7653b5] underline">Send another enquiry</button></div>
  return <form onSubmit={submit} className={`flex flex-col gap-3 ${compact ? '' : 'rounded-2xl bg-white p-5 shadow-xl shadow-[#211940]/10 sm:p-6'}`}>
    {!compact && <div className="mb-1"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7653b5]">Get the project kit</p><h3 className="mt-1 text-xl font-semibold text-[#211940]">Let’s find your fit.</h3></div>}
    <label className="sr-only" htmlFor="name">Full name</label><input id="name" name="name" placeholder="Full name" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#7653b5] focus:ring-2 focus:ring-[#7653b5]/20" />
    <label className="sr-only" htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="Phone number" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#7653b5] focus:ring-2 focus:ring-[#7653b5]/20" />
    <label className="sr-only" htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="Email address (optional)" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#7653b5] focus:ring-2 focus:ring-[#7653b5]/20" />
    <label className="sr-only" htmlFor="configuration">Preferred configuration</label><select id="configuration" name="configuration" defaultValue="" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600 outline-none focus:border-[#7653b5]"><option value="" disabled>Preferred configuration</option><option>2 BHK</option><option>3 BHK</option><option>Not sure yet</option></select>
    {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
    <button disabled={loading} className="mt-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#211940] px-5 text-sm font-semibold text-white transition hover:bg-[#352961] disabled:opacity-70">{loading ? 'Sending…' : 'Get project details'} {!loading && <ArrowRight className="size-4" />}</button>
    <p className="text-center text-[11px] leading-4 text-slate-500">Your information is safe with us. Our property advisor will contact you shortly.</p>
  </form>
}

export default function ArisUniternLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main id="top" className="min-h-screen bg-[#fbfaf8] text-[#211940] pb-16 lg:pb-0">
    <header className="absolute inset-x-0 top-0 z-20"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Logo /><nav className="hidden items-center gap-8 text-sm text-white/80 md:flex"><a href="#highlights" className="hover:text-white">The project</a><a href="#amenities" className="hover:text-white">Amenities</a><a href="#location" className="hover:text-white">Location</a><a href="#faq" className="hover:text-white">FAQs</a></nav><a href="#enquire" className="hidden rounded-full bg-[#f2b84b] px-5 py-2.5 text-sm font-semibold text-[#211940] transition hover:bg-[#ffd27b] sm:block">Enquire now</a><button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="mx-4 flex flex-col gap-4 rounded-2xl bg-[#211940] p-5 text-sm text-white md:hidden"><a href="#highlights" onClick={() => setMenuOpen(false)}>The project</a><a href="#amenities" onClick={() => setMenuOpen(false)}>Amenities</a><a href="#location" onClick={() => setMenuOpen(false)}>Location</a><a href="#enquire" onClick={() => setMenuOpen(false)}>Enquire now</a></nav>}</header>

    <section className="relative isolate overflow-hidden bg-[#211940] pt-28 text-white lg:pt-36"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,#7653b5_0%,transparent_32%),linear-gradient(115deg,#211940_30%,#38265c_100%)]" /><div className="mx-auto grid max-w-7xl gap-12 px-5 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24"><div className="max-w-2xl"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/80"><span className="size-2 rounded-full bg-[#f2b84b]" /> {brand.eyebrow}</div><h1 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{brand.headline}</h1><p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">{brand.description}</p><div className="mt-8 flex flex-wrap items-center gap-4"><a href="#enquire" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#f2b84b] px-6 text-sm font-bold text-[#211940] hover:bg-[#ffd27b]">Enquire now <ArrowRight className="size-4" /></a><a href="#gallery" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white/10">Explore the home</a></div><div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/60"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#f2b84b]" /> Quality-led construction</span><span className="flex items-center gap-2"><MapPin className="size-4 text-[#f2b84b]" /> North Bengaluru</span></div></div><div className="relative mx-auto w-full max-w-md lg:max-w-none"><div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl"><img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=90" alt="Contemporary ArisUnitern residence exterior" className="h-[390px] w-full rounded-[1.5rem] object-cover sm:h-[480px]" /></div><div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#211940]/90 p-4 backdrop-blur sm:left-auto sm:w-64"><p className="text-xs uppercase tracking-[0.15em] text-[#f2b84b]">Campaign highlight</p><p className="mt-1 font-medium">Premium 2 & 3 BHK homes</p><p className="mt-1 text-xs text-white/60">Starting from ₹[Price] · Limited release</p></div></div></div></section>

    <section className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:grid-cols-4 sm:divide-y-0 lg:px-8">{highlights.map(({ icon: Icon, label, value }) => <div key={label} className="flex items-center gap-3 px-3 py-5 sm:px-5"><Icon className="size-5 shrink-0 text-[#7653b5]" /><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{label}</p><p className="mt-1 text-sm font-semibold text-[#211940]">{value}</p></div></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7653b5]">Built for the long view</p><h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">A home that feels considered, not complicated.</h2><p className="mt-5 max-w-lg leading-7 text-slate-600">From the way sunlight moves through your living room to the ease of getting where you need to go, every detail is shaped around a more effortless way to live.</p><a href="#enquire" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7653b5]">Request the brochure <ArrowRight className="size-4" /></a></div><div id="highlights" className="grid gap-3 sm:grid-cols-2">{['Thoughtful floor plans', 'Connected neighbourhood', 'Quality-first materials', 'Spaces for every generation'].map((item, i) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="text-sm font-bold text-[#f2b84b]">0{i + 1}</span><h3 className="mt-10 text-lg font-semibold">{item}</h3><p className="mt-2 text-sm leading-6 text-slate-500">Designed around how modern families actually live and grow.</p></div>)}</div></div></section>

    <section id="amenities" className="bg-[#f1eee9] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7653b5]">Everyday, elevated</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">The good stuff, built in.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">A considered mix of spaces to move, meet, unwind and make the most of your time at home.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{amenities.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><div className="grid size-11 place-items-center rounded-xl bg-[#f4edff] text-[#7653b5]"><Icon className="size-5" /></div><h3 className="mt-6 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></section>

    <section id="location" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8 lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7653b5]">North Bengaluru</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Close to what moves you.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">Set in a neighbourhood with momentum, The Courtyard Residences keeps work, school, wellness and weekends within reach.</p><div className="mt-8 grid max-w-md grid-cols-2 gap-3">{['[X] min · IT Park', '[X] min · Airport', '[X] min · School', '[X] min · Hospital'].map(x => <div key={x} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold"><Clock3 className="mb-3 size-4 text-[#7653b5]" />{x}</div>)}</div></div><div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#ded8ec]"><div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#b6acd0 1px, transparent 1px), linear-gradient(90deg, #b6acd0 1px, transparent 1px)', backgroundSize: '42px 42px' }} /><div className="absolute left-[28%] top-[30%] grid size-16 place-items-center rounded-full bg-[#7653b5] text-white shadow-xl ring-8 ring-[#7653b5]/20"><MapPin /></div><div className="absolute right-[18%] top-[22%] rounded-lg bg-white px-3 py-2 text-xs font-semibold shadow-lg">IT Park · [X] km</div><div className="absolute bottom-[22%] left-[17%] rounded-lg bg-white px-3 py-2 text-xs font-semibold shadow-lg">Schools · [X] km</div><div className="absolute bottom-6 left-6 rounded-xl bg-[#211940] px-4 py-3 text-xs text-white"><span className="font-semibold">Location advantage</span><br /><span className="text-white/60">Exact distances to be updated</span></div></div></section>

    <section id="gallery" className="bg-[#211940] py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2b84b]">A glimpse of home</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Made for your kind of beautiful.</h2></div><span className="hidden text-sm text-white/50 sm:block">Project imagery · illustrative</span></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{gallery.map((image, i) => <div key={image.label} className={`${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''} group relative overflow-hidden rounded-2xl`}><img src={image.src} alt={image.alt} className={`${i === 0 ? 'h-[420px]' : 'h-[205px]'} w-full object-cover transition duration-500 group-hover:scale-105`} /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-sm font-medium">{image.label}</div></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7653b5]">Find your fit</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Room to live your way.</h2><div className="mt-10 flex flex-col gap-3">{['2 BHK · [Approx. area] sq. ft. · From ₹[Price]', '3 BHK · [Approx. area] sq. ft. · From ₹[Price]'].map(item => <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"><div><p className="font-semibold">{item.split(' · ')[0]}</p><p className="mt-1 text-sm text-slate-500">{item.split(' · ').slice(1).join(' · ')}</p></div><a href="#enquire" className="grid size-10 place-items-center rounded-full bg-[#f4edff] text-[#7653b5]" aria-label={`Get floor plan for ${item.split(' · ')[0]}`}><Download className="size-4" /></a></div>)}</div></div><div className="rounded-[2rem] bg-[#f1eee9] p-7 sm:p-9"><FileText className="size-8 text-[#7653b5]" /><h3 className="mt-8 text-2xl font-semibold">Want the full picture?</h3><p className="mt-3 text-sm leading-6 text-slate-600">Get floor plans, specifications, pricing and availability shared directly by our property team.</p><a href="#enquire" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#211940] px-5 text-sm font-semibold text-white">Get project details <ArrowRight className="size-4" /></a></div></div></section>

    <section className="bg-[#f1eee9] py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-[#211940] p-7 text-white md:col-span-1"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2b84b]">Why ArisUnitern</p><h2 className="mt-5 text-3xl font-semibold">Built with intent.</h2><p className="mt-4 text-sm leading-6 text-white/65">A clear, considered approach to choosing locations, planning spaces and creating homes that hold their value in everyday life.</p></div>{['Transparent conversations', 'Thoughtful planning', 'Quality-led execution', 'A better customer experience'].map((x, i) => <div key={x} className="rounded-2xl bg-white p-7"><span className="grid size-9 place-items-center rounded-full bg-[#f4edff] text-sm font-bold text-[#7653b5]">0{i + 1}</span><h3 className="mt-10 font-semibold">{x}</h3><p className="mt-2 text-sm leading-6 text-slate-500">A placeholder differentiator ready to be replaced with your verified proof point.</p></div>)}</div></div></section>

    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:py-28"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7653b5]">Good to know</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Questions, answered.</h2></div><div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">{['What is the starting price?', 'Where is The Courtyard Residences located?', 'What configurations are available?', 'Can I schedule a site visit?', 'How can I get the brochure?'].map((q) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold"><span>{q}</span><ChevronDown className="size-4 shrink-0 text-[#7653b5] transition group-open:rotate-180" /></summary><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Project information will be shared by your property advisor. Submit an enquiry and we’ll help with the latest details.</p></details>)}</div></section>

    <section id="enquire" className="bg-[#211940] py-20 text-white lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2b84b]">Your next address starts here</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Ready to find your new home?</h2><p className="mt-5 max-w-md leading-7 text-white/65">Get project details, pricing and availability from our property team.</p><div className="mt-8 flex flex-wrap gap-4 text-sm text-white/75"><span className="flex items-center gap-2"><Phone className="size-4 text-[#f2b84b]" /> +91 [Phone]</span><span className="flex items-center gap-2"><MessageCircle className="size-4 text-[#f2b84b]" /> WhatsApp us</span></div></div><div className="rounded-2xl bg-white p-1"><LeadForm compact /></div></div></section>

    <footer className="bg-[#17122c] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><Logo /><div className="flex flex-wrap gap-5 text-xs text-white/55"><a href="#">Privacy policy</a><a href="#">Terms & conditions</a><span>RERA: [Details]</span></div></div><div className="border-t border-white/10 pt-6 text-xs leading-5 text-white/45">© 2026 ArisUnitern. Project information shown is indicative and subject to change. Images are illustrative. Please verify all details with the authorised sales team.</div></div></footer>
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden"><a href="tel:+910000000000" className="grid size-12 place-items-center rounded-xl border border-slate-200 text-[#211940]" aria-label="Call ArisUnitern"><Phone className="size-5" /></a><a href="https://wa.me/910000000000" className="grid size-12 place-items-center rounded-xl bg-[#e7f4ef] text-[#147d65]" aria-label="WhatsApp ArisUnitern"><MessageCircle className="size-5" /></a><a href="#enquire" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#211940] text-sm font-semibold text-white">Enquire now <ArrowRight className="size-4" /></a></div>
  </main>
}
