Forum.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body')
      });
      newQuestion.save();
      this.set('title', '');
      this.set('body', '');
      this.set('author', '')
      this.transitionToRoute('questions');
    }
  }
});
