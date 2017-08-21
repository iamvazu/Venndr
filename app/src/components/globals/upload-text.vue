<template>
    <div>
        <v-text-field label="Resume" :error-messages="showErrM" :placeholder="name || 'Upload PDF'" @click="fire"></v-text-field>
        <input type="file" ref="fileBtn" @change="storeF" class="inputfile">
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
      // points event to file btn
      fire () {
          this.$refs.fileBtn.click()
      },
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

<style lang="less" scoped>
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
</style>
