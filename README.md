Clowder React Frontend
============================================

**Work in Progress**

Requirements: [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com).

Install dependencies:

`npm install`

Run for development:

`npm start`

By default backend runs at `http://localhost:8000`. If running at different url/port, use:

`CLOWDER_REMOTE_HOSTNAME=http://somewhere:9999 npm start`

Update calls to backend (if needed, backend must be running):

`CLOWDER_REMOTE_HOSTNAME=http://localhost:8000 npm run codegen:v2`

Build: `npm run build`
