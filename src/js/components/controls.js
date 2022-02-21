import { TOUCH } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { camera, canvas } from './index'

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = true
controls.dampingFactor = 0.05
controls.maxDistance = 200
controls.minDistance = 45
controls.touches = {
	ONE: TOUCH.ROTATE,
	TWO: TOUCH.DOLLY_PAN,
}

export default controls