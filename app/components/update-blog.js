import Ember from 'ember';
  
export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        date: this.get('date'),
        heading: this.get('heading'),
        content: this.get('content'),
        tag: this.get('tag'),
        image: this.get('image'),
    };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
