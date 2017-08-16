<template>
            <v-card>
                    <v-container>
                    <span class="display-1"><i class="fa fa-search" aria-hidden="true"></i> Get Started</span>
                    </v-container>
                <v-container>
                <hr style="background-color: #fff">
                </v-container>
                <v-card-text style="padding-bottom: 0px;">
                        <v-flex xs12>
                            <v-text-field v-model="location" placeholder="City, state, or zip code" label="Location"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-model="query" placeholder="Job title, company, keyword" label="Query"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <uploadText></uploadText>                            
                        </v-flex>
                </v-card-text>
                <div>
                </div>
            </v-card>
</template>

<script>
import uploadText from '@/components/globals/upload-text'

export default {
    name: 'form-basic',
    components: {
        uploadText
    },
    computed: {
        location: {
            get () {
                return this.$store.state.message
            },
            set (value) {
                this.$store.commit('updateLocation', value)
            }
        },
        query: {
            get () {
                return this.$store.state.message
            },
            set (value) {
                this.$store.commit('updateQuery', value)
            }
        }
    },
    methods: {
        call () {
            this.$store.dispatch('match')
        },
        uploadFile (e) {
            this.$store.dispatch('upload', e)
        }
    }
}
</script>

<style lang="less" scoped>
.form-head {
    margin-bottom: 20px;
}
</style>
