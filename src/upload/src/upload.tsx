import { defineComponent, onMounted, ref, toRefs } from 'vue'
import './upload.scss'
import { uploadrProps, UploadrProps } from './upload-type'

export default defineComponent({
  name: 'MlUpload',
  props: uploadrProps,
  emits: ['getFilesList'],
  setup(props: UploadrProps, { slots, emit }) {
    const { accept, drag, multiple } = toRefs(props)
    const kIpt = ref()
    const fileArea = ref()
    const filesList = ref<File[]>([])
    // const timer = ref<null | number>(null)
    const fileUpload = () => {
      kIpt.value.click()
    }
    const getFiles = (e: Event) => {
      const files = (e.target as HTMLInputElement).files
      if (!files) return

      filesList.value.push(...Array.from(files))
      emit('getFilesList', filesList.value)
    }

    const delFile = (index: number): void => {
      filesList.value.splice(index, 1)
      emit('getFilesList', filesList.value)
    }

    const getFilesList = (file: File[]) => {
      filesList.value = file
      emit('getFilesList', file)
    }
    onMounted(() => {
      if (!drag.value) return
      fileArea.value.addEventListener(
        'drop',
        (e: any) => {
          e.preventDefault()
          filesList.value.push(...Array.from(e.dataTransfer.files as FileList))
          emit('getFilesList', filesList.value)
        },
        false
      )
      fileArea.value.addEventListener(
        'dragover',
        (e: Event) => {
          e.preventDefault()
        },
        false
      )
    })
    return () => (
      <div class="ml-upload">
        <input
          type="file"
          multiple={multiple.value}
          accept={accept.value}
          ref={kIpt}
          onChange={getFiles}
          v-show={false}
        />
        {drag.value ? (
          <div>
            <div class="ml-upload-dragger" ref={fileArea} onClick={fileUpload}>
              <div class="ml-upload-content">
                <div class="ml-upload-dragger-text">
                  将文件拖到此处或<em>点击上传</em>
                </div>
              </div>
            </div>
            <div class="ml-upload-list">
              {filesList.value.map((item, index) => (
                <div
                  class="flex justify-between ml-upload-list_item"
                  key={index}
                >
                  <div class="ml-upload-list_item-name">{item.name}</div>
                  <div
                    class="ml-upload-list_item-status-label"
                    onClick={() => delFile(index)}
                  >
                    &#215;
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <span onClick={fileUpload}>{slots.default?.()}</span>
        )}
      </div>
    )
  }
})
