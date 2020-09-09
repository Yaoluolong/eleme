const getters = {
  // sidebar: state => state.app.sidebar,
  // size: state => state.app.size,
  // device: state => state.app.device,
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  list: state => state.cart.list,
  count: state => state.cart.count,
  price: state => state.cart.price,
  token: state => state.user.token,
  address: state => state.user.address,
  name: state => state.user.name,
  id: state => state.user.id,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
  // errorLogs: state => state.errorLog.logs
}
export default getters
