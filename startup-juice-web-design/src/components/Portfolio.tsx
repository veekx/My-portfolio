import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FR$H Media",
    description:
      "Achieved drastic increase in sales through a customized targeted marketing strategy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Web Design", "Marketing"],
  },
  {
    title: "Newy Plumbing",
    description:
      "Streamlines processes, bringing in recurring clients with pricing plan automations.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop",
    tags: ["Development", "Automation"],
  },
  {
    title: "AdventuresDR",
    description:
      "Expands market reach, tapping into new demographics with a driven approach.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tags: ["Web Design", "SEO"],
  },
];

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

function ProjectCard({ project, index, progress }: { project: Project, index: number, progress: MotionValue<number> }) {
  const isLeft = index % 2 === 0;
  const isTop = index < 2;

  // Messy stack rotations for the initial state
  const stackRotations = [-15, 10, -5, 12];
  const startRotateZ = stackRotations[index];

  // Start positions (stacked in center)
  const startX = isLeft ? "50%" : "-50%";
  const startY = isTop ? "50%" : "-50%";

  // 3D tumbling effect
  const startRotateX = isTop ? 30 : -30;
  const startRotateY = isLeft ? -30 : 30;

  const x = useTransform(progress, [0, 1], [startX, "0%"]);
  const y = useTransform(progress, [0, 1], [startY, "0%"]);
  const rotateZ = useTransform(progress, [0, 1], [startRotateZ, 0]);
  const rotateX = useTransform(progress, [0, 1], [startRotateX, 0]);
  const rotateY = useTransform(progress, [0, 1], [startRotateY, 0]);
  const scale = useTransform(progress, [0, 1], [0.6, 1]);
  const opacity = useTransform(progress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ x, y, rotateZ, rotateX, rotateY, scale, opacity }}
      className="group cursor-pointer [transform-style:preserve-3d]"
    >
      <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-card border border-border shadow-2xl">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 z-20 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-juice transition-colors">
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-juice group-hover:border-juice transition-colors">
          <ArrowUpRight className="text-foreground group-hover:text-white transition-colors" size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-32 relative border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-juice bg-juice/10 rounded-full mb-6 border border-juice/20"
            >
              For Startups + Businesses
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
            >
              Get your site live in no time with professional setup and expert
              support.
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-card hover:bg-border border border-border rounded-full transition-all group shrink-0"
          >
            View All Projects
            <ArrowUpRight
              className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={20}
            />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 [perspective:2000px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
