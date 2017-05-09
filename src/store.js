import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
    	{title: "first post", postUrl: "word", content: "content from post 1"},
      {title: "second post", postUrl: "second-post",content: "content from post 2"},
      {title: "third post", postUrl: "third-post", content: "content from post 3"}
    ]
  }
})
