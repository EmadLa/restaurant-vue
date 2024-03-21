export default function ({ store, route, redirect }) {
  // Check if the user is authenticated
  const isAuthenticated = !!store.state.auth.token;

  // If not authenticated and trying to access a protected route
  if (!isAuthenticated && route.path !== '/login') {
    return redirect('/login');
  }
}
