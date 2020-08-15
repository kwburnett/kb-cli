import { spawn } from 'child_process';
import { Argv } from 'yargs';

export const cmd = 'ssh [force]';
export const desc = 'Initialize the SSH agent';
export const builder = (yargs: Argv<{}>) => {
	yargs.positional('force', {
		describe: 'Force the SSH Agent to be restarted',
		alias: 'f',
		type: 'boolean',
		default: false,
	});
};
export const handler = (argv: { force: boolean }) => {
	if (process.env.SSH_AUTH_SOCK && !argv.force) {
		console.log('ssh is already initialized');
		return;
	}
	spawn('cmd.exe', ['/c', 'kbssh'], { stdio: [process.stdin, process.stdout, process.stderr] });
};
