<script>
  import { Router, Route } from 'svelte-routing';
  import Dashboard from '../pages/Dashboard.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Dashboard} />
  </div>
</Router>