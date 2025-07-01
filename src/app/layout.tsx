// src/app/layout.tsx
import './globals.css'

export const metadata = {
	title: 'My Go & Next.js Portfolio',
	description: 'A starter portfolio showcasing Go backend and Next.js frontend.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
