module.exports = async (client) => {
    console.log('I am online');
    client.user.setActivity(' This server', { type: 'WATCHING' });
}