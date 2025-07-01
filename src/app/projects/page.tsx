const projects = [
  { title: 'Ascent SFTP Pipeline', tech: ['Go', 'PostgreSQL'], desc: 'Automated SFTP delivery system with hashing and deduplication.' },
  { title: 'Chess Engine in C', tech: ['C', 'SDL2'], desc: 'WIP engine with focus on game loop and board rendering.' },
];

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ul className="project-list">
        {projects.map((p, i) => (
          <li key={i}>
            <h2>{p.title}</h2>
            <p><strong>Tech:</strong> {p.tech.join(', ')}</p>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
