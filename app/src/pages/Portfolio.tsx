import { useEffect, useState, useRef, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Eye,
  Pencil,
  Upload,
  X,
  Play,
  ExternalLink,
  Users,
  Award,
  TrendingUp,
  Zap,
  Linkedin,
  Twitter,
  Plus,
  Trash2,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { portfolioProjects, type PortfolioProject } from '../data/portfolioProjects';
import { defaultTeamMembers, type TeamMember } from '../data/teamMembers';
import { usePortfolioData } from '../hooks/usePortfolioData';

// ─── Storage Keys ──────────────────────────────────────────────────────────────
const PROJECTS_KEY = 'portfolioProjects';
const TEAM_KEY = 'portfolioTeam';

// ─── Types ────────────────────────────────────────────────────────────────────
type NewProjectForm = {
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  timeline: string;
  featured: boolean;
  videoUrl: string;
  projectLink: string;
  results: { label: string; value: string }[];
};

type NewTeamForm = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string;
  linkedin: string;
  twitter: string;
};

type AdminTab = 'projects' | 'team';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const defaultProjectForm: NewProjectForm = {
  title: '',
  client: '',
  category: 'Web Design',
  image: '',
  description: '',
  challenge: '',
  solution: '',
  timeline: '',
  featured: false,
  videoUrl: '',
  projectLink: '',
  results: [
    { label: 'Conversion', value: '' },
    { label: 'Revenue', value: '' },
    { label: 'Engagement', value: '' },
  ],
};

const defaultTeamForm: NewTeamForm = {
  name: '',
  role: '',
  bio: '',
  photo: '',
  specialties: '',
  linkedin: '',
  twitter: '',
};

const automaticCoverThemes = [
  ['#071B2A', '#00C7B7', '#1B75BB'],
  ['#24112D', '#D95DCE', '#7A4DFF'],
  ['#2A1808', '#F0A94C', '#D85B31'],
  ['#10271F', '#54D6A5', '#159A7A'],
  ['#211120', '#F47C93', '#C84A72'],
  ['#141B36', '#7F9CFF', '#3D5AC5'],
];

const getCoverSeed = (value: string) =>
  Array.from(value).reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 7);

const escapeSvgText = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;' }[character] ?? character));

