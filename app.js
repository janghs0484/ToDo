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
      { text: '[2020/01/04 15:34] 내가간다님께서 "주말 숙제 마치기"목표를 완료하셨습니다.'},
      { text: '[2020/01/04 12:56] 목도리님께서 "과제 제출"목표를 완료하셨습니다.'},
      { text: '[2020/01/03 8:03] 목도리님께서 "8시 기상"목표를 완료하셨습니다.'},
      { text: '[2020/01/02 20:11] 내가간다님께서 "준비물 구입"목표를 완료하셨습니다.'},
      { text: '[2020/01/02 00:00] 목도리님께서 "1분기 제작"목표를 지키지 못하셨습니다.'},
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
