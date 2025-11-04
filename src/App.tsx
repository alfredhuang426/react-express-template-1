import React, { useEffect, useState } from 'react';

export default function App() {
	const [message, setMessage] = useState('載入中...');

	useEffect(() => {
		fetch('/api/hello')
			.then((r) => r.json())
			.then((data) => setMessage(data.message))
			.catch(() => setMessage('API 請求失敗'));
	}, []);

	return (
		<div style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system', padding: 24 }}>
			<h1>React + Express + Vite 6 + TypeScript</h1>
			<p>API 回應: {message}</p>
		</div>
	);
}


