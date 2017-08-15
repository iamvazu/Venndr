<template>
    <!-- <div class="card">
                <div class="card-body" style="color: #000">
                    <div class="text-center form-head" style="color: #000">
                        <h3>
                            <i class="fa fa-search"></i> Get Started:</h3>
                        <hr class="mt-2 mb-2">
                    </div>
                    <div class="md-form">
                        <input placeholder="City, state, or zip code" type="text" id="loc" v-model="location" class="venndr-text-input form-control">
                        <label class="form-field-label active" for="loc">Your location</label>
                    </div>
                    <div class="md-form">
                        <input placeholder="Job title, company, keyword" type="text" id="prof" v-model="query" class="form-control">
                        <label class="form-field-label active" for="prof">Your profession</label>
                    </div>
            
                    <div class="text-center">
                        <input ng-model="home.info.filename" type="file" id="file-1" class="inputfile inputfile-1">
                        <label for="file-1" class="fileinput-label">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                            <span>Your resume</span>
                        </label>
                    </div>
                    <button type="button" class="btn btn-primary" @click="call()">Call</button>
                </div>
            </div> -->
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
                </v-card-text>
                <div>
                <input @change="uploadFile" type="file" id="file-1" class="inputfile inputfile-1">
                     <label style="margin-bottom: 18px;" for="file-1" class="fileinput-label">
                        <i class="fa fa-upload" aria-hidden="true"></i>
                        <!-- <span>Your resume</span> -->
                    </label> 
                    <v-text-field for="file-1" class="fileinput-label" label="Resume"></v-text-field>
                </div>
            </v-card>
</template>

<script>
export default {
    name: 'form-basic',
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
        },
        resumeFile: {
            get () {
                return this.$store.state.resumeFile
            },
            set (value) {
                this.$store.commit('updateResumeFile', value)
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
