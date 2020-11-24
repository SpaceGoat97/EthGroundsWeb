<script>
  import { Router, Route } from 'svelte-routing';
  import Dashboard from '../pages/Dashboard.svelte';
  import Profile from '../pages/Profile.svelte';


  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Dashboard} />
    <Route path="profile" component={Profile} />
  </div>
</Router>