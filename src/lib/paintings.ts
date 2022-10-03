import fs from 'fs';

export const fetchPaintings: string = async () => {
	return await fs.readFileSync('src/lib/assets/paintings.json', 'utf-8');
};
