import fs from 'fs';
import { render } from 'ink';
import React from 'react';
import { Argv } from 'yargs';
import Analysis, { PostmanRunnerExport } from '../ui/Analysis';
import Error from '../ui/Error';

export const command = 'analyze';
export const desc = 'Run analysis on a Postman export';
export const builder = (yargs: Argv<{}>): void => {
	yargs.positional('file', {
		alias: 'f',
		describe: 'The file to analyze',
		type: 'string',
	});
};
export const handler = (argv: { file: string }) => {
	if (!fs.existsSync(argv.file)) {
		render(<Error>{`The file '${argv.file}' does not exist.`}</Error>);
		return;
	}
	const testData = JSON.parse(fs.readFileSync(argv.file, 'utf8')) as PostmanRunnerExport;
	render(<Analysis data={testData} />);
};
