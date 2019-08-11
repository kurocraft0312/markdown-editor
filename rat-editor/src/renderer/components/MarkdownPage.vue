<template>
    <div>
        <router-link to="/">画面成功!</router-link>
    </div>
</template>

<script>
export default {
    name: 'next-page',
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link)
        }
    }   
}
</script>