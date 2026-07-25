module.exports = {
  apps: [{
    name: 'iptv-providers-uk',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3003',
    cwd: '/home/iptv-providers-uk/htdocs/iptv-providers-uk.com',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 3003
    }
  }]
};