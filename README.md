# React-Redux-Starter
Setting up a new project can be a pain. This is a boilerplate react and redux app for setting up new projects.

## Usage
It's very simple to get up and running. Simply git clone this repo and npm/yarn install. I set this up using Yarn so I will refer to that when talking about commands. Simply use the NPM version of commands if that is your preferred package manager.

I usually work in a Rails/React tech stack so by default it's configured for use with it's sister repo https://github.com/mikemerritt/rails-api-starter, which means that it expects a JSON API to be located at localhost:3000.

As for production, this app doesn't make any assumptions and therefore does not have production config. I will leave that up to you. Since this compiles into static files there are a multitude of options for a production environment. It can be deployed as a static website on Amazon S3/Cloudfront or serve it with a traditional web server. It's up to you.

### Building
Running `yarn build` will build the bundle and output it to public/dist.

### Dev Server
Running `yarn start` will start the webpack-dev-server on port 3500 with hot-module-replacement.

### Testing
Running `yarn test` will run any tests you have. By default it's configured to use Jest but can easily be swapped out for something else. `yarn snapshot` will run your test suite and rebuild snapshots.
