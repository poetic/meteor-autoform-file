Package.describe({
  name: "poetic:autoform-file",
  summary: "Cross platform file uploads for AutoForm (supports multiple file uploads)",
  description: "Cross platform file uploads for AutoForm (supports multiple file uploads)",
  version: "0.2.11",
  git: "http://github.com/poetic/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less',
    'aldeed:autoform@5.3.2',
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
