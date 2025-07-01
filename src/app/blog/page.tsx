import Link from 'next/link';

const posts = [
  { slug: 'first-post', title: 'My First Post' },
  { slug: 'second-post', title: 'Another Post Coming Soon' },
];

export default function BlogIndex() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
