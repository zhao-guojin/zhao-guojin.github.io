import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
       this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        // console.log(this.actualRoom);

        this.lerp = {
            current:0,
            target:0,
            ease:0.1,
        }

        this.setModel();
        
        this.onMouseMove();
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // this.scene.add(cube);

        // camera.position.z = 5;

        
 
        

    }


    setModel(){
        this.actualRoom.children.forEach(child => {
            child.castShadow=true;
            child.receiveShadow = true;
            
            if(child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    groupchild.castShadow=true;
                    groupchild.receiveShadow = true;
                })
            }

            //电脑屏幕播放视频
            // if(child.name === "screen"){
            //     child.material = new THREE.LineBasicMaterial({
            //         map:this.resources.items.screen,
            //     });
            // }

        });
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11,0.11,0.11);
        
    }

    onMouseMove(){
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.5;
        });
    }

    resize() {

    }

    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;
    }
}