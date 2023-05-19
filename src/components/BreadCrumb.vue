<template>
<ol class="breadcrumb">
  <li class="breadcrumb-item" v-for="(route, index) in $route.matched" :key="index">
    <router-link :to="route.path">{{ route.meta.breadcrumb }}</router-link>
    <span v-if="index === $route.matched.length - 1">{{ route.meta.title }}</span>
  </li>
</ol>
</template>


<script>
export default{
    name:'BreadCrumbs'
}
</script>

<style scoped>
.breadcrumb {
  background-color: #f8f9fa;
  padding: .75rem 1rem;
  border-radius: .25rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #6c757d;
}
</style>