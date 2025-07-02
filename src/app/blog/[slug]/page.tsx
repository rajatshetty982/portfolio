import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), 'src/content', `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) {
    return <div>Post not found.</div>;
  }

  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);

  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
}