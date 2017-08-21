this components accepts two properties txt and fn
txt: the text displayed inside the btn
fn: string containing the name of a vuex 'action' to call

<template>
    <div>
        <v-btn large success @click="fire">{{txt}}</v-btn>
    </div>
</template>

<script>
export default {
    name: 'venndr-btn',
    props: [
        'txt',
        'fn'
    ],
    methods: {
        fire () {
            if (this.fn != null) {
                this.$store.dispatch('submit');
            } else {
                throw new Error(`venndr-btn requires an action passed via the fn property`);
            }
        }
    }
}
</script>
