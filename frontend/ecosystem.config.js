require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      path: DEPLOY_PATH,
      repo: DEPLOY_REPO,
      'post-deploy': `cd frontend && pwd && npm i && npm run build`,
    },
  },
};
