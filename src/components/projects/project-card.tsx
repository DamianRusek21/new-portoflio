import BookOpenText from "lucide-react/dist/esm/icons/book-open-text";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Github from "lucide-react/dist/esm/icons/github";
import Link from "next/link";
import { ExpandableText } from "@/components/shared/expandable-text";
import { TechBadge } from "@/components/shared/tech-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { ProjectCardModel } from "@/types/project";

interface ProjectCardProps {
  project: ProjectCardModel;
  className?: string;
}

/**
 * Card component showing a project summary.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const maxVisibleTags = 4;
  const visibleTags = project.tags.slice(0, maxVisibleTags);
  const hiddenTags = project.tags.slice(maxVisibleTags);
  const hiddenCount = hiddenTags.length;

  return (
    <Card
      data-testid="project-card"
      className={cn(
        "group relative overflow-hidden flex flex-col",
        "transition-colors hover:border-border/80 hover:bg-card/90",
        className,
      )}
    >
      <CardHeader className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

        <div className="relative flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          {project.language && <Badge variant="outline">{project.language}</Badge>}
          {project.featured && <Badge>Featured</Badge>}
        </div>

        <CardTitle className="relative mt-3 text-lg">
          <Link
            href={project.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <span>{project.title}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </Link>
        </CardTitle>

        <ExpandableText className="relative mt-2 text-sm text-foreground/80">
          {project.description}
        </ExpandableText>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 🔥 METRICS (NEW MAIN FEATURE) */}
        {project.metrics?.length && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Highlights */}
        {project.highlights?.length && (
          <ul className="space-y-1 text-sm text-foreground/90">
            {project.highlights.slice(0, 2).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex gap-2 overflow-hidden">
            {visibleTags.map((tag) => (
              <TechBadge key={tag} name={tag} size="sm" />
            ))}
          </div>

          {hiddenCount > 0 && (
            <Popover>
              <PopoverTrigger asChild>
                <button className="px-2 text-xs border rounded-full">
                  +{hiddenCount}
                </button>
              </PopoverTrigger>

              <PopoverContent className="w-72 p-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} size="sm" />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Fallback metadata (only if no metrics) */}
        {!project.metrics && (
          <div className="text-xs text-muted-foreground">
            Updated {project.updatedLabel}
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={project.repoUrl} target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={project.primaryUrl} target="_blank">
              <ExternalLink className="h-4 w-4" />
              Open
            </Link>
          </Button>
        </div>

        <div className="flex gap-2">
          {project.liveUrl && (
            <Button variant="secondary" asChild>
              <Link href={project.liveUrl} target="_blank">
                Live
              </Link>
            </Button>
          )}

          {project.docsUrl && (
            <Button variant="outline" asChild>
              <Link href={project.docsUrl} target="_blank">
                <BookOpenText className="h-4 w-4" />
                Docs
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}