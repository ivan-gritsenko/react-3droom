import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return <OrbitControls target={[0, 0, 0]} args={[camera, gl.domElement]} />;
};

export default CameraController;
