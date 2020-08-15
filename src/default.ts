import { spawn } from 'child_process';

export const command = '$0';
export const desc = 'run local scripts';
export const handler = (argv: { _: string[] }) => {
	// Just execute the command from the command line
	spawn('cmd.exe', ['/c', ...argv._], { stdio: [process.stdin, process.stdout, process.stderr] });
};
