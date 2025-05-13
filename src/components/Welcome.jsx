import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur 
        </p>

        <button
          onClick={() => navigate('/register')}
          className="w-full bg-purple-700 text-white font-semibold py-2 rounded mb-4"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-300 text-black-700 font-semibold py-2 rounded"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;