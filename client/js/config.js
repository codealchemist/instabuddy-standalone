const configMap = {
  localhost: {
    wsBinaryUrl: 'ws://localhost:9001',
    wsUrl: 'ws://localhost:4000'
  },
  'instabuddy.herokuapp.com': {
    wsBinaryUrl: 'wss://instabuddy-binary-socket.herokuapp.com',
    wsUrl: 'wss://instabuddy-socket.herokuapp.com'
  }
}

const config = configMap[location.hostname]
console.log('CONFIG:', config)
