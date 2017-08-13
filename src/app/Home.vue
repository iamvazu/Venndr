<template>
  <!--Mask-->
  <div class="view hm-black-strong">
    <div class="full-bg-img flex-center">
      <div class="animated fadeInUp">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 left-info">
              <h1 class="h1-responsive">Jump start your career</h1>
              <hr style="background-color: #fff">
              <p class="left-info-p">
                Venndr crawls the internet, so you don't have to. Venndr aggregates job postings from a diverse lineup of popular job finding sites and curates your personal inventory of job-postings using keywords extracted from your Resume.
                </p>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-block" style="color: #000">
                  <div class="text-center">
                    <h3>
                      <i class="fa fa-search"></i> Get Started:</h3>
                    <hr class="mt-2 mb-2">
                  </div>
  
                  <div class="md-form">
                    <!-- <i class="fa fa-map-marker prefix"></i> -->
                    <input placeholder="City, state, or zip code" type="text" id="loc" ng-model="home.info.location" class="venndr-text-input form-control">
                    <label class="form-field-label active" for="loc">Your location</label>
                  </div>
  
                  <div class="md-form">
                    <!-- <i class="fa fa-briefcase prefix"></i> -->
                    <input placeholder="Job title, company, keyword" type="text" id="prof" ng-model="home.info.field" class="form-control">
                    <label class="form-field-label active" for="prof">Your profession</label>
                  </div>
  
                  <div class="text-center">
                    <!-- <button class="btn btn-deep-purple">Resume Upload</button> -->
                    <input ngf-select ng-model="home.info.filename" type="file" id="file-1" ng-change="home.submit()" class="inputfile inputfile-1">
                    <label for="file-1" class="card">
                      <i class="fa fa-upload" aria-hidden="true"></i>
                      <span>Your resume</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/.Mask-->
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hello: 'Hello World!'
    };
  }
};
</script>
