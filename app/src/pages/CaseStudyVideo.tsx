import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
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

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    if (host.includes('drive.google.com') || host.includes('docs.google.com') || host.includes('googleusercontent.com') || host.includes('googleapis.com')) {
      const fileId = parsed.pathname.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1] || parsed.searchParams.get('id');
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
    }

    if (host.includes('screenrec.com')) {
      return url;
    }

    if (host.includes('youtube.com') || host === 'youtu.be') {
      const id = host === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function CaseStudyVideo() {
  const { id } = useParams();
  const [projects, setProjects] = useState<PortfolioProject[]>(portfolioProjects);

  useEffect(() => setProjects(getProjects()), []);

  const project = useMemo(() => projects.find((item) => item.id === Number(id)), [id, projects]);
  const videoUrl = project?.videoUrl?.trim();
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;

  if (!project || !videoUrl) {
    return <main className="min-h-screen bg-[#0B1214] px-6 py-32 text-center text-[#F7FAF9]"><h1 className="text-3xl font-extrabold">Case study video not available</h1><Link to="/portfolio" className="btn-primary mt-6 inline-flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back to Portfolio</Link></main>;
  }

  return (
    <main className="min-h-screen bg-[#0B1214] px-4 py-28 text-[#F7FAF9] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link to="/portfolio" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00C7B7] hover:text-white"><ArrowLeft className="w-4 h-4" /> Back to Portfolio</Link>
        <div className="mb-7"><span className="badge-teal">{project.category}</span><h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">{project.title}</h1><p className="mt-2 text-[#A8B7B5]">Case study video for {project.client}</p></div>
        <div className="overflow-hidden rounded-3xl border border-[#00C7B7]/30 bg-black shadow-2xl">{embedUrl ? <iframe src={embedUrl} title={`${project.title} case study video`} className="aspect-video w-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <video className="aspect-video w-full" controls preload="metadata" playsInline><source src={videoUrl} />Your browser does not support this video format.</video>}</div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#101B1D] p-6"><div className="flex items-center gap-2 text-[#00C7B7]"><PlayCircle className="w-5 h-5" /><h2 className="font-bold">Project proof video</h2></div><p className="mt-3 leading-relaxed text-[#A8B7B5]">{project.description}</p></div>
      </div>
    </main>
  );
}