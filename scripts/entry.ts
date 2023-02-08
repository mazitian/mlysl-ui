// /scripts/entry.ts
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import MenuPlugin, { Menu } from '../src/menu'
import FormPlugin, { Form } from '../src/form'
import InputPlugin, { Input } from '../src/input'
import IconPlugin, { Icon } from '../src/icon'
import ArrowDownIconPlugin, { ArrowDownIcon } from '../src/icon/arrow-down'
import ShangPuIconPlugin, { ShangPuIcon } from '../src/icon/shang-pu'
import CloseIconPlugin, { CloseIcon } from '../src/icon/close'
import DropdownPlugin, { Dropdown } from '../src/dropdown'
import PopoverPlugin, { Popover } from '../src/popover'
import UploadPlugin, { Upload } from '../src/upload'
import BreadcrumbPlugin, { Breadcrumb } from '../src/breadcrumb'
import ModalPlugin, { Modal } from '../src/modal'
import VirtualListPlugin, { VirtualList } from '../src/virtual-list'
import TabPlugin, { Tabs, Tab } from '../src/tab'
import PaginationPlugin, { Pagination } from '../src/pagination'
import LinkPlugin, { Link } from '../src/link'
import CardPlugin, { Card } from '../src/card'

const installs = [
  ButtonPlugin,
  MenuPlugin,
  FormPlugin,
  InputPlugin,
  IconPlugin,
  ArrowDownIconPlugin,
  ShangPuIconPlugin,
  DropdownPlugin,
  PopoverPlugin,
  UploadPlugin,
  BreadcrumbPlugin,
  ModalPlugin,
  VirtualListPlugin,
  TabPlugin,
  PaginationPlugin,
  CloseIconPlugin,
  LinkPlugin,
  CardPlugin
]

export {
  Button,
  Menu,
  Form,
  Input,
  Icon,
  ArrowDownIcon,
  ShangPuIcon,
  Dropdown,
  Popover,
  Upload,
  Breadcrumb,
  Modal,
  VirtualList,
  Tabs,
  Tab,
  Pagination,
  CloseIcon,
  Link,
  Card
}

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
