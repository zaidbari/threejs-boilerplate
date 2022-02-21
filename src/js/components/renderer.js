import { PCFSoftShadowMap, WebGLRenderer } from "three"
import { canvas } from './variables'


const renderer = new WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0xffffff, 1)
renderer.shadowMap.type = PCFSoftShadowMap
renderer.shadowMap.enabled = true


export default renderer