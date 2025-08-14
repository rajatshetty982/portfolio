// src/app/resume/page.tsx
export default function Resume() {
  return (
    <> 
    <a href="rajat-shetty's-resume.pdf" download>
        <button className="button-accent">Download the resume (PDF)</button>
      </a>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Backend Engineer</strong> at Spintly India (2024–Present)
          <br />
          Built scalable APIs in Go and Python for microservices and hardware devices
        </li>
      </ul>
      <h2>Personal Projects</h2>
      <ul>
        <li>Chess game with SDL2 in C</li>
        <li>Portfolio website using React and Go backend</li>
        <li>Basic Unix/Linux-like OS</li>
        <li>Communication interface between Raspberry Pi and a mock FR device(linux laptop) using MQTT</li>
      </ul>
     
    </>
  );
}