import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  heading: DS.attr(),
  content: DS.attr(),
  tag: DS.attr(),
  image: DS.attr()
  });
