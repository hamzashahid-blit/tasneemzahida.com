import * as fs from 'fs';
import path from 'path';

export function readFile(path: fs.PathOrFileDescriptor) {
	return fs.readFileSync(path, 'utf-8');
}

export function* walkSync(dir: string): Generator<string, fs.Dirent[]> {
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

export function getFilenames(relativeBasedir: string): (string | undefined)[] {
  let filenames: (string | undefined)[] = [];
  for (const filePath of walkSync(path.resolve(relativeBasedir))) {
	filenames.push(filePath.split('/').pop());
  }
  return filenames;
}

export function getCategoryFilenames(relativeBasedir: string): (string | undefined)[][] {
  let filenames: (string | undefined)[][] = [];
  for (const filePath of walkSync(path.resolve(relativeBasedir))) {
	let fullPath: string[] = filePath.split('/');
	filenames.push([fullPath.pop(), fullPath.pop()]);
  }
  return filenames;
}
