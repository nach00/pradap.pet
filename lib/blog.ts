import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");
export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime: string;
	tags: string[];
	category: string;
	content: string;
}

export interface TableOfContentsItem {
	id: string;
	title: string;
	level: number;
}

export function getAllPosts(): BlogPost[] {
	try {
		console.log("Checking posts directory:", postsDirectory);

		if (!fs.existsSync(postsDirectory)) {
			console.log("Posts directory does not exist");
			return [];
		}

		const fileNames = fs.readdirSync(postsDirectory);
		console.log("Found files:", fileNames);

		const allPostsData = fileNames
			.filter((fileName) => fileName.endsWith(".mdx"))
			.map((fileName) => {
				try {
					const slug = fileName.replace(/\.mdx$/, "");
					const fullPath = path.join(postsDirectory, fileName);
					const fileContents = fs.readFileSync(fullPath, "utf8");
					const { data, content } = matter(fileContents);
					const stats = readingTime(content);

					console.log("Processing post:", slug, "with data:", data);

					return {
						slug,
						content,
						readTime: stats.text,
						...data,
					} as BlogPost;
				} catch (fileError) {
					console.error("Error processing file:", fileName, fileError);
					return null;
				}
			})
			.filter(Boolean) // Remove null entries
			.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

		console.log("Processed posts:", allPostsData.length);
		return allPostsData;
	} catch (error) {
		console.error("Error in getAllPosts:", error);
		return [];
	}
}

export function getPostBySlug(slug: string): BlogPost | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);
		const stats = readingTime(content);

		return {
			slug,
			content,
			readTime: stats.text,
			...data,
		} as BlogPost;
	} catch (error) {
		return null;
	}
}

export function generateTableOfContents(content: string) {
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const headings = [];
	let match;

	while ((match = headingRegex.exec(content)) !== null) {
		const level = match[1].length;
		const title = match[2].trim();
		const id = title
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-");

		headings.push({
			id,
			title,
			level,
		});
	}

	return headings;
}
