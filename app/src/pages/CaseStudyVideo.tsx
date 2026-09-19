import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  ExternalLink,
  Star,
  CheckCircle2,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  Quote,
  Zap,
} from 'lucide-react';
import { portfolioProjects, type PortfolioProject } from '../data/portfolioProjects';

const LOCAL_STORAGE_KEY = 'portfolioProjects';

function getProjects(): PortfolioProject[] {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : portfolioProjects;
  } catch {
    return portfolioProjects;
  }
}

// ─── Robust embed URL builder ──────────────────────────────────────────────────
function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    // Google Drive
    if (host.includes('drive.google.com') || host.includes('docs.google.com') || host.includes('googleusercontent.com') || host.includes('googleapis.com')) {
      const fileId = parsed.pathname.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1] || parsed.searchParams.get('id');
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
    }

    // Screenrec
    if (host.includes('screenrec.com')) {
      return url;
    }

    // YouTube - if already /embed/ URL, keep as is
    if (host.includes('youtube.com') && parsed.pathname.startsWith('/embed/')) {
      return url;
    }

    // YouTube normal watch URL or youtu.be short URL
    if (host.includes('youtube.com') || host === 'youtu.be') {
      const id = host === 'youtu.be'
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // Vimeo
    if (host.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

// Check if the URL looks like a direct video file
function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
}

// ─── Animation Variants ─────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// ─── Component ──────────────────────────────────────────────────────────────────
export default function CaseStudyVideo() {
  const { id } = useParams();
  const [projects, setProjects] = useState<PortfolioProject[]>(portfolioProjects);

  useEffect(() => setProjects(getProjects()), []);

  const project = useMemo(() => projects.find((p) => p.id === Number(id)), [id, projects]);
  const videoUrl = project?.videoUrl?.trim();
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;
  const directVideo = videoUrl && isDirectVideo(videoUrl);

  // Find related projects (same category, excluding current)
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projects
      .filter((p) => p.id !== project.id && p.category === project.category)
      .slice(0, 3);
  }, [project, projects]);

  // ─── 404 state ─────────────────────────────────────────────────────────────────
  if (!project) {
    return (
      <main className="min-h-screen bg-[#0B1214] flex flex-col items-center justify-center px-6 py-32 text-[#F7FAF9]">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-[#00C7B7]/10 border border-[#00C7B7]/25 flex items-center justify-center mx-auto mb-8">
            <Target className="w-9 h-9 text-[#00C7B7]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Case Study Not Found</h1>
          <p className="text-[#A8B7B5] mb-8">
            The project you're looking for might have been removed or doesn't exist.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00C7B7] to-[#14D9C7] text-[#061112] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  // ─── Main Page ────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#0B1214] text-[#F7FAF9]">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO BANNER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <img src={project.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1214]/90 via-[#0B1214]/80 to-[#0B1214]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1214] via-transparent to-[#0B1214]/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          {/* Back link */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C7B7] hover:text-white transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          {/* Title area */}
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-3xl">
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#00C7B7]/15 text-[#00C7B7] border border-[#00C7B7]/25">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#D6A84A]/15 text-[#D6A84A] border border-[#D6A84A]/25">
                  <Star className="w-3 h-3 fill-[#D6A84A]" /> Featured
                </span>
              )}
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#A8B7B5] leading-relaxed mb-3"
            >
              {project.description}
            </motion.p>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.25 }} className="text-sm font-semibold text-[#00C7B7]">
              Client: {project.client}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. KEY RESULTS STRIP
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 rounded-2xl border border-[#00C7B7]/25 bg-[#101B1D]/90 backdrop-blur-md overflow-hidden shadow-xl"
          >
            {project.results.map((res, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 text-center ${i < project.results.length - 1 ? 'border-r border-[#00C7B7]/10' : ''}`}
              >
                <div className="text-2xl sm:text-4xl font-black text-[#00C7B7] mb-1">{res.value}</div>
                <div className="text-[11px] sm:text-xs text-[#A8B7B5] uppercase tracking-wider font-semibold">{res.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. VIDEO SECTION (if video exists)
      ═══════════════════════════════════════════════════════════════════════ */}
      {videoUrl && (
        <section className="max-w-5xl mx-auto px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00C7B7]/10 border border-[#00C7B7]/25 flex items-center justify-center">
                <Play className="w-5 h-5 text-[#00C7B7] fill-[#00C7B7]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Project Proof Video</h2>
                <p className="text-xs text-[#A8B7B5]">Watch the full case study walkthrough</p>
              </div>
            </div>

            {/* Video player container */}
            <div className="rounded-2xl overflow-hidden border border-[#00C7B7]/25 bg-black shadow-2xl shadow-[#00C7B7]/5">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={`${project.title} case study video`}
                  className="aspect-video w-full"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              ) : directVideo ? (
                <video
                  className="aspect-video w-full"
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={videoUrl} />
                  Your browser does not support this video format.
                </video>
              ) : (
                /* Fallback: try iframe for any other embed URL */
                <iframe
                  src={videoUrl}
                  title={`${project.title} case study video`}
                  className="aspect-video w-full"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              )}
            </div>
          </motion.div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          4. CHALLENGE & SOLUTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-[#101B1D] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">The Challenge</h3>
            </div>
            <p className="text-[#A8B7B5] leading-relaxed">
              {project.fullDetails?.challenge || project.description}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-[#00C7B7]/20 bg-[#101B1D] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#00C7B7]/10 border border-[#00C7B7]/25 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#00C7B7]" />
              </div>
              <h3 className="text-lg font-bold text-[#00C7B7] uppercase tracking-wide">Our Solution</h3>
            </div>
            <p className="text-[#A8B7B5] leading-relaxed">
              {project.fullDetails?.solution || 'Designed and deployed custom digital architectures optimized for conversion and growth.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. TIMELINE + DELIVERABLES
      ═══════════════════════════════════════════════════════════════════════ */}
      {(project.fullDetails?.timeline || project.fullDetails?.deliverables) && (
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-[#101B1D] p-8"
          >
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Timeline */}
              {project.fullDetails?.timeline && (
                <div className="flex items-center gap-4 min-w-fit">
                  <div className="w-12 h-12 rounded-xl bg-[#D6A84A]/10 border border-[#D6A84A]/25 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D6A84A]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#A8B7B5] uppercase tracking-widest mb-0.5">Timeline</div>
                    <div className="text-2xl font-extrabold text-white">{project.fullDetails.timeline}</div>
                  </div>
                </div>
              )}

              {/* Divider */}
              {project.fullDetails?.timeline && project.fullDetails?.deliverables && (
                <div className="hidden sm:block w-px bg-white/10" />
              )}

              {/* Deliverables */}
              {project.fullDetails?.deliverables && (
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-[#A8B7B5] uppercase tracking-widest mb-4">Key Deliverables</div>
                  <div className="grid grid-cols-2 gap-3">
                    {project.fullDetails.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00C7B7] shrink-0" />
                        <span className="text-sm text-[#E5EDEC]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          6. TESTIMONIAL (if exists)
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.fullDetails?.testimonial && (
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#D6A84A]/20 bg-gradient-to-br from-[#101B1D] to-[#15201A] p-8 sm:p-10"
          >
            <Quote className="w-10 h-10 text-[#D6A84A]/30 mb-4" />
            <blockquote className="text-lg sm:text-xl text-[#E5EDEC] italic leading-relaxed mb-6">
              "{project.fullDetails.testimonial}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D6A84A]/15 flex items-center justify-center">
                <Star className="w-5 h-5 text-[#D6A84A] fill-[#D6A84A]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{project.client}</div>
                <div className="text-xs text-[#A8B7B5]">Verified Client</div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          7. CTA ACTIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#00C7B7]/20 bg-gradient-to-r from-[#101B1D] to-[#0D1A1E] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Want Similar Results?
            </h3>
            <p className="text-sm text-[#A8B7B5]">
              Let our team build something powerful for your brand.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#D6A84A]/50 text-[#D6A84A] font-bold text-xs uppercase tracking-wider hover:bg-[#D6A84A]/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Visit Live Project
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00C7B7] to-[#14D9C7] text-[#061112] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              <Zap className="w-4 h-4" /> Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          8. RELATED PROJECTS
      ═══════════════════════════════════════════════════════════════════════ */}
      {relatedProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-[#00C7B7]" />
              <h2 className="text-2xl font-extrabold text-white">Related Projects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/portfolio/case-study/${rp.id}`}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-[#101B1D] hover:border-[#00C7B7]/30 transition-colors"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B1D] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C7B7]">{rp.category}</span>
                    <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#00C7B7] transition-colors leading-snug">
                      {rp.title}
                    </h4>
                    <p className="text-xs text-[#A8B7B5] mt-2 line-clamp-2">{rp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}
    </main>
  );
}