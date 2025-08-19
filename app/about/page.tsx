import { Container } from "@/components/layout/Container";
import { 
  Headline, 
  Subheading, 
  SectionHeading,
  MinorHeading,
  Paragraph,
  Lede,
  BulletedList,
  ListItem,
  Eyebrow,
  SmallText
} from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Natcha Pradappet",
  description:
    "Design Engineer with 8+ years of experience creating intelligent interfaces that bridge the gap between human cognition and artificial intelligence.",
};

export default function AboutPage() {
  const skills = {
    design: [
      "Interface Design",
      "Design Systems", 
      "Prototyping",
      "User Research"
    ],
    engineering: [
      "React/TypeScript",
      "Three.js/WebGL",
      "Node.js",
      "Python/ML"
    ],
    concepts: [
      "Human-AI Interaction",
      "Cognitive Psychology",
      "Accessibility",
      "Performance"
    ]
  };

  const experience = [
    {
      title: "Senior Design Engineer",
      company: "AI Studio",
      period: "2022 - Present",
      description: "Leading design engineering for next-generation AI interfaces."
    },
    {
      title: "Design Engineer", 
      company: "Creative Technology Lab",
      period: "2019 - 2022",
      description: "Bridged design and development for experimental digital products."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency", 
      period: "2016 - 2019",
      description: "Built responsive web applications and interactive experiences."
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 pb-24">
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">About</Eyebrow>
          <Headline className="text-4xl md:text-5xl lg:text-6xl mb-12">
            Design Engineer
          </Headline>
          
          <div className="space-y-8">
            <Lede>
              I&apos;m Natcha Pradappet, a design engineer based in Bangkok, focused on creating intelligent interfaces that adapt to human needs.
            </Lede>
            
            <Paragraph className="text-lg">
              With 8+ years of experience, I bridge the gap between design vision and technical implementation, specializing in AI-enhanced systems, adaptive interfaces, and human-centered technology.
            </Paragraph>
            
            <Paragraph className="text-lg">
              My approach combines systematic design thinking with deep technical expertise, drawing from cognitive psychology and machine learning to create experiences that evolve with their users.
            </Paragraph>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end lg:items-start lg:pt-8">
          <div className="w-full max-w-md aspect-[4/3] bg-gray-200 rounded-sm"></div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-20 border-t border-gray-200">
        <Subheading className="mb-12">
          Philosophy
        </Subheading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <SectionHeading className="mb-4">
              Human-First AI
            </SectionHeading>
            <Paragraph className="text-sm">
              Technology should augment human capabilities, not replace them. I design AI systems that empower users while respecting their agency and privacy.
            </Paragraph>
          </div>
          
          <div>
            <SectionHeading className="mb-4">
              Adaptive Design
            </SectionHeading>
            <Paragraph className="text-sm">
              Interfaces should evolve with their users. I create systems that learn from interactions and optimize themselves over time.
            </Paragraph>
          </div>
          
          <div>
            <SectionHeading className="mb-4">
              Accessible Innovation
            </SectionHeading>
            <Paragraph className="text-sm">
              Cutting-edge technology means nothing if it excludes people. I ensure every innovation is accessible to all users.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div className="py-20 border-t border-gray-200">
        <Subheading className="mb-12">
          Skills & Expertise
        </Subheading>
        
        {/* Large Background Text */}
        <div className="relative mb-12">
          <div className="text-6xl md:text-8xl font-light text-gray-100 uppercase tracking-[0.2em] select-none overflow-hidden">
            DESIGN ENGINEERING CONCEPTS
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <MinorHeading className="text-gray-500 mb-6">
              Design
            </MinorHeading>
            <BulletedList>
              {skills.design.map((skill, index) => (
                <ListItem key={index}>
                  {skill}
                </ListItem>
              ))}
            </BulletedList>
          </div>
          
          <div>
            <MinorHeading className="text-gray-500 mb-6">
              Engineering
            </MinorHeading>
            <BulletedList>
              {skills.engineering.map((skill, index) => (
                <ListItem key={index}>
                  {skill}
                </ListItem>
              ))}
            </BulletedList>
          </div>
          
          <div>
            <MinorHeading className="text-gray-500 mb-6">
              Concepts
            </MinorHeading>
            <BulletedList>
              {skills.concepts.map((skill, index) => (
                <ListItem key={index}>
                  {skill}
                </ListItem>
              ))}
            </BulletedList>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-20 border-t border-gray-200">
        <Subheading className="mb-12">
          Experience
        </Subheading>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-8 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <SectionHeading>
                    {job.title}
                  </SectionHeading>
                  <SmallText className="text-gray-400 uppercase tracking-wider md:ml-8">
                    {job.period}
                  </SmallText>
                </div>
                <SmallText className="text-gray-500 mb-2">
                  {job.company}
                </SmallText>
                <Paragraph className="text-sm max-w-2xl">
                  {job.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
