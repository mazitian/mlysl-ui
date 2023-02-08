import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'
import MlPager from './components/pager'

export default defineComponent({
  name: 'MlPagination',
  props: paginationProps,
  emits: ['update:modelValue'],
  setup(props: PaginationProps, { emit }) {
    const pager = ref()
    const disablePrev = computed(() =>
      pager.value ? pager.value.pageIndex < 2 : true
    )
    const disableNext = computed(() =>
      pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
    )
    onMounted(() => {
      watch(
        () => pager.value.pageIndex,
        (newVal: number) => {
          emit('update:modelValue', newVal)
        }
      )
      watch(
        () => props.modelValue,
        (newVal: number) => {
          pager.value.pageIndex = newVal
        }
      )
    })
    return () => {
      return (
        <div class="ml-pagination">
          <button
            disabled={disablePrev.value}
            onClick={() => pager.value.prevPage()}
          >
            上一页
          </button>
          {/* pager部分 */}
          <MlPager {...props} ref={pager}></MlPager>
          <button
            disabled={disableNext.value}
            onClick={() => pager.value.nextPage()}
          >
            下一页
          </button>
        </div>
      )
    }
  }
})
