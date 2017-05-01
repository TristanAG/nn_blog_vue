<template>
  <div class="sidebar">
    <router-link to='/dev'>Home</router-link>
    <br>
    categories:
    <router-link to='/dev/kultur'>Kultur</router-link>
    <router-link to='/dev/big-picture'>Big Picture</router-link>
    <router-link to='/dev/all-about-science'>All About Science</router-link>
    <br>
    posts:
    <router-link to='/dev/big-picture/refuse-reduce-reuse-10-things-to-clean-up-our-oceans'>Big Picture post 1</router-link>
    <router-link to='/dev/all-about-science/why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet'>All about science post 1</router-link>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      posts: []
    }
  }
}
</script>
