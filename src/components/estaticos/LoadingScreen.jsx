import { PulseLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <PulseLoader color="#3f3cbb" />
    </div>
  );
};

export default LoadingScreen;