const configMap = {
  localhost: {
    wsBinaryUrl: 'ws://localhost:9001',
    wsUrl: 'ws://localhost:4000'
  },
  'instabuddy.herokuapp.com': {
    wsBinaryUrl: 'ws://instabuddy-binary-socket.herokuapp.com',
    wsUrl: 'ws://instabuddy-socket.herokuapp.com'
  }
}

const config = configMap[location.hostname]
console.log('CONFIG:', config)
