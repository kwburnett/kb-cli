import { Box, Text, Spacer } from 'ink';
import React from 'react';

export interface PostmanRunnerExport {
	id: string;
	name: string;
	timestamp: string;
	collection_id: string;
	folder_id: number;
	environment_id: string;
	totalPass: number;
	totalFail: number;
	results: {
		id: string;
		name: string;
		responseCode: {
			code: number;
			name: string;
		};
		tests: object;
		testPassFailCounts: object;
		times: number[];
		allTests: object[];
	}[];
	count: number;
	totalTime: number;
	collection: {
		requests: { id: string; method: string }[];
	};
}

export interface AnalysisProps {
	data: PostmanRunnerExport;
}

const Analysis: React.FunctionComponent<AnalysisProps> = ({ data }) => {
	data;
	return (
		<Box flexDirection="column">
			<Text>{data.name}</Text>
			{data.results.map((result) => {
				result.times.sort;
				const median = result.times[Math.floor(result.times.length / 2)];
				const average = result.times.reduce((time, sum) => (sum += time)) / result.times.length;
				return (
					<Box paddingLeft={2} key={result.id} flexDirection="column">
						<Text>{result.name}</Text>
						<Box paddingLeft={2} width={40}>
							<Text>Median: </Text>
							<Text color="green">{median}</Text>
							<Spacer />
							<Text>Average: </Text>
							<Text color="green">{average}</Text>
							<Spacer />
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default Analysis;
