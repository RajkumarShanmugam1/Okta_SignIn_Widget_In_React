const config = {
  oidc: {
    issuer: '',
    clientId: '',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'http://localhost:3000/login/callback'
  },
  widget: {
    issuer: '',
    clientId: '',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'http://localhost:3000/login/callback'
  }
};

export default config;
