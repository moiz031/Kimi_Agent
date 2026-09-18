import { useMemo } from 'react';
import { portfolioFilters } from '../data/portfolioFilters';
import type { PortfolioProject } from '../data/portfolioProjects';

export function usePortfolioData(projects: PortfolioProject[], activeFilter: string) {
  const filters = useMemo(() => portfolioFilters, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return { filters, filteredProjects };
}
