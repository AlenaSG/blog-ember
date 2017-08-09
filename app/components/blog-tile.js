import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: true,
  updateBlogForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(blog, params) {
      this.sendAction('update', blog, params);
    },
    delete(blog) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
