const DiscordRPC = require('discord-rpc');
const chalk = require('chalk');
const config = require(__dirname + '/config/config.json');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(config.client.id);

rpc.on('ready', async () => {
	if (!rpc) return;
	await console.log(chalk.yellow.bold('[INFO]: Loading...'));
	await rpc.setActivity({
		details: config.text.details.text,
		largeImageKey: config.images.large.key,
		largeImageText: config.images.large.text,
		smallImageKey: config.images.small.key,
		smallImageText: config.images.small.text,
		instance: false,
		buttons: [
			{
				label: config.buttons.one.name,
				url: config.buttons.one.url
			},
			{
				label: config.buttons.two.name,
				url: config.buttons.two.url
			}
		]
	});
	console.log(chalk.green.bold('[INFO]: Successfully loaded RPC.'));
});

rpc.login({ clientId: config.client.id }).catch(err => console.error(err));