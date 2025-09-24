import type { MDXComponents } from 'mdx/types';
import { H1, H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/TextElements";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: (props: any) => <H1 id={props.id} className="scroll-mt-20" {...props} />,
    h2: (props: any) => <H2 id={props.id} className="scroll-mt-20 mt-12 mb-4" {...props} />,
    h3: (props: any) => <H3 id={props.id} className="scroll-mt-20 mt-8 mb-3" {...props} />,

    // Text elements
    p: (props: any) => <P className="mb-4 leading-relaxed" {...props} />,

    // Code
    pre: (props: any) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto border my-6" {...props} />
    ),
    code: (props: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border" {...props} />
    ),

    // Lists
    ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props} />,
    li: (props: any) => <li className="text-foreground/90" {...props} />,

    // Links
    a: (props: any) => {
      const isExternal = props.href?.startsWith("http");

      if (isExternal) {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 underline underline-offset-2"
            {...props}
          />
        );
      }

      return (
        <Link
          className="text-accent hover:text-accent/80 underline underline-offset-2"
          {...props}
        />
      );
    },

    // Horizontal rule
    hr: (props: any) => <hr className="my-8 border-border" {...props} />,

    // Blockquote
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r-lg my-4" {...props} />
    ),

    ...components,
  };
}