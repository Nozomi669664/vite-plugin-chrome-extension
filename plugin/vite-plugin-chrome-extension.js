import { readJSONSync, existsSync } from 'fs-extra';
import { join } from 'path';

// import parseManifest from './parseManifest';
// import log from './log.js';
import chalk from 'chalk';
console.log(chalk);
export default function chromeExtension(
	options = {},
) {
	const { manifestPath } = options;
	let manifest;
	// console.log(log);
	console.log(manifestPath);
	try {
		const packageJsonPath = join(process.cwd(), 'package.json');
		options.pkg = options.pkg || readJSONSync(packageJsonPath);
	} catch (error) {
		console.log(error);
	}
	return {
		name: 'vite-plugin-chrome-extension',
		configResolved (_config) {
			// console.log(config);
		},
		async options (options) {
			if (existsSync(manifestPath)) {
				manifest = readJSONSync(manifestPath);
				console.log(manifest);
			} else {
				// log.error('manifest isn\'t exist');
				// console.log(chalk.red('manifest isn\'t exist'));
			}
			return options;
		},
		transform(_src, _idignored) {
			console.log('transform');
		},
	};
}
