var app = new Vue({
  el: '#contents',
  data: {
    todos: [
      { text: '수학 과제'},
      { text: '영어 과제'},
      { text: '칫솔 구매'},
      { text: '귀가 준비'}
    ],
    posts: [
      { date: '[2020/01/04 15:34]',
        nick: '내가간다',
        schedule: '주말 숙제 마치기',
        state: '완료'},

      { date: '[2020/01/04 12:56]',
        nick: '목도리',
        schedule: '과제 제출',
        state: '완료'},

      { date: '[2020/01/03 8:03]',
        nick: '목도리',
        schedule: '8시 기상',
        state: '완료'},

      { date: '[2020/01/02 20:11]',
        nick: '내가간다',
        schedule: '준비물 구입',
        state: '완료'},

      { date:'[2020/01/02 00:00]',
        nick: '목도리',
        schedule: '1분기 제작',
        state: '지키지 못'},
        
    ],
    login: true
  },
   methods: {
     addNewTodo: function () {
       this.todos.push({
         text: this.newTodoText
       })
       this.newTodoText = ''
     }
   }
});
