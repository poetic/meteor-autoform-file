AutoForm.addInputType 'fileUpload',
  template: 'afFileUpload'
  valueOut: ->
    @val()

getCollection = (context) ->
  if typeof context.atts.collection == 'string'
    FS._collections[context.atts.collection] or window[context.atts.collection]

getDocument = (context) ->
  collection = getCollection context
  id = Template.instance()?.value?.get?()
  collection?.findOne(id)

Template.afFileUpload.onCreated ->
  self = @
  @value = new ReactiveVar @data.value

  @autorun ->
    _id = self.value.get()
    _id and Meteor.subscribe 'autoformFileDoc', self.data.atts.collection, _id

Template.afFileUpload.onRendered ->
  self = @
  $(self.firstNode).closest('form').on 'reset', ->
    self.value.set null

Template.afFileUpload.helpers
  #label: ->
    #@atts.label or 'Choose file'
  value: ->
    doc = getDocument @
    doc?.isUploaded() and doc._id
  schemaKey: ->
    @atts['data-schema-key']
  file: ->
    getDocument @
  attrIfMultiple: ->
    if @atts.multiple
      'multiple'
    else
      ''

Template.afFileUpload.events
  'click .js-select-file': (e, t) ->
    t.$('.js-file').click()

  'click .js-remove': (e, t) ->
    e.preventDefault()
    t.value.set null
