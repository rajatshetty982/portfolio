'use client'; // This directive is necessary for client-side components in Next.js App Router

import { useState, useEffect } from 'react';

export default function HomePage() {
	const [message, setMessage] = useState<string>('Loading...');
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				// This path corresponds to your Go serverless function deployed on Vercel
				const response = await fetch('/api/hello-go');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setMessage(data.message);
			} catch (err: any) {
				console.error('Failed to fetch data:', err);
				setError(`Failed to load message: ${err.message}. Check your backend deployment.`);
				setMessage('Error!');
			}
		}
		fetchData();
	}, []);

	return (
		<div style={{
			fontFamily: 'Arial, sans-serif',
			textAlign: 'center',
			padding: '50px',
			backgroundColor: '#f0f0f0',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<h1 style={{ color: '#333' }}>My Portfolio Starter</h1>
			<p style={{ fontSize: '1.2em', color: '#555' }}>
				Message from Go Backend:
			</p>
			{error ? (
				<p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
			) : (
				<p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#0070f3' }}>
					{message}
				</p>
			)}

			<div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
				<h2 style={{ color: '#444' }}>Next Steps:</h2>
				<ul style={{ listStyleType: 'none', padding: 0 }}>
					<li style={{ marginBottom: '10px' }}>
						<strong style={{ color: '#666' }}>Frontend:</strong> Modify `src/app/page.tsx` (and other `src/app/` files) to showcase your art and game projects. Use images, descriptions, and interactive elements.
					</li>
					<li style={{ marginBottom: '10px' }}>
						<strong style={{ color: '#666' }}>Backend:</strong> Add more Go serverless functions in the `api/` directory (e.g., `api/get-art.go`, `api/game-data.go`) to power your portfolio with dynamic content.
					</li>
					<li style={{ marginBottom: '10px' }}>
						<strong style={{ color: '#666' }}>Data:</strong> Integrate your Go functions with a database (e.g., Supabase, PlanetScale, MongoDB Atlas – explore their free tiers!).
					</li>
				</ul>
			</div>
		</div>
	);
}
