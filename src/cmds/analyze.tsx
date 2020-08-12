import fs from 'fs';
import { render } from 'ink';
import React, { ReactElement } from 'react';
import Analysis, { PostmanRunnerExport } from '../ui/Analysis';
import Error from '../ui/Error';

export const command = 'analyze <files..>';
export const desc = 'Run analysis on Postman exports';
export const handler = (argv: { files: string[] }) => {
	const analyses: ReactElement[] = [];
	argv.files.forEach((file) => {
		if (!fs.existsSync(file)) {
			render(<Error>{`The file '${file}' does not exist.`}</Error>);
			return;
		}
		const testData = JSON.parse(fs.readFileSync(file, 'utf8')) as PostmanRunnerExport;
		analyses.push(<Analysis data={testData} key={file} />);
	});
	render(analyses as unknown as ReactElement);
};
