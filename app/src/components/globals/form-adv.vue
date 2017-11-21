<template>
  <v-card>
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
    <div class="bottom">
        <v-btn large primary @click="submit">Submit</v-btn>
    </div>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import uploadText from '@/components/globals/upload-text'

export default {
  name: 'form-advanced',
  components: {
      uploadText
  },
  computed: {
        location: {
            get() {
                return this.$store.state.message
            },
            set(value) {
                this.$store.commit('updateLocation', value)
            }
        },
        query: {
            get() {
                return this.$store.state.message
            },
            set(value) {
                this.$store.commit('updateQuery', value)
            }
        }
    },
    methods: {
        submit () {
            this.$store.dispatch('submit');
        }
    }
};
</script>
<style lang="less" scoped>
    .bottom {
        padding-bottom: 10px !important;
    }
</style>
