import '../style/main.css'
import model from './bag'

import {
	scene,
	camera,
	renderer,
	resize,
	machine,
	controls,
} from './components'

model.then(obj => {

	obj.traverse(child => {
		if (child.isMesh) {
			console.log(child.name)
		}
	})

	scene.add(obj)
})


resize.start(renderer)
machine.addCallback(() => {
	controls.update()
	renderer.render(scene, camera)
})
machine.start()