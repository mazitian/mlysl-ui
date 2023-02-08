//build.js
const path = require('path')
const fsExtra = require('fs-extra')
// 新增
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryFile = path.resolve(__dirname, './entry.ts')
// 组件目录
const componentsDir = path.resolve(__dirname, '../src')
const outputDir = path.resolve(__dirname, '../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建时传入包名name
const createPackageJson = name => {
  // 根据传入name决定包名、主文件和主模块名称
  const fileStr = `{
    "name": "${name ? name : 'mlysl-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index.umd.js' : 'mlysl-ui.umd.js'}",
    "module": "${name ? 'index.js' : 'mlysl-ui.js'}",
    "author": "mzt",
    "github": "",
    "description": "vue3组件库",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/mazitian/mlysl-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/mazitian/mlysl-ui.git"
    },
  }`
  // 存在包名称，给单组件生成package.json文件
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'mlysl-ui',
          fileName: 'mlysl-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
  // 创建单组件包
  // 获取组件名称组成的数组
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
