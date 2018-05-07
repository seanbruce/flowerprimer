<template>
    <div class="advertisement"></div>
</template>

<script>
export default {
    created() {
        console.log('advertisement created')
    }
}
</script>


<style lang="scss" scoped>
    .advertisement {
        width: 100%;
        height: 25.4rem;
        background: url('../../assets/images/advertisement2.jpeg') 0 -300px;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>


