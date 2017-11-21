<template>
  <v-container>
    <v-card raised>
      <v-card-title primary-title>
        <div class="heading">
          <h3 class="headline mb-0">{{job.company}}</h3>
          <div>{{job.title}} - <span class="grey--text">{{job.location}}</span></div>
          <div>{{job.matches}} matching keywords</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>Learn more</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show" v-html="HTMLcontent" />
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'card',
  props: ['job'],
  data: () => ({
    show: false,
    HTMLcontent: null
  }),
  created() {
    this.HTMLcontent = this.job.description
  }
}
</script>

<style lang="less" scoped>
  .heading {
    text-align: left;
  }
  v-card-text {
    text-align: left;
  }
</style>
