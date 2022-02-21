import * as THREE from "three"

const scene = new THREE.Scene()
scene.background = new THREE.Color('hsl(0,40%,100%)')

const hemeLight = new THREE.HemisphereLight(new THREE.Color('hsl(0,0%,100%)'), new THREE.Color('hsl(0,40%,100%)'), 0.5)
scene.add(hemeLight)

const keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(0,0%,100%)'), 0.5)
keyLight.position.set(200, 100, 200)
scene.add(keyLight)

const color = 0xFFFFFF
const intensity = 0.3
const light = new THREE.DirectionalLight(color, intensity)
light.castShadow = true
light.position.set(-200, -100, -200)
scene.add(light)


export default scene