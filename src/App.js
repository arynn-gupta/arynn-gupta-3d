import { Canvas } from '@react-three/fiber';
import {
  Html,
  Text,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from '@react-three/drei';

function App() {
  const computer = useGLTF('./model.gltf');
  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [-3, 2, 6] }}>
      <Environment preset='city' />
      <color args={['#262626']} attach='background' />
      <PresentationControls
        global
        cursor
        rotation={[0.13, 0.1, 0]}
        polar={[-0.0001, 0.0001]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ffffff'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass='htmlScreen'
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe title='portoflio' src='https://arynn-gupta.vercel.app/' />
            </Html>
          </primitive>
        </Float>
        <Text
          font='./Bangers-Regular.ttf'
          fontSize={1}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign='center'
        >
          Aryan Gupta
        </Text>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </Canvas>
  );
}

export default App;
