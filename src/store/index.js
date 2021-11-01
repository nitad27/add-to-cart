import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { order: [], total: 0 },
  mutations: {
    setDelOrder(state, i) {
      state.order.splice(i, 1);
    },
    setUpdateOrder(state, data) {
      const objIndex = this.getters.getOrder.findIndex(
        (obj) => obj.data.id === data.data.id
      );
      this.getters.getOrder[objIndex] = data;
    },
    setOrder(state, data) {
      if (this.getters.getOrder.length !== 0) {
        let itemInCart = this.getters.getOrder.filter(
          (item) => item.data.id === data.data.id
        );
        let isItemInCart = itemInCart.length > 0;

        if (isItemInCart === false) {
          state.order.push(data);
        }
      } else {
        state.order.push(data);
      }
    },
    setTotal(state, total) {
      state.total = total;
    },
  },
  actions: {
    addToCart(context, data) {
      context.commit("setOrder", data);
    },
    updateToCart(context, data) {
      context.commit("setUpdateOrder", data);
    },
    delOrder(context, i) {
      context.commit("setDelOrder", i);
    },
    addTotal(context, total) {
      context.commit("setTotal", total);
    },
  },
  getters: {
    getOrder(state) {
      return state.order;
    },
    getTotal(state) {
      return state.total;
    },
  },
  modules: {},
});
