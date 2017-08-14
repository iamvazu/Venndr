<template>
<div class="view hm-black-strong">
    <div class="full-bg-img flex-center">
        <div class="animated fadeInUp">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 left-info">
                        <h1 class="h1-responsive">Jump start your career</h1>
                        <hr style="background-color: #fff">
                        <p class="left-info-p">
                            Venndr crawls the internet, so you don't have to. Venndr aggregates job postings from a diverse lineup of popular
                            job finding sites and curates your personal inventory of job-postings using keywords extracted
                            from your Resume.
                            </p>
                    </div>
                    <div class="col-lg-6">
                        <formBasic></formBasic>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import formBasic from '@/components/globals/form-basic'
export default {
  name: 'home',
  components: {
    formBasic
  }
}
</script>

<style lang="less" scoped>

    .flex-center {
        color: #fff;
    }
    
    .view {
         height: 100vh;
          background: url('./assets/homebg.jpg')no-repeat center center fixed;  
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .left-info {
        text-align: left;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .left-info-p {
        font-weight: 100;
    }


</style>
