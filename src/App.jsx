import { useState } from "react";

import Logo from "./assets/image.png";

const courses = [
  {
    icon: "🖥️",
    title: "Frontend",
    desc: "HTML, CSS, JavaScript, React",
    color: "from-[#E74516]/30 to-[#E74516]/5",
  },
  {
    icon: "⚙️",
    title: "Backend",
    desc: "Node.js, Express, PostgreSQL",
    color: "from-emerald-700/30 to-emerald-700/5",
  },
  {
    icon: "🐍",
    title: "Python",
    desc: "Python, Django, FastAPI",
    color: "from-yellow-700/30 to-yellow-700/5",
  },
  {
    icon: "📱",
    title: "Mobile",
    desc: "React Native, Flutter",
    color: "from-sky-700/30 to-sky-700/5",
  },
  {
    icon: "🎨",
    title: "UI/UX",
    desc: "Figma, Design Systems",
    color: "from-pink-700/30 to-pink-700/5",
  },
];

const mentors = [
  {
    name: "Jasur Toshmatov",
    role: "Frontend Developer",
    exp: "5 yil tajriba",
    company: "ex-Uzum",
    avatar: "JT",
  },
  {
    name: "Nilufar Rahimova",
    role: "UI/UX Designer",
    exp: "4 yil tajriba",
    company: "Figma Pro",
    avatar: "NR",
  },
  {
    name: "Sherzod Mirzayev",
    role: "Backend Engineer",
    exp: "6 yil tajriba",
    company: "ex-Click",
    avatar: "SM",
  },
  {
    name: "Dilnoza Yusupova",
    role: "Python Developer",
    exp: "3 yil tajriba",
    company: "Freelancer",
    avatar: "DY",
  },
];

const reviews = [
  {
    name: "Bobur A.",
    text: "ITuniversitie da o'qib Frontend dasturchiga aylandim. Mentorlar har doim yordamchi bo'ldi.",
    course: "Frontend",
    stars: 5,
  },
  {
    name: "Sarvinoz K.",
    text: "Amaliy loyihalar orqali o'rganish juda samarali. 3 oyda ish topdim!",
    course: "UI/UX",
    stars: 5,
  },
  {
    name: "Ulugbek T.",
    text: "Backend kursida real API yozishni o'rgandim. Sertifikat ish topishda yordam berdi.",
    course: "Backend",
    stars: 5,
  },
  {
    name: "Malika H.",
    text: "Python kursini tugatib, freelance loyihalarda ishlayapman. Rahmat!",
    course: "Python",
    stars: 5,
  },
];

const whyUs = [
  {
    icon: "🛠️",
    title: "Amaliy darslar",
    desc: "Har bir mavzu real kod yozish bilan mustahkamlanadi",
  },
  {
    icon: "🚀",
    title: "Real loyihalar",
    desc: "Portfolio uchun tayyor loyihalar yaratiladi",
  },
  {
    icon: "🏆",
    title: "Sertifikat",
    desc: "Kurs tugatilganda rasmiy sertifikat beriladi",
  },
  {
    icon: "💼",
    title: "Ish topishga yordam",
    desc: "HR va kompaniyalar bilan aloqa o'rnatiladi",
  },
];

