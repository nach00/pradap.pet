import React from "react";
import { 
  Headline, 
  Subheading, 
  SectionHeading, 
  SubsectionHeading, 
  MinorHeading, 
  SmallHeading,
  Paragraph,
  Blockquote,
  BulletedList,
  NumberedList,
  ListItem,
  NumberedListItem,
  LinkText,
  InlineCode,
  Highlight
} from './index';

// MDX component mapping for use in .mdx files
export const mdxComponents = {
  // Headings - using semantic hierarchy
  h1: ({ children, ...props }: any) => <Headline {...props}>{children}</Headline>,
  h2: ({ children, ...props }: any) => <Subheading {...props}>{children}</Subheading>,
  h3: ({ children, ...props }: any) => <SectionHeading {...props}>{children}</SectionHeading>,
  h4: ({ children, ...props }: any) => <SubsectionHeading {...props}>{children}</SubsectionHeading>,
  h5: ({ children, ...props }: any) => <MinorHeading {...props}>{children}</MinorHeading>,
  h6: ({ children, ...props }: any) => <SmallHeading {...props}>{children}</SmallHeading>,
  
  // Text
  p: ({ children, ...props }: any) => <Paragraph className="mb-6" {...props}>{children}</Paragraph>,
  
  // Links
  a: ({ children, href, ...props }: any) => (
    <LinkText href={href} external={href?.startsWith('http')} {...props}>
      {children}
    </LinkText>
  ),
  
  // Lists
  ul: ({ children, ...props }: any) => <BulletedList className="mb-6" {...props}>{children}</BulletedList>,
  ol: ({ children, ...props }: any) => <NumberedList className="mb-6" {...props}>{children}</NumberedList>,
  li: ({ children, ...props }: any) => <ListItem {...props}>{children}</ListItem>,
  
  // Quotes
  blockquote: ({ children, ...props }: any) => <Blockquote className="my-8" {...props}>{children}</Blockquote>,
  
  // Code
  code: ({ children, ...props }: any) => <InlineCode {...props}>{children}</InlineCode>,
  
  // Pre blocks with syntax highlighting
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8 text-sm leading-relaxed" {...props}>
      {children}
    </pre>
  ),
  
  // Strong/Bold text
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-gray-900" {...props}>{children}</strong>
  ),
  
  // Emphasis/Italic text
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>{children}</em>
  ),
  
  // Horizontal rule
  hr: ({ ...props }: any) => (
    <hr className="border-t border-gray-200 my-12" {...props} />
  ),
  
  // Custom components that can be used in MDX
  Highlight: ({ children, ...props }: any) => <Highlight {...props}>{children}</Highlight>,
};