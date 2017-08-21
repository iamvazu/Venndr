<template>
    <!-- <div class="view hm-black-strong">
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
                    </div> -->
    <div class="view">
        <v-container>
            <v-layout row wrap class="contain">
                <v-flex md6>
                    <v-container>
                        <div class="left-info">
                            <div class="display-2 left-head">Jump start your career</div>
                            <hr style="background-color: #fff">
                            <p class="left-info-p">
                                Venndr crawls the internet, so you don't have to. Venndr aggregates job postings from a diverse lineup of popular job finding sites and curates your personal inventory of job-postings using keywords extracted from your Resume.
                            </p>
                        </div>
                    </v-container>
                </v-flex>
                <v-flex md6>
                    <v-container>
                        <formBasic></formBasic>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
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

<style scoped>

.left-head {
    color: #ffffff;
    font-weight: 100;
}

hr {
    margin: 15px 0;
    padding-left: 0;
}
.contain {
    margin-top: 15%;
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
    padding-top: 15%;
    padding-bottom: 5%;
}

.left-info-p {
    font-weight: 100;
    color: #fff;
}
</style>
