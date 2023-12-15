
let Vue

class myRouter {

  constructor(options) {
    this.$options = options;
    window.addEventListener('hashchange', this.onHashchange.bind(this))
    let initial = window.location.hash.slice(1) || '/'
    this.current = initial
    Vue.util.defineReactive(this, 'matched', [])
    this.match()

  }
  onHashchange() {
    this.current = window.location.hash.slice(1);
    this.matched = [];
    this.match()
  }
  match(routes) {
    routes = routes || this.$options.routes
    //递归遍历路由表
    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
        return
      }
      // /about/info
      if (route.path !== '/' && this.current.indexOf(route.path) !== -1) {
        this.matched.push(route)
        //往下递归
        if (route.children && route.children.length > 0) {

          this.match(route.children)
        }
        return
      }
    }
  }
}

myRouter.install = function (_Vue) {
  Vue = _Vue;

  Vue.mixin({
    //这一步关键
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  })
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h("a", {
        attrs: {
          href: "#" + this.to,
        },
      }, [this.$slots.default]);
    }
  })

  Vue.component('router-view', {

    render(h) {
      //标记当前 router-view 的深度
      this.$vnode.data.routerView = true;
      let depth = 0;
      let parent = this.$parent;
      while (parent) {
        const vnodeData = parent.$vnode && parent.$vnode.data;
        if (vnodeData) {
          if (vnodeData.routerView) {
            //说明祖代也是一个 router-view
            depth++;
          }
        }
        parent = parent.$parent;
      }
      let component = null;
      const route = this.$router.matched[depth]
      if (route) {
        component = route.component
      }
      return h(component);
    }
  })

}


export default myRouter