function App() {
  const [form, setForm] = useState({ name: "", phone: "", course: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen font-sans overflow-x-hidden">
      {/* ─── HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-tight">
            <img width={200} src={Logo} alt="" />
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* bg grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#E74516 1px, transparent 1px), linear-gradient(90deg, #E74516 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E74516]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <span className="inline-block text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-4 border border-[#E74516]/30 px-3 py-1 rounded-full">
              #1 IT Ta'lim Markazi
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Kelajakni
              <br />
              <span className="text-[#E74516]">Kod bilan</span>
              <br />
              qur
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Amaliy dasturlash kurslari orqali IT sohasida o'z o'rningizni
              toping. Tajribali mentorlar, real loyihalar, kafolatlangan natija.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href=""
                className="bg-[#E74516] hover:bg-[#c03a12] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#E74516]/30"
              >
                Bepul darsga yozilish →
              </a>
              <a
                href=""
                className="border border-white/20 hover:border-[#E74516]/50 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Kurslarni ko'rish
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-[340px] h-[380px]">
              {/* main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-white/10 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E74516] to-emerald-500" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-[#E74516]/70" />
                  </div>
                  <div className="space-y-2 font-mono text-xs text-white/50">
                    <div>
                      <span className="text-[#E74516]">const</span>{" "}
                      <span className="text-sky-400">developer</span>{" "}
                      <span className="text-white/30">=</span>{" "}
                      <span className="text-amber-400">"sen"</span>
                      <span className="text-white/30">;</span>
                    </div>
                    <div>
                      <span className="text-[#E74516]">function</span>{" "}
                      <span className="text-yellow-300">learn</span>
                      <span className="text-white/30">()</span> {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#E74516]">return</span>{" "}
                      <span className="text-amber-400">"🚀 kelajak"</span>
                      <span className="text-white/30">;</span>
                    </div>
                    <div>{"}"}</div>
                    <div className="mt-4 text-[#E74516]">
                      // 1000+ bitiruvchi
                    </div>
                    <div className="text-[#E74516]">// 85% ish topdi</div>
                  </div>
                </div>
              </div>

              {/* floating badges */}
              <div className="absolute -right-6 top-12 bg-[#E74516] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg shadow-[#E74516]/30 rotate-3">
                Frontend ✓
              </div>
              <div className="absolute -left-6 bottom-20 bg-[#1a1a1a] border border-white/10 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg -rotate-2">
                Python 🐍
              </div>
              <div className="absolute -right-4 bottom-8 bg-[#1a1a1a] border border-white/10 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg rotate-1">
                +Sertifikat 🏆
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-y border-white/5 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "1000+", label: "Bitiruvchi" },
            { val: "20+", label: "Mentor" },
            { val: "10+", label: "Kurs" },
            { val: "85%", label: "Ishga joylashish" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-[#E74516] mb-1">
                {s.val}
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
            Yo'nalishlar
          </p>
          <h2 className="text-4xl font-black">Kurslar</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`bg-gradient-to-b ${c.color} border border-white/8 rounded-2xl p-6 hover:border-[#E74516]/40 transition-all hover:-translate-y-1 cursor-pointer group`}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#E74516] transition-colors">
                {c.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
              Afzalliklar
            </p>
            <h2 className="text-4xl font-black">Nima uchun biz?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="border border-white/8 rounded-2xl p-7 hover:border-[#E74516]/40 hover:bg-[#E74516]/5 transition-all group"
              >
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-base mb-2 group-hover:text-[#E74516] transition-colors">
                  {w.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MENTORS ─── */}
      <section id="mentors" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
            Jamoa
          </p>
          <h2 className="text-4xl font-black">Mentorlar</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="border border-white/8 rounded-2xl p-6 hover:border-[#E74516]/40 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-[#E74516]/20 border-2 border-[#E74516]/40 rounded-full flex items-center justify-center text-[#E74516] font-black text-xl mx-auto mb-4 group-hover:bg-[#E74516]/30 transition-colors">
                {m.avatar}
              </div>
              <h3 className="font-bold text-base mb-0.5">{m.name}</h3>
              <p className="text-[#E74516] text-sm font-medium mb-1">
                {m.role}
              </p>
              <p className="text-white/40 text-xs">
                {m.exp} · {m.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
              Sharhlar
            </p>
            <h2 className="text-4xl font-black">O'quvchilar fikri</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="border border-white/8 rounded-2xl p-6 hover:border-[#E74516]/30 transition-all bg-[#0d0d0d]"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-[#E74516] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{r.name}</span>
                  <span className="text-xs text-[#E74516] bg-[#E74516]/10 px-2 py-0.5 rounded-full">
                    {r.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTER FORM ─── */}
      <section id="register" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
              Boshlash
            </p>
            <h2 className="text-4xl font-black">Ro'yxatdan o'tish</h2>
            <p className="text-white/50 mt-3">
              Birinchi dars bepul. Hoziroq yoziling!
            </p>
          </div>

          {submitted ? (
            <div className="border border-[#E74516]/40 bg-[#E74516]/10 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">
                Muvaffaqiyatli yuborildi!
              </h3>
              <p className="text-white/60">Tez orada siz bilan bog'lanamiz.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-white/8 rounded-2xl p-8 space-y-5 bg-[#111111]"
            >
              <div>
                <label className="text-sm text-white/60 block mb-2">
                  Ism *
                </label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#E74516] outline-none rounded-xl px-4 py-3 text-white placeholder-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 block mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  placeholder="+998 90 000 00 00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#E74516] outline-none rounded-xl px-4 py-3 text-white placeholder-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 block mb-2">
                  Kurs tanlash *
                </label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  required
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#E74516] outline-none rounded-xl px-4 py-3 text-white transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Kurs tanlang
                  </option>
                  {courses.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.icon} {c.title}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E74516] hover:bg-[#c03a12] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#E74516]/30"
              >
                Yuborish →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#E74516] text-sm font-semibold tracking-widest uppercase mb-2">
              Aloqa
            </p>
            <h2 className="text-4xl font-black">Kontakt</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "📞", label: "Telefon", val: "+998 71 200 00 00" },
              { icon: "✈️", label: "Telegram", val: "@MARSIT" },
              {
                icon: "📍",
                label: "Manzil",
                val: "Toshkent, Chilonzor tumani",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="border border-white/8 rounded-2xl p-7 hover:border-[#E74516]/40 transition-all"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="font-semibold text-white">{c.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <span className="text-white font-black text-lg">
            IT<span className="text-[#E74516]">universitie</span>
          </span>
          <span>© 2025 MARSIT. Barcha huquqlar himoyalangan.</span>
          <div className="flex gap-6"></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
