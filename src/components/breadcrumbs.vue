<template lang="html">
    <div class="bread_crumbs">
        <h5>{{breadcrumbText}}</h5>
    </div>
</template>

<script>
    export default {
        props: {
            breadcrumbText: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="css">
</style>
