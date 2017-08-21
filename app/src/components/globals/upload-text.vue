<template>
    <div>
        <input type="file" ref="fileBtn" @focus="fire" @change="storeF" class="inputfile">        
        <v-text-field ref="txt" label="Resume" :error-messages="showErrM" :placeholder="name || 'Upload PDF'" @click="fire"></v-text-field>
    </div>
</template>

<script>
export default {
  name: 'upload-text',
  data: function () {
      return {
          // toggles error on input file
          valid: true,
          name: null
      }
  },
  computed: {
    showErrM () {
        if (!this.valid) return 'File must be PDF'
    }
  },
  methods: {
      // fires click event to file btn
      fire () {
          this.$refs.txt.focus();
          this.$refs.fileBtn.click()
      },
      // stores file if valid
      storeF (e) {
        const file = e.target.files[0] || e.dataTransfer.files[0]
        this.name = file.name
        if (file.type === 'application/pdf') {
            this.$store.commit('updateResumeFile', file)
            this.valid = true
        } else {
            this.valid = false
        }
      }
  }
}
</script>

<style scoped>
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
</style>