const createAutomaticCover = (title: string, category: string, id: number) => {
  const seed = getCoverSeed(`${title}-${category}-${id}`);
  const [background, accent, secondary] = automaticCoverThemes[seed % automaticCoverThemes.length];
  const safeTitle = escapeSvgText(title.trim().slice(0, 36) || 'New Project');
  const safeCategory = escapeSvgText(category || 'Portfolio Project');
  const circleX = 510 + (seed % 250);
  const circleY = 80 + ((seed >> 4) % 160);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560" role="img" aria-label="${safeTitle} project cover"><defs><linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${background}" /><stop offset="100%" stop-color="#05090D" /></linearGradient><linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${accent}" /><stop offset="100%" stop-color="${secondary}" /></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="28" /></filter></defs><rect width="900" height="560" fill="url(#background)" /><path d="M0 90H900M0 180H900M0 270H900M0 360H900M0 450H900" opacity=".16" stroke="${accent}" /><circle cx="${circleX}" cy="${circleY}" r="170" fill="${accent}" opacity=".48" filter="url(#blur)" /><circle cx="${circleX - 190}" cy="${circleY + 250}" r="145" fill="${secondary}" opacity=".34" filter="url(#blur)" /><path d="M550 510C625 385 718 380 900 250V560H475Z" fill="url(#accent)" opacity=".9" /><rect x="56" y="68" width="156" height="38" rx="19" fill="${accent}" opacity=".92" /><text x="78" y="93" fill="#061112" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="1.5">${safeCategory.toUpperCase()}</text><text x="56" y="380" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="54" font-weight="700">${safeTitle}</text><text x="58" y="426" fill="#D7E5E3" font-family="Arial, sans-serif" font-size="20" letter-spacing="2">CUSTOM PROJECT COVER</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// ─── Video URL Converter ────────────────────────────────────────────────────────
const toEmbedUrl = (url: string): string => {
  if (!url) return '';
  // YouTube
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return url;
};

const isEmbeddableUrl = (url: string) =>
  url.includes('youtube.com/embed') ||
  url.includes('youtu.be') ||
  url.includes('youtube.com/watch') ||
  url.includes('vimeo.com') ||
  url.includes('player.vimeo.com');

// ─── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, color = '#00C7B7' }: { value: string; label: string; color?: string }) => (
  <div className="text-center px-4 py-3">
    <div className="text-2xl sm:text-3xl font-black" style={{ color }}>{value}</div>
    <div className="text-xs text-[#A8B7B5] mt-0.5">{label}</div>
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const Portfolio = () => {
  // Projects
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [videoModalProject, setVideoModalProject] = useState<PortfolioProject | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState<AdminTab>('projects');
  const [newProject, setNewProject] = useState<NewProjectForm>(() => ({ ...defaultProjectForm }));
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);

  // Team
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [newTeam, setNewTeam] = useState<NewTeamForm>(() => ({ ...defaultTeamForm }));
  const [editingTeamId, setEditingTeamId] = useState<number | null>(null);
  const [showTeamEditor, setShowTeamEditor] = useState(false);

  const { filters, filteredProjects } = usePortfolioData(projects, activeFilter);
  const editorRef = useRef<HTMLDivElement>(null);

  // ── Load from localStorage ─────────────────────────────────────────────────
  useEffect(() => {
    const savedProjects = localStorage.getItem(PROJECTS_KEY);
    if (savedProjects) {
      try { setProjects(JSON.parse(savedProjects)); return; } catch { /* ignore */ }
    }
    setProjects(portfolioProjects);
  }, []);

  useEffect(() => {
    const savedTeam = localStorage.getItem(TEAM_KEY);
    if (savedTeam) {
      try { setTeamMembers(JSON.parse(savedTeam)); return; } catch { /* ignore */ }
    }
    setTeamMembers(defaultTeamMembers);
  }, []);

  // ── Persist to localStorage ────────────────────────────────────────────────
  useEffect(() => {
    if (projects.length > 0) localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    if (teamMembers.length > 0) localStorage.setItem(TEAM_KEY, JSON.stringify(teamMembers));
  }, [teamMembers]);

  // ── Project CRUD ───────────────────────────────────────────────────────────
  const resetNewProject = () => {
    setNewProject({ ...defaultProjectForm, results: defaultProjectForm.results.map((r) => ({ ...r })) });
    setEditingProjectId(null);
  };

  const updateNewProject = (field: string, value: string | boolean) =>
    setNewProject((c) => ({ ...c, [field]: value }));

  const updateResult = (index: number, field: 'label' | 'value', value: string) =>
    setNewProject((c) => ({
      ...c,
      results: c.results.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)),
    }));

  const createProjectFromForm = (id: number, existing?: PortfolioProject): PortfolioProject => ({
    id,
    title: newProject.title || 'Untitled Project',
    client: newProject.client || 'Client Name',
    category: newProject.category,
    image: newProject.image.trim() || createAutomaticCover(newProject.title, newProject.category, id),
    description: newProject.description || 'Project description.',
    featured: newProject.featured,
    videoUrl: newProject.videoUrl || undefined,
    projectLink: newProject.projectLink || undefined,
    results: newProject.results.map((r) => ({ label: r.label || 'Result', value: r.value || 'TBD' })),
    fullDetails: {
      challenge: newProject.challenge || 'Challenge details not available.',
      solution: newProject.solution || 'Solution details not available.',
      timeline: newProject.timeline || 'TBD',
      deliverables: existing?.fullDetails?.deliverables || [],
      testimonial: existing?.fullDetails?.testimonial,
    },
  });

  const saveProject = () => {
    if (editingProjectId !== null) {
      setProjects((c) => c.map((p) => (p.id === editingProjectId ? createProjectFromForm(editingProjectId, p) : p)));
    } else {
      const nextId = projects.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      setProjects((c) => [createProjectFromForm(nextId), ...c]);
    }
    resetNewProject();
  };

  const editProject = (project: PortfolioProject) => {
    const usesAuto = project.image.startsWith('data:image/svg+xml');
    setNewProject({
      title: project.title,
      client: project.client,
      category: project.category,
      image: usesAuto ? '' : project.image,
      description: project.description,
      challenge: project.fullDetails?.challenge || '',
      solution: project.fullDetails?.solution || '',
      timeline: project.fullDetails?.timeline || '',
      featured: Boolean(project.featured),
      videoUrl: project.videoUrl || '',
      projectLink: project.projectLink || '',
      results: project.results.map((r) => ({ ...r })),
    });
    setEditingProjectId(project.id);
    setAdminTab('projects');
    setShowAdmin(true);
    setSelectedProject(null);
    setTimeout(() => editorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleCoverUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => { if (typeof reader.result === 'string') updateNewProject('image', reader.result); };
    reader.readAsDataURL(file);
  };

  const deleteProject = (id: number) => setProjects((c) => c.filter((p) => p.id !== id));

  // ── Team CRUD ──────────────────────────────────────────────────────────────
  const resetTeamForm = () => {
    setNewTeam({ ...defaultTeamForm });
    setEditingTeamId(null);
    setShowTeamEditor(false);
  };

  const updateTeamField = (field: string, value: string) =>
    setNewTeam((c) => ({ ...c, [field]: value }));

  const handleTeamPhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => { if (typeof reader.result === 'string') updateTeamField('photo', reader.result); };
    reader.readAsDataURL(file);
  };

  const saveTeamMember = () => {
    const member: TeamMember = {
      id: editingTeamId ?? (teamMembers.reduce((max, m) => Math.max(max, m.id), 0) + 1),
      name: newTeam.name || 'Team Member',
      role: newTeam.role || 'Specialist',
      bio: newTeam.bio || '',
      photo: newTeam.photo || '/user-photo.jpg',
      specialties: newTeam.specialties ? newTeam.specialties.split(',').map((s) => s.trim()).filter(Boolean) : [],
      linkedin: newTeam.linkedin || undefined,
      twitter: newTeam.twitter || undefined,
    };
    if (editingTeamId !== null) {
      setTeamMembers((c) => c.map((m) => (m.id === editingTeamId ? member : m)));
    } else {
      setTeamMembers((c) => [...c, member]);
    }
    resetTeamForm();
  };

  const editTeamMember = (member: TeamMember) => {
    setNewTeam({
      name: member.name,
      role: member.role,
      bio: member.bio,
      photo: member.photo,
      specialties: member.specialties.join(', '),
      linkedin: member.linkedin || '',
      twitter: member.twitter || '',
    });
    setEditingTeamId(member.id);
    setShowTeamEditor(true);
  };

  const deleteTeamMember = (id: number) => setTeamMembers((c) => c.filter((m) => m.id !== id));

  // ─── JSX ────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#0B1214] text-[#F7FAF9] pt-24 pb-20 min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. AGENCY HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden agency-hero-bg">
        {/* Decorative orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,199,183,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(214,168,74,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="container-custom relative z-10">
          {/* ── Agency Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00C7B7]/10 border border-[#00C7B7]/25">
              <Sparkles className="w-4 h-4 text-[#00C7B7]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C7B7]">Award-Winning Agency Portfolio</span>
            </div>
          </motion.div>

          {/* ── Hero Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.12] mb-6 tracking-tight">
              Transformative Digital{' '}
              <span className="text-[#00C7B7] relative inline-block">
                Case Studies
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#00C7B7] to-[#D6A84A] opacity-70" />
              </span>{' '}
              &amp; Results
            </h1>
            <p className="text-base sm:text-lg text-[#A8B7B5] max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of high-impact web builds, performance marketing campaigns, and AI automation engines engineered for global industry leaders.
            </p>
          </motion.div>

          {/* ── Stats Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-0 divide-x divide-[#00C7B7]/15 bg-[#101B1D] border border-[#00C7B7]/15 rounded-2xl px-4 py-2 max-w-3xl mx-auto mb-14"
          >
            <StatCard value="$150M+" label="Client Revenue Generated" color="#00C7B7" />
            <StatCard value="850+" label="Projects Completed" color="#D6A84A" />
            <StatCard value="98%" label="Client Retention Rate" color="#FFFFFF" />
            <StatCard value="12+" label="Countries Served" color="#00C7B7" />
          </motion.div>

          {/* ── Trust badges row ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: <Award className="w-4 h-4" />, text: 'Award-Winning Design' },
              { icon: <TrendingUp className="w-4 h-4" />, text: 'Performance-Driven Results' },
              { icon: <Zap className="w-4 h-4" />, text: 'AI-Powered Execution' },
              { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Verified Client Results' },
            ].map((badge, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101B1D] border border-[#00C7B7]/15 text-xs font-semibold text-[#A8B7B5]">
                <span className="text-[#00C7B7]">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. ADMIN PANEL
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 section-surface mx-4 lg:mx-8 xl:mx-auto xl:max-w-7xl rounded-3xl mt-10" ref={editorRef}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00C7B7]" /> Portfolio Manager
              </h2>
              <p className="text-[#A8B7B5] text-sm mt-1">Add projects, edit team details, and keep this page current — no code required.</p>
            </div>
            <button
              onClick={() => setShowAdmin((c) => !c)}
              className="btn-primary flex items-center gap-2"
            >
              {showAdmin ? <X className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
              {showAdmin ? 'Close Manager' : 'Open Manager'}
              {!showAdmin && <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {showAdmin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                {/* ── Admin Tabs ── */}
                <div className="flex gap-2 mb-6 border-b border-[#00C7B7]/15 pb-4">
                  {(['projects', 'team'] as AdminTab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setAdminTab(tab)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${
                        adminTab === tab
                          ? 'bg-[#00C7B7] text-[#061112]'
                          : 'text-[#A8B7B5] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tab === 'projects' ? '📁 Projects' : '👥 Team Members'}
                    </button>
                  ))}
                </div>

                {/* ════════ PROJECTS TAB ════════ */}
                {adminTab === 'projects' && (
                  <div className="surface-panel p-6">
                    <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {editingProjectId !== null ? '✏️ Edit Project' : '+ Add New Project'}
                        </h3>
                        <p className="text-sm text-[#A8B7B5]">
                          {editingProjectId !== null ? 'Update details then save changes.' : 'Fill in details below. Leave cover empty for an auto-generated cover.'}
                        </p>
                      </div>
                      {editingProjectId !== null && (
                        <span className="text-xs font-semibold text-[#00C7B7] bg-[#00C7B7]/10 px-3 py-1 rounded-full border border-[#00C7B7]/20">Editing existing</span>
                      )}
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      {[
                        { label: 'Project Title', field: 'title', placeholder: 'Enter project name' },
                        { label: 'Client Name', field: 'client', placeholder: 'Enter client name' },
                      ].map(({ label, field, placeholder }) => (
                        <div key={field} className="space-y-2">
                          <label className="text-sm font-semibold text-[#F7FAF9]">{label}</label>
                          <input
                            value={(newProject as unknown as Record<string, string>)[field] as string}
                            onChange={(e) => updateNewProject(field, e.target.value)}
                            placeholder={placeholder}
                            className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                          />
                        </div>
                      ))}

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Category</label>
                        <select
                          value={newProject.category}
                          onChange={(e) => updateNewProject('category', e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white focus:border-[#00C7B7] focus:outline-none transition-colors"
                        >
                          {['Web Design', 'Marketing', 'Branding', 'SEO', 'Social Media', 'E-Commerce', 'AI Automation'].map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Cover Image URL <span className="text-[#5E7B7A] font-normal">(optional)</span></label>
                        <input
                          value={newProject.image}
                          onChange={(e) => updateNewProject('image', e.target.value)}
                          placeholder="https://example.com/cover.jpg"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                        />
                        <label className="inline-flex w-fit cursor-pointer items-center gap-2 text-xs font-semibold text-[#00C7B7] hover:text-white transition-colors">
                          <Upload className="h-4 w-4" /> Upload cover image
                          <input type="file" accept="image/*" onChange={handleCoverUpload} className="hidden" />
                        </label>
                        <p className="text-xs text-[#A8B7B5]">Leave empty for an auto-generated cover based on title &amp; category.</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Project Link</label>
                        <input
                          value={newProject.projectLink}
                          onChange={(e) => updateNewProject('projectLink', e.target.value)}
                          placeholder="https://yourproject.com"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Case Study Video URL</label>
                        <input
                          value={newProject.videoUrl}
                          onChange={(e) => updateNewProject('videoUrl', e.target.value)}
                          placeholder="YouTube / Vimeo / hosted MP4 URL"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-[#A8B7B5]">Paste a YouTube, Vimeo, or direct MP4 link — no duration limit.</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Timeline</label>
                        <input
                          value={newProject.timeline}
                          onChange={(e) => updateNewProject('timeline', e.target.value)}
                          placeholder="e.g. 3 Months"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Short Description</label>
                        <textarea
                          value={newProject.description}
                          onChange={(e) => updateNewProject('description', e.target.value)}
                          rows={3}
                          placeholder="Summarize the project"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Challenge</label>
                        <textarea
                          value={newProject.challenge}
                          onChange={(e) => updateNewProject('challenge', e.target.value)}
                          rows={3}
                          placeholder="Describe the client problem"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="space-y-2 lg:col-span-2">
                        <label className="text-sm font-semibold text-[#F7FAF9]">Solution</label>
                        <textarea
                          value={newProject.solution}
                          onChange={(e) => updateNewProject('solution', e.target.value)}
                          rows={3}
                          placeholder="Describe your solution approach"
                          className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Cover Preview */}
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#0B1214] flex items-center gap-4">
                      <img
                        src={newProject.image || createAutomaticCover(newProject.title, newProject.category, editingProjectId ?? (projects.reduce((max, p) => Math.max(max, p.id), 0) + 1))}
                        alt="Project cover preview"
                        className="h-28 w-44 object-cover flex-shrink-0"
                      />
                      <div className="p-4">
                        <div className="text-sm font-semibold text-white">Cover Preview</div>
                        <p className="mt-1 text-xs text-[#A8B7B5]">
                          {newProject.image ? 'Using your custom image.' : 'A unique project-specific cover will be saved automatically.'}
                        </p>
                      </div>
                    </div>

                    {/* Results Metrics */}
                    <div className="mt-4">
                      <label className="text-sm font-semibold text-[#F7FAF9] block mb-3">Key Results (3 metrics)</label>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {newProject.results.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <input
                              value={item.label}
                              onChange={(e) => updateResult(index, 'label', e.target.value)}
                              placeholder="Metric name"
                              className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                            />
                            <input
                              value={item.value}
                              onChange={(e) => updateResult(index, 'value', e.target.value)}
                              placeholder="Value (e.g. +340%)"
                              className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:items-center sm:justify-between">
                      <label className="inline-flex items-center gap-2 text-sm text-[#F7FAF9]">
                        <input
                          type="checkbox"
                          checked={newProject.featured}
                          onChange={(e) => updateNewProject('featured', e.target.checked)}
                          className="accent-[#00C7B7] rounded"
                        />
                        <Star className="w-4 h-4 text-[#D6A84A]" /> Mark as Featured
                      </label>
                      <div className="flex gap-3">
                        <button onClick={saveProject} className="btn-teal">
                          {editingProjectId !== null ? 'Update Project' : 'Save Project'}
                        </button>
                        <button onClick={resetNewProject} className="btn-secondary">
                          {editingProjectId !== null ? 'Cancel Edit' : 'Reset Form'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ════════ TEAM TAB ════════ */}
                {adminTab === 'team' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-[#A8B7B5]">Manage team members shown on the portfolio page.</p>
                      <button
                        onClick={() => { resetTeamForm(); setShowTeamEditor((c) => !c); }}
                        className="btn-teal flex items-center gap-2 py-2 px-4 text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        {showTeamEditor && editingTeamId === null ? 'Cancel' : 'Add Member'}
                      </button>
                    </div>

                    {/* Team Editor Form */}
                    <AnimatePresence>
                      {showTeamEditor && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="surface-panel p-6 overflow-hidden"
                        >
                          <h3 className="text-lg font-bold text-white mb-4">
                            {editingTeamId !== null ? '✏️ Edit Team Member' : '+ Add Team Member'}
                          </h3>
                          <div className="grid gap-4 lg:grid-cols-2">
                            {[
                              { label: 'Full Name', field: 'name', placeholder: 'e.g. Ahmad Hassan' },
                              { label: 'Role / Title', field: 'role', placeholder: 'e.g. Creative Director' },
                              { label: 'LinkedIn URL', field: 'linkedin', placeholder: 'https://linkedin.com/in/...' },
                              { label: 'Twitter / X URL', field: 'twitter', placeholder: 'https://twitter.com/...' },
                            ].map(({ label, field, placeholder }) => (
                              <div key={field} className="space-y-2">
                                <label className="text-sm font-semibold text-[#F7FAF9]">{label}</label>
                                <input
                                  value={(newTeam as unknown as Record<string, string>)[field] as string}
                                  onChange={(e) => updateTeamField(field, e.target.value)}
                                  placeholder={placeholder}
                                  className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                                />
                              </div>
                            ))}

                            <div className="space-y-2 lg:col-span-2">
                              <label className="text-sm font-semibold text-[#F7FAF9]">Short Bio</label>
                              <textarea
                                value={newTeam.bio}
                                onChange={(e) => updateTeamField('bio', e.target.value)}
                                rows={2}
                                placeholder="Brief description of expertise..."
                                className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors resize-none"
                              />
                            </div>

                            <div className="space-y-2 lg:col-span-2">
                              <label className="text-sm font-semibold text-[#F7FAF9]">Specialties <span className="text-[#5E7B7A] font-normal">(comma separated)</span></label>
                              <input
                                value={newTeam.specialties}
                                onChange={(e) => updateTeamField('specialties', e.target.value)}
                                placeholder="e.g. SEO, Content Strategy, Analytics"
                                className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-[#F7FAF9]">Photo URL</label>
                              <input
                                value={newTeam.photo}
                                onChange={(e) => updateTeamField('photo', e.target.value)}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full rounded-xl border border-white/10 bg-[#0B1214] px-4 py-3 text-sm text-white placeholder:text-[#5E7B7A] focus:border-[#00C7B7] focus:outline-none transition-colors"
                              />
                              <label className="inline-flex w-fit cursor-pointer items-center gap-2 text-xs font-semibold text-[#00C7B7] hover:text-white transition-colors">
                                <Upload className="h-4 w-4" /> Upload photo
                                <input type="file" accept="image/*" onChange={handleTeamPhotoUpload} className="hidden" />
                              </label>
                            </div>

                            {newTeam.photo && (
                              <div className="flex items-center gap-4">
                                <img src={newTeam.photo} alt="Preview" className="w-20 h-20 rounded-xl object-cover border border-[#00C7B7]/20" />
                                <div className="text-xs text-[#A8B7B5]">Photo preview</div>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-3 mt-5">
                            <button onClick={saveTeamMember} className="btn-teal">
                              {editingTeamId !== null ? 'Update Member' : 'Add Member'}
                            </button>
                            <button onClick={resetTeamForm} className="btn-secondary">Cancel</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Team list in admin */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {teamMembers.map((member) => (
                        <div key={member.id} className="surface-panel p-4 flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <img src={member.photo} alt={member.name} className="w-12 h-12 rounded-full object-cover border border-[#00C7B7]/20 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-bold text-white">{member.name}</div>
                              <div className="text-xs text-[#00C7B7]">{member.role}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editTeamMember(member)}
                              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold text-[#00C7B7] border border-[#00C7B7]/25 hover:bg-[#00C7B7]/10 transition-colors"
                            >
                              <Pencil className="w-3 h-3" /> Edit
                            </button>
                            <button
                              onClick={() => deleteTeamMember(member.id)}
                              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold text-red-400 border border-red-400/25 hover:bg-red-400/10 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" /> Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. FILTER TABS & PROJECT GRID
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Our Work</h2>
            <p className="text-[#A8B7B5] max-w-xl mx-auto text-sm">Filter by category to explore our portfolio of real client results.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#00C7B7] text-[#061112] shadow-lg shadow-[#00C7B7]/20 scale-105'
                    : 'bg-[#101B1D] text-[#A8B7B5] hover:text-white hover:bg-white/5 border border-[#00C7B7]/15'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className={`card-dark overflow-hidden group flex flex-col ${
                    project.featured ? 'border-[#D6A84A]/30' : 'border-[#00C7B7]/15'
                  }`}
                >
                  {/* ── Image / Video Thumbnail ── */}
                  <div className="relative h-56 overflow-hidden bg-[#0B1214]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B1D] via-[#101B1D]/20 to-transparent opacity-90" />

                    {/* Video play overlay */}
                    {project.videoUrl && (
                      <button
                        onClick={() => setVideoModalProject(project)}
                        className="video-play-btn"
                        aria-label={`Play video for ${project.title}`}
                      >
                        <span className="play-icon-ring">
                          <Play className="w-7 h-7 text-[#061112] fill-[#061112] ml-1" />
                        </span>
                      </button>
                    )}

                    {/* Edit button */}
                    <button
                      onClick={() => editProject(project)}
                      className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-xl border border-[#00C7B7]/50 bg-[#061112]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#00C7B7] transition-colors hover:bg-[#00C7B7] hover:text-[#061112] opacity-0 group-hover:opacity-100"
                    >
                      <Pencil className="h-3 w-3" /> Edit
                    </button>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="badge-teal text-[10px]">{project.category}</span>
                      {project.featured && (
                        <span className="badge-gold text-[10px] flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#D6A84A]" /> Featured
                        </span>
                      )}
                      {project.videoUrl && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#D6A84A]/15 text-[#D6A84A] border border-[#D6A84A]/25">
                          <Play className="w-2.5 h-2.5 fill-[#D6A84A]" /> Video
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-semibold text-[#00C7B7] mb-1">{project.client}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C7B7] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A8B7B5] mb-5 leading-relaxed flex-1">{project.description}</p>

                    {/* Results Strip */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0B1214] border border-white/5 mb-5">
                      {project.results.map((res, i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-black text-[#00C7B7]">{res.value}</div>
                          <div className="text-[10px] text-[#A8B7B5] truncate">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      {project.videoUrl ? (
                        <button
                          onClick={() => setVideoModalProject(project)}
                          className="w-full btn-secondary py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#00C7B7] group-hover:text-[#061112] group-hover:border-[#00C7B7] transition-all"
                        >
                          <Play className="w-4 h-4 fill-current" /> Watch Case Study
                        </button>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-full btn-secondary py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#00C7B7] group-hover:text-[#061112] group-hover:border-[#00C7B7] transition-all"
                        >
                          <Eye className="w-4 h-4" /> View Details
                        </button>
                      )}
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-gold py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" /> Visit Live Project
                        </a>
                      )}
                      {showAdmin && (
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 border border-red-400/25 hover:bg-red-400/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" /> Remove Project
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#A8B7B5]">
              <Sparkles className="w-10 h-10 mx-auto mb-4 text-[#00C7B7]/40" />
              <p className="text-lg font-semibold">No projects in this category yet.</p>
              <p className="text-sm mt-1">Use the Portfolio Manager above to add your first project.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. TEAM SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* Section background orbs */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,199,183,0.08) 0%, transparent 60%)' }} />

        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6A84A]/10 border border-[#D6A84A]/25 mb-5">
              <Users className="w-4 h-4 text-[#D6A84A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A84A]">The People Behind the Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Meet Our <span className="text-[#00C7B7]">Expert Team</span>
            </h2>
            <p className="text-[#A8B7B5] max-w-2xl mx-auto text-base leading-relaxed">
              A diverse team of strategists, creatives, and engineers united by one mission — delivering transformative digital growth for our clients.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="card-team group"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B1D] via-[#101B1D]/30 to-transparent" />

                  {/* Social Icons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#061112]/80 border border-[#00C7B7]/30 flex items-center justify-center text-[#00C7B7] hover:bg-[#00C7B7] hover:text-[#061112] transition-colors">
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#061112]/80 border border-[#00C7B7]/30 flex items-center justify-center text-[#00C7B7] hover:bg-[#00C7B7] hover:text-[#061112] transition-colors">
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Name + Role on photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#00C7B7] mb-0.5">{member.role}</div>
                    <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-xs text-[#A8B7B5] leading-relaxed mb-4">{member.bio}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.slice(0, 3).map((spec, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00C7B7]/8 text-[#00C7B7] border border-[#00C7B7]/15">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA below team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-14"
          >
            <p className="text-[#A8B7B5] mb-5">Ready to work with a team that delivers real results?</p>
            <Link to="/contact" className="btn-teal inline-flex items-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. PROJECT DETAILS MODAL (no video)
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101B1D] border border-[#00C7B7]/30 rounded-3xl max-w-2xl w-full relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal image header */}
              <div className="relative h-52 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B1D] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 flex gap-2">
                  <span className="badge-teal">{selectedProject.category}</span>
                  {selectedProject.featured && <span className="badge-gold flex items-center gap-1"><Star className="w-3 h-3 fill-[#D6A84A]" /> Featured</span>}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{selectedProject.title}</h2>
                <div className="text-sm text-[#00C7B7] font-semibold mb-6">Client: {selectedProject.client}</div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-sm text-[#A8B7B5] leading-relaxed">{selectedProject.fullDetails?.challenge || selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#00C7B7] uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-sm text-[#A8B7B5] leading-relaxed">{selectedProject.fullDetails?.solution || 'Designed and deployed custom digital architectures optimized for conversion.'}</p>
                  </div>

                  {selectedProject.fullDetails?.timeline && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1214] border border-[#00C7B7]/15 text-sm">
                      <span className="text-[#A8B7B5]">Timeline:</span>
                      <span className="font-semibold text-white">{selectedProject.fullDetails.timeline}</span>
                    </div>
                  )}

                  {/* Key Results */}
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Results Delivered</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.results.map((res, i) => (
                        <div key={i} className="p-4 rounded-xl bg-[#0B1214] border border-[#00C7B7]/20 text-center">
                          <div className="text-xl font-black text-[#00C7B7]">{res.value}</div>
                          <div className="text-xs text-[#A8B7B5] mt-1">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProject.fullDetails?.testimonial && (
                    <blockquote className="border-l-2 border-[#00C7B7] pl-4 italic text-sm text-[#A8B7B5]">
                      "{selectedProject.fullDetails.testimonial}"
                    </blockquote>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  {selectedProject.projectLink && (
                    <a href={selectedProject.projectLink} target="_blank" rel="noreferrer"
                      className="btn-gold text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Visit Project
                    </a>
                  )}
                  <button onClick={() => setSelectedProject(null)} className="btn-secondary text-xs font-bold uppercase tracking-wider">Close</button>
                  <Link to="/contact" className="btn-teal text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    Start Similar Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. VIDEO MODAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {videoModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
            onClick={() => setVideoModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101B1D] border border-[#00C7B7]/30 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              {/* Video embed */}
              <div className="relative aspect-video bg-black">
                {videoModalProject.videoUrl && isEmbeddableUrl(videoModalProject.videoUrl) ? (
                  <iframe
                    src={toEmbedUrl(videoModalProject.videoUrl)}
                    title={`${videoModalProject.title} case study video`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoModalProject.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
                <button
                  onClick={() => setVideoModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video info bar */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="badge-teal text-[10px]">{videoModalProject.category}</span>
                    {videoModalProject.featured && <span className="badge-gold text-[10px]">Featured</span>}
                  </div>
                  <h3 className="text-xl font-bold text-white">{videoModalProject.title}</h3>
                  <div className="text-sm text-[#00C7B7] font-semibold">{videoModalProject.client}</div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {videoModalProject.projectLink && (
                    <a href={videoModalProject.projectLink} target="_blank" rel="noreferrer" className="btn-gold text-xs font-bold uppercase tracking-wider flex items-center gap-2 py-2.5 px-4">
                      <ExternalLink className="w-3.5 h-3.5" /> Visit Project
                    </a>
                  )}
                  <button onClick={() => { setVideoModalProject(null); setSelectedProject(videoModalProject); }}
                    className="btn-secondary text-xs font-bold uppercase tracking-wider py-2.5 px-4 flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" /> Full Details
                  </button>
                  <Link to="/contact" className="btn-teal text-xs font-bold uppercase tracking-wider py-2.5 px-4 flex items-center gap-2">
                    Start a Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Results bar */}
              <div className="grid grid-cols-3 gap-0 divide-x divide-[#00C7B7]/10 border-t border-[#00C7B7]/10 px-6 py-4">
                {videoModalProject.results.map((res, i) => (
                  <div key={i} className="text-center px-4">
                    <div className="text-lg font-black text-[#00C7B7]">{res.value}</div>
                    <div className="text-[11px] text-[#A8B7B5]">{res.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
