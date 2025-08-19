import { Container } from "@/components/layout/Container";
import { LegacyHeading as Heading, LegacyHighlight as Highlight, LegacyParagraph as Paragraph } from "@/components/typography";
import { Projects } from "@/components/sections/Projects";
import { WorkHistory } from "@/components/sections/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building projects</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
