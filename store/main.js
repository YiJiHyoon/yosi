export const state = () => ({
  title : null,
  content : null
});


export const mutations = {
  title(state, title) {
    state.title = title;
  },
  content(state, content) {
    state.content = content;
  }
};

export const getters = {
  content(state) {
    return state.content
  }
};
