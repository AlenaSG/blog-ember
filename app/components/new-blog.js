import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog1() {
          var params = {
            date: this.get('date'),
            heading: this.get('heading'),
            content: this.get('content'),
            tag: this.get('tag'),
            image: this.get('image'),
          };
          this.set('addNewBlog', false);
          this.sendAction('saveBlog2', params);
        }
      }
});
