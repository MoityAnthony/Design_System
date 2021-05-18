<template>
    <div class="">
        <div>
            <h1>{{ msg }}</h1>
        </div>
        <div>
            <label>username</label>
            <input type="text" placeholder="Your username">
        </div>
        <div>
            <label>Password</label>
            <input type="text" placeholder="Your password">
        </div>
        <div>
            <p>Create an account</p>
            <CallToAction />
        </div>
        <div>
            <CallToAction />
        </div>
    </div>
</template>

<script>
    import CallToAction from '../CallToAction'

    export default {
        name: 'Connexion',
        props: {
            msg: String
        },
        components: {
            CallToAction
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>