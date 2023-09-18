import * as THREE from "three";
import Experience from "./Experience";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        // console.log(this.experience,this.sizes,this.scene,this.canvas);

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }

    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera,this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
    }
    

        createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            100
        );

        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.x = 29;
        this.perspectiveCamera.position.y = 6;
        this.perspectiveCamera.position.z = 5;
    }

        createOrthographicCamera(){
        // this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum /2,
            -this.sizes.frustrum /2,
            -50,
            50
        );

        this.orthographicCamera.position.y = 3.5;
        this.orthographicCamera.position.z = 5;
        this.orthographicCamera.rotation.x = -Math.PI / 6;

        // console.log(this.orthographicCamera);

        this.scene.add(this.orthographicCamera);
        // this.helper = new THREE.CameraHelper(this.orthographicCamera);
        // this.scene.add(this.helper);

        const size = 20;
        const divisions = 20;
        //网格助手
        // const gridHelper = new THREE.GridHelper(size,divisions);
        // this.scene.add(gridHelper);

        //直角坐标系
        // const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper);
    }

    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating Orthographic Camera on Resize
        this.orthographicCamera.left =
            (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right =
            (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

        update(){
            // console.log(this.perspectiveCamera.position);
        this.controls.update();

        //网格助手
        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // // console.log(this.orthographicCamera.position);
        // this.helper.position.copy(this.orthographicCamera.position);
        // this.helper.rotation.copy(this.orthographicCamera.rotation);
    }
}







// export default class Camera{
//     constructor(){
//         this.experience = new Experience();
//         this.sizes = this.experience.sizes;
//         this.scene = this.experience.scene;
//         this.canvas = this.experience.canvas;

//         this.createPerspectiveCamera();
//         this.createOrthographicCamera();
//     }

//     createPerspectiveCamera(){
//         this.perspectiveCamera = new THREE.PerspectiveCamera(
//             35,
//             this.sizes.aspect,
//             0.1,
//             1000
//         );
//         this.scene.add(this.perspectiveCamera)
//         this.perspectiveCamera.position.z = 5;
//     }

    
//     createOrthographicCamera(){
//         this.frustrum = 5;
//         this.orthographicCamera = new THREE.OrthographicCamera(
//             (-this.sizes.aspect * this.sizes.frustrum) / 2,
//             (this.sizes.aspect * this.sizes.frustrum) / 2,
//             this.sizes.frustrum /2,
//             -this.sizes.frustrum /2,
//             -100,
//             100
//         );
//         this.scene.add(this.orthographicCamera)
//     }

//     resize(){
//         this.perspectiveCamera.aspect = this.sizes.aspect;
//         this.perspectiveCamera.updateProjectionMatrix();

//         this.orthographicCamera.left=
//         (-this.sizes.aspect * this.sizes.frustrum) / 2;
//         this.orthographicCamera.right=
//         (this.sizes.aspect * this.sizes.frustrum) / 2;
//         this.orthographicCamera.top=this.sizes.frustrum /2;
//         this.orthographicCamera.bottom=-this.sizes.frustrum /2;
//         this.orthographicCamera.updateProjectionMatrix();

//     }

//     update(){
        
//     }
// }