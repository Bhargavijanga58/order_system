import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const viewsPath = join(__dirname, 'views');
const publicPath = join(__dirname, 'public'); 
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
