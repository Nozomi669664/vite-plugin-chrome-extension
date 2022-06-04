import chalk from 'chalk';

export default {
	success(msg) {
		return chalk.green(msg);
	},
	error(msg) {
		return chalk.red(msg);
	},
	warn(msg) {
		return chalk.yellow(msg);
	},
};
