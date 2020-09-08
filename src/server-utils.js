/* eslint-env node */

import yaml from 'js-yaml';

import fs from 'fs';
import path from 'path';

export async function getConfig() {
	return yaml.safeLoad(
		fs.readFileSync(path.join(process.cwd(), 'config.yaml'), 'utf-8')
	);
}
