import yargs from 'yargs';

yargs.command(require('./default')).commandDir('cmds').demandCommand().help().argv;
