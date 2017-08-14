<template>
    <div class="card">
        <div class="card-body" style="color: #000">
            <div class="text-center form-head" style="color: #000">
                <h3>
                    <i class="fa fa-search"></i> Get Started:</h3>
                <hr class="mt-2 mb-2">
            </div>
            <div class="md-form">
                <!-- <i class="fa fa-map-marker prefix"></i> -->
                <input placeholder="City, state, or zip code" type="text" id="loc" v-model="location" class="venndr-text-input form-control">
                <label class="form-field-label active" for="loc">Your location</label>
            </div>
            <div class="md-form">
                <!-- <i class="fa fa-briefcase prefix"></i> -->
                <input placeholder="Job title, company, keyword" type="text" id="prof" v-model="query" class="form-control">
                <label class="form-field-label active" for="prof">Your profession</label>
            </div>
    
            <div class="text-center">
                <!-- <button class="btn btn-deep-purple">Resume Upload</button> -->
                <input ng-model="home.info.filename" type="file" id="file-1" class="inputfile inputfile-1">
                <label for="file-1" class="fileinput-label">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    <span>Your resume</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'form-basic',
  data () {
    return {
      location: '',
      query: ''
    }
  }
}
</script>

<style lang="less" scoped>
    .form-head {
        margin-bottom: 20px;
    }
</style>
