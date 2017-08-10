import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  blog: DS.belongsTo('blog', { async: true })
});
