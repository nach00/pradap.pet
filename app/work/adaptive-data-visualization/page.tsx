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
  Eyebrow,
  LinkText,
  ButtonText,
  DataPair,
  DataGrid
} from "@/components/type";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adaptive Data Visualization | Natcha Pradappet",
  description:
    "Smart charts that automatically adjust their representation based on data complexity, user context, and cognitive load to optimize comprehension and reduce information processing overhead.",
};

export default function AdaptiveDataVisualizationPage() {
  const projectDetails = {
    category: "AI & Tools",
    year: "2023",
    status: "Prototype",
    duration: "8 months",
    team: "Solo research",
    role: "Research & Development",
    type: "Research Prototype"
  };

  const technologies = ["D3.js", "TensorFlow", "Python", "Observable"];

  const researchQuestions = [
    "How can visualization systems automatically detect optimal chart types?",
    "What factors most significantly impact data comprehension?", 
    "Can machine learning predict user cognitive load from context?",
    "How do device constraints affect visualization effectiveness?"
  ];

  const methodology = [
    {
      step: "01",
      title: "Literature Analysis",
      description: "Comprehensive review of cognitive psychology, information design, and human-computer interaction research spanning 40 years of studies."
    },
    {
      step: "02", 
      title: "User Studies",
      description: "Conducted comprehension tests with 120 participants across different expertise levels and contexts to establish baseline performance metrics."
    },
    {
      step: "03",
      title: "Algorithm Development", 
      description: "Developed machine learning models to predict optimal visualization types based on data characteristics and contextual variables."
    },
    {
      step: "04",
      title: "Prototype Testing",
      description: "Built working prototype and validated effectiveness through A/B testing against traditional static visualization approaches."
    }
  ];

  const coreAlgorithms = [
    {
      name: "Complexity Assessment",
      description: "Statistical analysis of data distribution"
    },
    {
      name: "Context Recognition", 
      description: "Device and user capability detection"
    },
    {
      name: "Load Prediction",
      description: "Cognitive overhead estimation"
    },
    {
      name: "Chart Selection",
      description: "Optimal visualization type decision tree"
    }
  ];

  const keyFindings = [
    {
      number: "01",
      title: "Context Trumps Convention",
      description: "User context and cognitive state proved more important than traditional visualization best practices in determining optimal chart types."
    },
    {
      number: "02", 
      title: "Expertise Adaptation",
      description: "Expert users benefited from more complex visualizations, while novices performed better with simplified, guided representations."
    },
    {
      number: "03",
      title: "Device-Aware Design", 
      description: "Mobile contexts required fundamentally different visualization approaches, not just scaled-down desktop versions."
    }
  ];

  const results = [
    { percentage: "34%", metric: "Faster comprehension", detail: "compared to static charts" },
    { percentage: "28%", metric: "Reduced cognitive load", detail: "measured via eye tracking" },
    { percentage: "89%", metric: "User preference", detail: "in A/B testing" },
    { percentage: "15%", metric: "Higher accuracy", detail: "in data interpretation tasks" }
  ];

  const futureDirections = [
    {
      title: "Real-time Learning",
      description: "Implement continuous learning from user interactions to improve adaptation accuracy over time."
    },
    {
      title: "Multi-modal Input",
      description: "Incorporate eye tracking, gesture recognition, and biometric data for more sophisticated context awareness."
    },
    {
      title: "Collaborative Adaptation", 
      description: "Extend system to handle multiple users with different expertise levels viewing the same visualization."
    },
    {
      title: "Domain Specialization",
      description: "Create specialized models for specific domains like finance, healthcare, and scientific research."
    }
  ];

  return (
    <Container>
      {/* Project Header */}
      <div className="pt-8 pb-4">
        <Eyebrow className="mb-4">
          {projectDetails.category} • {projectDetails.year}
        </Eyebrow>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <Headline className="mb-8">
              Adaptive Data Visualization
            </Headline>
            
            <Lede className="mb-8">
              Smart charts that automatically adjust their representation based on data complexity, user context, and cognitive load to optimize comprehension and reduce information processing overhead.
            </Lede>

            {/* Project Metadata */}
            <DataGrid columns={2} className="mb-8">
              <DataPair label="Duration">
                {projectDetails.duration}
              </DataPair>
              <DataPair label="Team">
                {projectDetails.team}
              </DataPair>
              <DataPair label="Role">
                {projectDetails.role}
              </DataPair>
              <DataPair label="Type">
                {projectDetails.type}
              </DataPair>
            </DataGrid>

            {/* Tools & Technologies */}
            <div className="mb-8">
              <MinorHeading className="mb-4">Tools & Technologies</MinorHeading>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <CategoryTag key={index}>
                    {tech}
                  </CategoryTag>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <ButtonText variant="primary">
                View Live Project
              </ButtonText>
              <ButtonText variant="secondary">
                View on GitHub
              </ButtonText>
            </div>
          </div>

          {/* Cover Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
              <SmallText className="text-gray-400">Cover Image</SmallText>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration */}
      <div className="py-16 border-t border-gray-200">
        <Subheading className="mb-8">
          Interactive Demonstration
        </Subheading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <SmallText className="font-medium text-gray-700 mb-2">Data Complexity</SmallText>
              <div className="relative">
                <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1">
                  <SmallText className="text-gray-500">Simple</SmallText>
                  <SmallText className="text-gray-500">Complex</SmallText>
                </div>
              </div>
            </div>
            
            <div>
              <SmallText className="font-medium text-gray-700 mb-2">User Expertise</SmallText>
              <div className="relative">
                <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1">
                  <SmallText className="text-gray-500">Novice</SmallText>
                  <SmallText className="text-gray-500">Expert</SmallText>
                </div>
              </div>
            </div>

            <div>
              <SmallText className="font-medium text-gray-700 mb-2">Device Context</SmallText>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Desktop</option>
                <option>Mobile</option>
                <option>Tablet</option>
              </select>
            </div>

            <div>
              <SmallText className="font-medium text-gray-700 mb-2">Cognitive Load</SmallText>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              <SmallText className="text-gray-500 mt-1">Optimal</SmallText>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="mb-8">
              {/* Sample bar chart */}
              <div className="flex items-end justify-center space-x-2 h-48">
                <div className="bg-yellow-400 w-8" style={{height: '30%'}}></div>
                <div className="bg-yellow-400 w-8" style={{height: '60%'}}></div>
                <div className="bg-yellow-400 w-8" style={{height: '40%'}}></div>
                <div className="bg-yellow-400 w-8" style={{height: '80%'}}></div>
                <div className="bg-yellow-400 w-8" style={{height: '50%'}}></div>
              </div>
              <div className="flex justify-center space-x-8 mt-4">
                <SmallText className="text-gray-500">Q1</SmallText>
                <SmallText className="text-gray-500">Q2</SmallText>
                <SmallText className="text-gray-500">Q3</SmallText>
                <SmallText className="text-gray-500">Q4</SmallText>
                <SmallText className="text-gray-500">Q5</SmallText>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Eyebrow className="mb-1">CHART TYPE</Eyebrow>
                <SmallText className="font-medium">Bar Chart</SmallText>
              </div>
              <div>
                <Eyebrow className="mb-1">ADAPTATION REASON</Eyebrow>
                <SmallText className="font-medium">Moderate complexity, adapted to user expertise</SmallText>
              </div>
              <div>
                <Eyebrow className="mb-1">PROCESSING LOAD</Eyebrow>
                <SmallText className="font-medium">Optimal</SmallText>
              </div>
            </div>
          </div>
        </div>

        <Paragraph className="mt-8 max-w-3xl">
          Adjust the controls above to see how the visualization automatically adapts its representation. The system considers multiple factors simultaneously to select the optimal chart type and styling.
        </Paragraph>
      </div>

      {/* Research Context */}
      <div className="py-16 border-t border-gray-200">
        <Subheading className="mb-8">
          Research Context
        </Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading className="mb-4">
              Problem Statement
            </SectionHeading>
            <Paragraph className="mb-8">
              Traditional data visualization tools use static chart types that don&apos;t account for varying user contexts, data characteristics, or cognitive constraints. This leads to suboptimal information processing and comprehension failures.
            </Paragraph>
            <Paragraph className="mb-8">
              Research in cognitive psychology demonstrates that information processing effectiveness varies significantly based on visual complexity, user expertise, and environmental factors. Yet current visualization systems ignore these variables.
            </Paragraph>

            <SectionHeading className="mb-4">
              Research Questions
            </SectionHeading>
            <div className="space-y-3">
              {researchQuestions.map((question, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">?</span>
                  <Paragraph>{question}</Paragraph>
                </div>
              ))}
            </div>

            <SectionHeading className="mb-4 mt-8">
              Theoretical Foundation
            </SectionHeading>
            <Paragraph>
              Built on cognitive load theory (Sweller, 1988) and dual coding theory (Paivio, 1986), the system applies information processing principles to automatically optimize visual representations for human cognition.
            </Paragraph>
          </div>

          <div>
            <SectionHeading className="mb-8">
              Methodology
            </SectionHeading>
            <div className="space-y-8">
              {methodology.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-medium text-white mr-4 flex-shrink-0">
                    {method.step}
                  </div>
                  <div>
                    <SubsectionHeading className="mb-2">
                      {method.title}
                    </SubsectionHeading>
                    <Paragraph className="text-sm">
                      {method.description}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="py-16 border-t border-gray-200">
        <Subheading className="mb-8">
          Technical Implementation
        </Subheading>

        <SectionHeading className="mb-8">
          System Architecture
        </SectionHeading>
        
        {/* System Architecture Diagram */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center justify-center">
            <SmallText className="text-gray-400">System Architecture Diagram</SmallText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <SubsectionHeading className="mb-6">
              Core Technologies
            </SubsectionHeading>
            <div className="space-y-4">
              <div>
                <SmallText className="font-medium text-gray-900 mb-1">D3.js</SmallText>
                <SmallText className="text-gray-600">Dynamic visualization generation</SmallText>
              </div>
              <div>
                <SmallText className="font-medium text-gray-900 mb-1">TensorFlow.js</SmallText>
                <SmallText className="text-gray-600">Client-side machine learning</SmallText>
              </div>
              <div>
                <SmallText className="font-medium text-gray-900 mb-1">WebGL</SmallText>
                <SmallText className="text-gray-600">Hardware-accelerated rendering</SmallText>
              </div>
              <div>
                <SmallText className="font-medium text-gray-900 mb-1">Python</SmallText>
                <SmallText className="text-gray-600">Model training and data analysis</SmallText>
              </div>
            </div>
          </div>

          <div>
            <SubsectionHeading className="mb-6">
              Algorithms
            </SubsectionHeading>
            <div className="space-y-4">
              {coreAlgorithms.map((algorithm, index) => (
                <div key={index}>
                  <SmallText className="font-medium text-gray-900 mb-1">{algorithm.name}</SmallText>
                  <SmallText className="text-gray-600">{algorithm.description}</SmallText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SubsectionHeading className="mb-4">
          Key Implementation Decisions
        </SubsectionHeading>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-yellow-400 mr-3 mt-1">•</span>
            <Paragraph>Client-side ML processing to ensure privacy and reduce latency</Paragraph>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 mr-3 mt-1">•</span>
            <Paragraph>Modular architecture allowing easy integration with existing tools</Paragraph>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 mr-3 mt-1">•</span>
            <Paragraph>Real-time adaptation without requiring user configuration</Paragraph>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 mr-3 mt-1">•</span>
            <Paragraph>Fallback mechanisms for environments without ML support</Paragraph>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 mr-3 mt-1">•</span>
            <Paragraph>Performance optimization for mobile and low-power devices</Paragraph>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="py-16 border-t border-gray-200">
        <Subheading className="mb-12">
          Results & Impact
        </Subheading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-yellow-400 mb-2">
                {result.percentage}
              </div>
              <SmallText className="font-medium text-gray-900 mb-1">{result.metric}</SmallText>
              <SmallText className="text-gray-500">{result.detail}</SmallText>
            </div>
          ))}
        </div>

        <SectionHeading className="mb-8">
          Key Findings
        </SectionHeading>
        
        <div className="space-y-8 mb-16">
          {keyFindings.map((finding, index) => (
            <div key={index} className="flex items-start">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-sm font-medium text-white mr-4 flex-shrink-0">
                {finding.number}
              </div>
              <div>
                <SubsectionHeading className="mb-2">
                  {finding.title}
                </SubsectionHeading>
                <Paragraph>
                  {finding.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>

        <SectionHeading className="mb-8">
          Future Directions
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureDirections.map((direction, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <SubsectionHeading className="mb-3">
                {direction.title}
              </SubsectionHeading>
              <Paragraph className="text-sm">
                {direction.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
