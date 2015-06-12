Forum.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description')
      });
      newQuestion.save();
      this.set('title', '');
      this.set('description', '');
      this.set('author', '')
      this.transitionToRoute('questions');
    }
  }
});
