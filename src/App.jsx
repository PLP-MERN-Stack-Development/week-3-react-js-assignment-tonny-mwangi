import { useState } from 'react';
import './App.css';

// Import your components here
// import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData'; // Assuming you have an ApiData component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <TaskManager />
           
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <ApiData />
        </div>
      </main>

      {/* Footer component will go here */}
      <div>
        <Footer />
      </div>  
    </div>
  );
}

export default App; 