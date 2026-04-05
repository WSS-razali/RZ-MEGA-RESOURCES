export type Project = {
  id: string;
  title: string;
  category_id: 'rz-kitchen' | 'wss-labs' | 'rxz-ventures' | 'cahayateras';
  tag: string;
  image_url: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "CORPIQ App",
    category_id: 'wss-labs',
    tag: "Tech",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Enterprise ERP Solution for multi-branch management."
  },
  {
    id: 'p2',
    title: "Ramadan Buffet 2026",
    category_id: 'rz-kitchen',
    tag: "F&B",
    image_url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    description: "Full-service catering for a 500-pax royal wedding."
  },
  {
    id: 'p3',
    title: "Retail Chain V2",
    category_id: 'rxz-ventures',
    tag: "Retail",
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "Optimized inventory tracking system for FMCG."
  },
  {
    id: 'p4',
    title: "SME Audit Report",
    category_id: 'cahayateras',
    tag: "Finance",
    image_url: "https://images.unsplash.com/photo-1554224155-98406d581124?q=80&w=2071&auto=format&fit=crop",
    description: "Comprehensive breakdown of Q4 assets and liabilities."
  },
  {
    id: 'p5',
    title: "Logistics Platform",
    category_id: 'wss-labs',
    tag: "Logistics",
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "End-to-end supply chain management and fleet tracking system."
  }
];
