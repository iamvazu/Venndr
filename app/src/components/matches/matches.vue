<template>
    <v-container class="job-view" fluid>
        <v-layout row wrap>
                        <v-flex lg4 order-lg2 order-md2 order-sm1 order-xs1>
                
                    <form-advanced style="margin-top: 16px;"></form-advanced>

            </v-flex>
            <v-flex lg8 order-lg1 order-md1 order-sm2 order-xs2>
                <card
                    v-for="(job, index) in jobs"  
                    v-bind:job="job"           
                    v-bind:index="index"
                    v-bind:key="index"
                ></card>
            </v-flex>

        </v-layout>

    </v-container>
</template>
<script>
export default {

}
</script>

<style>

</style>

<script>
import { mapState } from 'vuex';
import card from './card';
import formBasic from '../globals/form-basic'
import formAdvanced from '../globals/form-adv'

export default {
  name: 'matches',
  components: {
    card,
    formBasic,
    formAdvanced
  },
  computed: mapState({
      jobs: state => state.user.jobs,
      queue: state => state.user.queue,
      resume: state => state.user.resume
  }),
  methods: {
      submit() {
          console.log(this.$store.state.user);
          console.log(this);
      }
  }
};
</script>

<style scoped>
.job-view {
  overflow-y: auto;
  background-color: #233237;
}
.side-form {
    width: auto;
    position: fixed;
}
</style>
