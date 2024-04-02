const config = {
  oidc: {
    issuer: 'https://dev-49584893.okta.com/oauth2/default',
    clientId: '0oag28m1bz9GBcDny5d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'http://localhost:3000/login/callback'
  },
  widget: {
    issuer: 'https://dev-49584893.okta.com/oauth2/default',
    clientId: '0oag28m1bz9GBcDny5d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'http://localhost:3000/login/callback'
  }
};

export default config;