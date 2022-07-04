import BiometricAuth from "./src/biomereic/BiometricAuth";
import BottomSheetApp from "./src/bottomSheet/BottomSheetApp";
import CameraApp from "./src/cameraApp/CameraApp";
import FlashMessageMain from "./src/flashMessage/FlashMessageMain";

// каждый компонент - отдельное приложение. Комментрий и разкомментируй чтоб проверить

export default function App() {
  return (
    <>
      <CameraApp />
      {/* <BiometricAuth /> */}
      {/* <BottomSheetApp /> */}
      {/* <FlashMessageMain /> */}
    </>
  );
}
