import { Text } from 'ink';
import React from 'react';

const Error: React.FunctionComponent = (props) => {
	return <Text color="red">{props.children}</Text>;
};

export default Error;
