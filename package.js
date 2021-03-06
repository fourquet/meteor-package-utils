Package.describe({
  name: 'fourquet:utils',
  version: '0.0.4',
  summary: 'Utils for Meteor.',
  git: 'https://github.com/fourquet/meteor-package-utils',
  documentation: 'README.md',
  license: 'LICENSE',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.imply('nooitaf:colors@1.1.2', [
    'server',
  ]);
  api.use(['templating', 'reactive-var'], ['client'], {
    weak: true,
  });
  api.addFiles('helpers.js', 'client');
  api.addFiles('utils.js', ['client', 'server']);
  api.addFiles(['server.js', 'methods.js'], ['server']);
  api.export('Utils');
});


Package.onTest(function(api) {
  api.use('ecmascript@0.1.6', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use(['fourquet:utils'], ['client', 'server']);
  api.addFiles('utils-tests.js', ['client', 'server']);
});
