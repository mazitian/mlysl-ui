import { ref } from 'vue'

export default function usePage(defaultPageIndex = 1) {
  const pageIndex = ref(defaultPageIndex)

  const setPageIndex = (curr: number) => {
    pageIndex.value = curr
  }

  const jumpPage = (page: number) => {
    pageIndex.value += page
  }

  const prevPage = () => jumpPage(-1)
  const nextPage = () => jumpPage(1)
  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage }
}
