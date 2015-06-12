Forum.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions')
      }
    },
      save: function() {
        this.set('isEditing', false);
      }
  }
});
