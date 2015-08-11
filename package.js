Package.describe({
  name: "poetic:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.2.8",
  git: "http://github.com/poetic/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less',
    'aldeed:autoform@5.3.2',
    'fortawesome:fontawesome@4.3.0'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
