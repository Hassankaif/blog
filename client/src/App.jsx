import Users from './components/Users'


const App = () => {
    
  return<>
  <div><h1 className=' flex justify-center items-center font-bold text-4xl  h-40 w-full p-6 m-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
    Blogging App for Beginners </h1></div>
    <Users/>

  </>
}

export default App



// form css 

//   <div class="h-10 w-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700">
//   <form class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//     <h2 class="text-2xl font-bold mb-6 text-center text-indigo-700">Login</h2>
//     <input class="w-full p-2 mb-4 border border-gray-300 rounded" type="email" placeholder="Email" />
//     <input class="w-full p-2 mb-4 border border-gray-300 rounded" type="password" placeholder="Password" />
//     <button class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200">Login</button>
//   </form>
// </div>


  // <div class="flex justify-around items-center h-48 bg-gray-100">
  // <div class="bg-red-300 p-4 rounded text-2xl font-bold">Box 1</div>
  // <div class="bg-green-300 p-4 rounded">Box 2</div>
  // <div class="bg-blue-300 p-4 rounded">Box 3</div>