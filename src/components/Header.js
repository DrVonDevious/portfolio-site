import React, { useEffect } from 'react'
import * as three from 'three'
import '../css/Header.css'

const Header = () => {

  useEffect(() => {
    var scene = new three.Scene();
    var camera = new three.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight/2), 0.1, 1000 );
    var renderer = new three.WebGLRenderer();
    renderer.domElement.className = "header-animation"
    renderer.setSize( window.innerWidth, window.innerHeight/2 );
    document.body.prepend( renderer.domElement );
    var geometry = new three.BoxGeometry( 1, 1, 1 );
    var material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new three.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }, [])

  return (
    <div>
    </div>
  )
}

export default Header
