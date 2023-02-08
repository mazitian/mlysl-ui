import { ExtractPropTypes, PropType } from 'vue'

export const menuProps = {
  data: {
    type: Object as PropType<Array<IMenuNode>>,
    required: true
  }
} as const
export type MenuProps = ExtractPropTypes<typeof menuProps>

export interface IMenuNode {
  label: string
  id?: string
  children?: IMenuNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerMenuNode extends IMenuNode {
  parentId?: string // 父节点ID
  level: number // 节点层级
  isLeaf?: boolean // 是否叶子结点
  loading?: boolean // 节点是否显示加载中
  childNodeCount?: number // 该节点子节点的数量
}
