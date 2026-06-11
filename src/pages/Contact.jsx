import { useState } from 'react';
import { Send, Loader2, CheckCircle2, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const { profile } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      if (profile.formspreeEndpoint) {
        const body = new FormData();
        body.append('name', formData.name);
        body.append('email', formData.email);
        body.append('message', formData.message);
        body.append('_replyto', formData.email);
        body.append('_subject', `Contact request from ${formData.name}`);

        const response = await fetch(profile.formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body,
        });

        const data = await response.json().catch(() => null);

        if (!response.ok || data?.ok === false) {
          const detail =
            data?.errors?.map((err) => err.message).join(' ') ||
            `Form submission failed (${response.status})`;
          throw new Error(detail);
        }
      } else {
        const subject = `Contact request from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error.message || `Failed to send your message. Please email ${profile.email} directly.`,
      );
    }
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden px-4 pb-24 pt-24 md:px-12 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">(04) Reach out</p>
            <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.02em] md:text-6xl">Let&apos;s build something remarkable</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.35fr]">
            <aside className="panel rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] md:p-8">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Contact Info</p>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.18em] md:text-3xl">Muhammad Usman Safdar</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Full Stack Developer crafting modern web experiences with clean code and thoughtful UX.</p>
                </div>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/10 bg-white/4 p-4 transition-colors hover:border-accent/30 hover:bg-white/6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Email</p>
                    <a href={`mailto:${profile.email}`} className="mt-2 block break-all text-base font-semibold tracking-wide text-foreground hover:text-accent">{profile.email}</a>
                  </article>

                  <article className="rounded-2xl border border-white/10 bg-white/4 p-4 transition-colors hover:border-accent/30 hover:bg-white/6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Location</p>
                    <p className="mt-2 text-base font-semibold tracking-wide text-foreground">{profile.location}</p>
                  </article>
                </div>

                {profile.cvUrl && (
                  <a
                    href={profile.cvUrl}
                    download
                    className="inline-flex items-center gap-3 self-start rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                )}

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </aside>

            <section className="panel rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Fill out the form and I will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/8 bg-background/60 p-6 md:p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-foreground/10 bg-muted/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-foreground/10 bg-muted/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-foreground/10 bg-muted/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                    placeholder="How can I help you?"
                  />
                </div>

                {status === 'error' && (
                  <div className="rounded-xl border border-red-500/30 bg-red-900/20 p-4 text-sm text-red-400">{errorMessage}</div>
                )}

                {status === 'success' ? (
                  <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-900/20 p-4 text-sm text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    Message sent successfully! I&apos;ll be in touch soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        Sending...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
