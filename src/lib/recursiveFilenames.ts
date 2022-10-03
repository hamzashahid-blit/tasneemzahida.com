import fs from 'fs';
import path from 'path';

// let files = [];
// export const getFilenamesRecursively = (directory) => {
// 	const filesInDirectory = fs.readdirSync(directory);
// 	for (const file of filesInDirectory) {
// 		const absolute = path.join(directory, file);
// 		if (fs.statSync(absolute).isDirectory()) {
// 			getFilenamesRecursively(absolute);
// 		} else {
// 			files.push(file);
// 		}
// 	}
// 	return files;
// };

export function* walkSync(dir) {
	const files = fs.readdirSync(dir, { withFileTypes: true });
	for (const file of files) {
		if (file.isDirectory()) {
			yield* walkSync(path.join(dir, file.name));
		} else {
			yield path.join(dir, file.name);
		}
	}
	return files;
}

export function getFilenames(relativeBasedir) {
	let filenames = [];
	for (const filePath of walkSync(path.resolve(relativeBasedir))) {
		filenames.push(filePath.split('/').pop());
	}
	return filenames;
}

export function getCategoryFilenames(relativeBasedir) {
	let filenames = [];
	for (const filePath of walkSync(path.resolve(relativeBasedir))) {
		let fullPath = filePath.split('/');
		filenames.push([fullPath.pop(), fullPath.pop()]);
	}
	return filenames;
}
