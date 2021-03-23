<template>
  <label
    :for="id"
    class="relative flex items-center justify-center h-full px-4 py-2 text-white cursor-pointer select-none rounded-2xl app-bg group-hover:group"
    style="width: 200px"
    :class="{'pointer-events-none': uploadPending}"
  >
    <input
      :id="id"
      :key="fileInputKey"
      :multiple="multiple"
      name="coverUrl"
      type="file"
      class="absolute z-0 invisible "
      @change="onChange"
    />
    <i class="fas fa-cloud-download"></i>

    <p class="text-sm font-semibold group-hover:text-purple-600">
      <i v-if="uploadPending" class="far fa-spinner-third animate-spin"></i>
      <span class="ml-2">Загрузить Файл</span>
    </p>
  </label>
</template>

<script>
export default {
  props: {
    imageSize: {
      type: String,
      default: '1920/1080'
    },

    multiple: {
      type: Boolean,
      default: false
    },

    value: {
      type: [String, Array],
      required: true
    },

    annotationVisible: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    uploadPending: false,
    id: Date.now(),
    fileInputKey: Date.now(),
  }),

  methods: {
    updateFileInputKey() {
      this.fileInputKey = Date.now()
    },

    async onChange(e) {
      if (this.uploadPending) {
        return false
      }

      const files = Array.from((e.target.files || []))

      if (files.length < 1) {
        return
      }

      const urls = await this.batchUpload(files)
      this.$emit('input', this.multiple ? [...this.value, ...urls] : urls[0])
    },

    async batchUpload(files = []) {
      try {
        this.uploadPending = true
        const output = []

        for (const file of files) {
          const url = await this.uploadFile(file)
          output.push(url)
        }

        return output
      } catch (error) {
        console.log(error)
      } finally {
        this.uploadPending = false
        this.updateFileInputKey()
      }
    },

    async uploadFile(file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const url = await this.$axios.$post('/uploads/files', formData, {
          headers: { 'content-type': 'multipart/form-data' }
        })

        return url
      } catch (error) {
        console.log(error)
        this.$emit('error', file.name)
      }
    }
  }
}
</script>
