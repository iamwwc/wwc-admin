module.exports = {
    serverPort: isDev ? 20000 : 5000,
    serverListenAddr: '127.0.0.1',
    serverApiPath: '/api/blog',
    serverAdminPath : '/admin',
    usedDatabase: 'mongo',

    mongoDBHost: "127.0.0.1",

    mongoDBPort: 27017,
    mongoDBName: 'blog',


    postsCollectionName: isDev ? 'testposts' : 'posts',

    logLevel: 'debug',
}