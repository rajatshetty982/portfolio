import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), 'src/content');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {files.map(filename => {
          const slug = filename.replace(/\.mdx$/, '');
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}