import { Container } from "@/components/layout/Container";
import { 
  Headline, 
  Subheading, 
  SectionHeading,
  Paragraph,
  FormLabel,
  ButtonText,
  Status,
  SmallText,
  Eyebrow
} from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Natcha Pradappet",
  description:
    "Available for design engineering projects, research collaborations, and speaking engagements. Particularly interested in AI, adaptive interfaces, and human-centered technology.",
};

export default function Contact() {
  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I specialize in design engineering projects that involve AI integration, adaptive interfaces, design systems, and innovative user experiences. I'm particularly interested in projects that push the boundaries of human-computer interaction."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes! I enjoy working with startups that are building innovative products. I can help with everything from initial prototypes to scalable design systems."
    },
    {
      question: "What&apos;s your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger engagements can span 2-6 months. I provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes, I offer design engineering consultations for teams looking to improve their processes, implement new technologies, or solve specific technical challenges."
    }
  ];

  return (
    <Container>
      {/* Header */}
      <div className="pt-20 pb-24">
        <Eyebrow className="mb-4">Contact</Eyebrow>
        <Headline>
          Let&apos;s Work Together
        </Headline>
        <Paragraph className="text-lg max-w-4xl">
          Available for design engineering projects, research collaborations, and speaking engagements. Particularly interested in AI, adaptive interfaces, and human-centered technology.
        </Paragraph>
      </div>

      {/* Contact Form & Direct Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">
        {/* Contact Form */}
        <div>
          <SectionHeading className="mb-8">
            Send a Message
          </SectionHeading>
          
          <form className="space-y-6">
            <div>
              <FormLabel htmlFor="name">
                Name
              </FormLabel>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <FormLabel htmlFor="email">
                Email
              </FormLabel>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <FormLabel htmlFor="subject">
                Subject
              </FormLabel>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
              >
                <option value="">Select a topic</option>
                <option value="project">Project Inquiry</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <FormLabel htmlFor="message">
                Message
              </FormLabel>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
              />
            </div>

            <ButtonText variant="primary" className="w-full">
              Send Message →
            </ButtonText>
          </form>
        </div>

        {/* Direct Contact */}
        <div>
          <SectionHeading className="mb-8">
            Direct Contact
          </SectionHeading>
          
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Eyebrow className="mb-1">EMAIL</Eyebrow>
                <div className="font-medium text-gray-900">hello@pradap.pet</div>
                <SmallText>For project inquiries and collaborations</SmallText>
              </div>
              <div className="text-gray-400">→</div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Eyebrow className="mb-1">LINKEDIN</Eyebrow>
                <div className="font-medium text-gray-900">/in/natchapradappet</div>
                <SmallText>Professional network and updates</SmallText>
              </div>
              <div className="text-gray-400">→</div>
            </div>

            {/* Twitter */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Eyebrow className="mb-1">TWITTER</Eyebrow>
                <div className="font-medium text-gray-900">@natchapradappet</div>
                <SmallText>Thoughts on design and technology</SmallText>
              </div>
              <div className="text-gray-400">→</div>
            </div>

            {/* Location */}
            <div className="pt-8">
              <SectionHeading className="mb-4">
                Location
              </SectionHeading>
              <Paragraph className="mb-2">Bangkok, Thailand</Paragraph>
              <SmallText>UTC+7 • Available for remote work globally</SmallText>
            </div>

            {/* Current Availability */}
            <div className="pt-4">
              <SectionHeading className="mb-4">
                Current Availability
              </SectionHeading>
              <Status color="green" className="mb-2">
                Open for new projects
              </Status>
              <SmallText>Typical response time: 24-48 hours</SmallText>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pb-24">
        <Subheading className="mb-16">
          Frequently Asked Questions
        </Subheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <SectionHeading>
                {faq.question}
              </SectionHeading>
              <Paragraph className="text-sm">
                {faq.answer}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
