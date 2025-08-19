import { Container } from "@/components/layout/Container";
import {
  Headline,
  Subheading,
  SectionHeading,
  SubsectionHeading,
  MinorHeading,
  Paragraph,
  Lede,
  SmallText,
  CategoryTag,
  Badge,
  Status,
  Eyebrow,
  LinkText,
  ButtonText,
  DataPair,
  DataGrid,
} from "@/components/typography";
import { SingleProject } from "@/components/sections/Project";
import { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowLeft,
  IconExternalLink,
  IconBrandGithub,
} from "@tabler/icons-react";
import { redirect } from "next/navigation";
import { ZimpMarquee } from "./ZimpMarquee";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  // Check if this is an existing project

  // Default for new work pages
  return {
    title: `Work Details | ${slug} | Natcha Pradappet`,
    description: "Detailed case study and project documentation.",
  };
}

export default function WorkDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // For new work pages, use the template below
  const projectData = {
    title: "Zimperium",
    subtitle: "Brief project description or tagline",
    category: "Category",
    year: "2024",
    client: "Client Name",
    duration: "3 months",
    team: "Solo / Team of 3",
    role: "Lead Designer & Developer",
    status: "Completed",
    description:
      "This is a comprehensive project description that explains the context, challenges, and solutions implemented.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    tags: ["Web Development", "UI/UX", "Frontend"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    images: [
      { src: "/placeholder.jpg", alt: "Project screenshot 1" },
      { src: "/placeholder.jpg", alt: "Project screenshot 2" },
    ],
  };

  return (
    <Container>
      {/* Back Navigation */}
      <div className="pt-8 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <IconArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      <ZimpMarquee />

      {/* Project Header */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Eyebrow className="mb-4">
              {projectData.category} • {projectData.year}
            </Eyebrow>

            <Headline className="mb-6">{projectData.title}</Headline>

            <Lede className="mb-8">{projectData.subtitle}</Lede>

            <Paragraph className="mb-8">{projectData.description}</Paragraph>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {projectData.liveUrl && (
                <ButtonText
                  variant="primary"
                  className="inline-flex items-center gap-2"
                >
                  <IconExternalLink className="w-4 h-4" />
                  View Live Project
                </ButtonText>
              )}
              {projectData.githubUrl && (
                <ButtonText
                  variant="secondary"
                  className="inline-flex items-center gap-2"
                >
                  <IconBrandGithub className="w-4 h-4" />
                  View Source Code
                </ButtonText>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {projectData.tags.map((tag, index) => (
                <CategoryTag key={index}>{tag}</CategoryTag>
              ))}
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div>
            <div className="bg-neutral-50 rounded-lg p-6 mb-8">
              <MinorHeading className="mb-6">Project Details</MinorHeading>

              <DataGrid columns={1} className="space-y-4">
                <DataPair label="Client">{projectData.client}</DataPair>
                <DataPair label="Duration">{projectData.duration}</DataPair>
                <DataPair label="Team">{projectData.team}</DataPair>
                <DataPair label="My Role">{projectData.role}</DataPair>
                <DataPair label="Status">
                  <Status color="green">{projectData.status}</Status>
                </DataPair>
              </DataGrid>
            </div>

            {/* Technologies */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <MinorHeading className="mb-4">Technologies Used</MinorHeading>
              <div className="space-y-2">
                {projectData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    <SmallText>{tech}</SmallText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="py-16">
        <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center mb-4">
          <SmallText className="text-neutral-500">
            Featured Project Image
          </SmallText>
        </div>
        <SmallText className="text-neutral-500 text-center">
          Main project screenshot or hero image
        </SmallText>
      </div>

      {/* Project Overview */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Project Overview</Subheading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading className="mb-4">Challenge</SectionHeading>
            <Paragraph>
              Describe the main challenges and problems that needed to be
              solved. What was the context and why was this project necessary?
            </Paragraph>
          </div>

          <div>
            <SectionHeading className="mb-4">Solution</SectionHeading>
            <Paragraph>
              Explain the approach taken to solve the challenges. What methods,
              technologies, or strategies were employed?
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Process</Subheading>

        <div className="space-y-12">
          {/* Process Step 1 */}
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              1
            </div>
            <div>
              <SubsectionHeading className="mb-4">
                Research & Discovery
              </SubsectionHeading>
              <Paragraph>
                Detail the research phase, user interviews, competitor analysis,
                and any discovery work that informed the project direction.
              </Paragraph>
            </div>
          </div>

          {/* Process Step 2 */}
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              2
            </div>
            <div>
              <SubsectionHeading className="mb-4">
                Design & Prototyping
              </SubsectionHeading>
              <Paragraph>
                Describe the design process, wireframing, prototyping, and
                iteration cycles that led to the final solution.
              </Paragraph>
            </div>
          </div>

          {/* Process Step 3 */}
          <div className="flex items-start gap-6">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              3
            </div>
            <div>
              <SubsectionHeading className="mb-4">
                Development & Testing
              </SubsectionHeading>
              <Paragraph>
                Explain the development approach, testing strategies, and
                quality assurance processes implemented.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Results & Impact</Subheading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-light text-neutral-900 mb-2">50%</div>
            <SmallText className="text-neutral-600">
              Improvement Metric
            </SmallText>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-neutral-900 mb-2">
              2.5x
            </div>
            <SmallText className="text-neutral-600">
              Performance Increase
            </SmallText>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-neutral-900 mb-2">98%</div>
            <SmallText className="text-neutral-600">
              User Satisfaction
            </SmallText>
          </div>
        </div>

        <Paragraph>
          Summarize the key outcomes, metrics, and impact of the project.
          Include both quantitative results and qualitative feedback.
        </Paragraph>
      </div>

      {/* Lessons Learned */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Lessons Learned</Subheading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading className="mb-4">What Worked Well</SectionHeading>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <SmallText>Key success factor or positive outcome</SmallText>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <SmallText>Another positive aspect of the project</SmallText>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading className="mb-4">
              Areas for Improvement
            </SectionHeading>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <SmallText>Learning or area for future improvement</SmallText>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <SmallText>
                  Another lesson learned or optimization opportunity
                </SmallText>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Next Steps</Subheading>
        <Paragraph>
          Outline future plans for the project, potential enhancements, or
          related work that will build on this foundation.
        </Paragraph>
      </div>

      {/* Related Work */}
      <div className="py-16 border-t border-neutral-200">
        <Subheading className="mb-8">Related Work</Subheading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/work/project-1" className="group">
            <div className="aspect-video bg-neutral-200 rounded-lg mb-4 group-hover:bg-neutral-300 transition-colors"></div>
            <SectionHeading className="group-hover:text-neutral-600 transition-colors">
              Related Project Title
            </SectionHeading>
            <SmallText className="text-neutral-600">
              Brief description of related work
            </SmallText>
          </Link>

          <Link href="/work/project-2" className="group">
            <div className="aspect-video bg-neutral-200 rounded-lg mb-4 group-hover:bg-neutral-300 transition-colors"></div>
            <SectionHeading className="group-hover:text-neutral-600 transition-colors">
              Another Related Project
            </SectionHeading>
            <SmallText className="text-neutral-600">
              Brief description of related work
            </SmallText>
          </Link>
        </div>
      </div>
    </Container>
  );
}
