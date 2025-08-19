import { Container } from "@/components/layout/Container";
import { 
  Headline, 
  Subheading, 
  SectionHeading,
  Paragraph,
  Lede,
  SmallText,
  CategoryTag,
  Dateline,
  Eyebrow,
  LinkText,
  ButtonText,
  FormLabel
} from "@/components/typography";
import { getAllBlogs } from "@/lib/getAllBlogs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Natcha Pradappet",
  description:
    "Exploring the intersection of design and engineering through articles on AI, interface design, and human-centered technology.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  // Featured posts (first 2 posts)
  const featuredPosts = data.slice(0, 2);
  // Recent posts (remaining posts)
  const recentPosts = data.slice(2);

  const categories = [
    { name: "Design Engineering", count: 8 },
    { name: "AI & Technology", count: 12 },
    { name: "Interface Design", count: 6 },
    { name: "Human-Computer Interaction", count: 4 },
    { name: "Research", count: 3 }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <div className="pt-20 pb-24">
        <Eyebrow className="mb-4">Writing</Eyebrow>
        <Headline>
          Blog
        </Headline>
        <Lede className="max-w-4xl">
          Exploring the intersection of design and engineering through articles on AI, interface design, and human-centered technology.
        </Lede>
      </div>

      {/* Featured Posts */}
      <div className="pb-24">
        <Subheading className="mb-12">
          Featured
        </Subheading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="mb-2">
                <Dateline dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </Dateline>
              </div>
              <SectionHeading className="mb-3 group-hover:text-gray-600 transition-colors">
                {post.title}
              </SectionHeading>
              <Paragraph className="text-sm">
                {post.description}
              </Paragraph>
              {post.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                    <CategoryTag key={tagIndex}>
                      {tag}
                    </CategoryTag>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <Subheading className="mb-12">
            Recent Posts
          </Subheading>
          
          <div className="space-y-12">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="md:col-span-3">
                    <div className="mb-2">
                      <Dateline dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </Dateline>
                    </div>
                    <SectionHeading className="mb-3 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </SectionHeading>
                    <Paragraph className="text-sm mb-4">
                      {post.description}
                    </Paragraph>
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <CategoryTag key={tagIndex}>
                            {tag}
                          </CategoryTag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Categories */}
          <div>
            <SectionHeading className="mb-6">
              Categories
            </SectionHeading>
            <div className="space-y-3">
              {categories.map((category: {name: string, count: number}, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <Paragraph className="hover:text-gray-900 cursor-pointer transition-colors">
                    {category.name}
                  </Paragraph>
                  <SmallText className="text-gray-400">
                    {category.count}
                  </SmallText>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gray-50 rounded-lg p-6">
            <SectionHeading className="mb-4">
              Newsletter
            </SectionHeading>
            <Paragraph className="text-sm mb-6">
              Get the latest articles on design engineering and AI directly in your inbox.
            </Paragraph>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <ButtonText variant="primary" className="w-full">
                Subscribe
              </ButtonText>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
