import { defineComponent, DefineComponent, toRefs, ref, computed } from 'vue'
import { IInnerMenuNode, MenuProps, menuProps } from './menu-type'
import { generateInnerMenu } from './utils'

export default defineComponent({
  name: 'MlMenu',
  props: menuProps,
  setup(props: MenuProps, { slots }) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerMenu(data.value)) // 用ref包着 不改变之前的结构
    const toggleNode = (node: IInnerMenuNode) => {
      // 在原始的列表中获取该节点
      const cur = innerData.value.find(item => item.id === node.id)
      if (cur) {
        cur.expanded = !cur.expanded
      }
    }
    // 获取那些展开的节点列表
    const expandedMenu = computed(() => {
      // 定义排除列表，也就是子节点
      let excludeNodes: IInnerMenuNode[] = []
      const result = []
      // 循环列表，找出那些！expanded
      for (const item of innerData.value) {
        // 如果遍历节点，在排除列表中，直接跳出本次循环
        if (excludeNodes.includes(item)) {
          continue
        }
        // 当前节点处于折叠状态，他的子节点应该被排除
        if (item.expanded !== true) {
          excludeNodes = getChildren(item)
        }
        result.push(item)
      }
      return result
    })
    const getChildren = (node: IInnerMenuNode) => {
      let result = []
      // 找到node在列表中的索引
      const startIndex = innerData.value.findIndex(item => item.id === node.id)
      // 找到他后面所有的子节点（level比当前节点大）
      for (
        let i = startIndex + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i])
      }
      return result
    }
    return () => {
      return (
        <div class="ml-menu">
          {expandedMenu.value.map(menuNode => (
            <div
              class="ml-menu__node hover:bg-slate-100 hover:text-black leading-8"
              // 子节点缩进
              style={{
                paddingLeft: `${15 * (menuNode.level - 1)}px`
              }}
            >
              {/* 图标 */}
              {/* 判断当前节点是否叶子节点 */}
              {menuNode.isLeaf ? (
                <span style={{ display: 'inline-block', width: '25px' }}></span>
              ) : slots.icon ? (
                slots.icon({ nodeData: menuNode, toggleNode })
              ) : (
                <svg
                  onClick={() => toggleNode(menuNode)}
                  style={{
                    width: '25px',
                    height: '16px',
                    display: 'inline-block',
                    transform: menuNode.expanded ? 'rotate(90deg)' : ''
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {/* 标签 */}
              {slots.content ? slots.content(menuNode) : menuNode.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
