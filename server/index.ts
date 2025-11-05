import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 5174;

app.use(express.json());

app.get('/api/hello', (_req, res) => {
	res.json({ message: 'Hello from Express API!!!' });
});

// 在 ESM 下取得 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生產環境：提供 Vite 打包後的前端靜態檔案
if (process.env.NODE_ENV === 'production') {
	const clientDistPath = path.resolve(__dirname, '../client');
	app.use(express.static(clientDistPath));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(clientDistPath, 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`[server] listening on http://localhost:${PORT}`);
});


