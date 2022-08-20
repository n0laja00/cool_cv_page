import './App.css';

function App() {
  return (
    <>
      <div className='mx-auto max-w-screen-md '>
          <div className="flex flex-row  ">
              <div className="text-center md:w-5/12">
                <img
                  src={process.env.PUBLIC_URL+"img/IMG_1966.png"}
                  className="rounded-full mb-4"
                  alt="Avatar"
                />
              </div>
            <div className=' md:w-7/12 ml-6 '>
              <p className=' text-4xl font-semibold mt-4 text-blue-500'>
                Janne Tapani Lammela
              </p>
              <div className='flex row'>
                <p className=' text-sm md:w-3/6'>
                  Github:
                  </p>
                <p className='font-thin leading-tight text-md text-blue-500 md:w-5/6 '>
                  <a className='no-underline cursor:pointer' target='_blank' href='https://github.com/n0laja00'>
                    /n0laja00
                  </a>
                </p>
              </div>
              <div className='flex row'>
                <p className=' text-sm md:w-3/6'>
                  Email:
                  </p>
                <p className='font-thin leading-tight text-m md:w-5/6'>
                  <a className='no-underline cursor:pointer'>
                    lammelajanne1@gmail.com
                  </a>
                </p>
              </div>
              <div className="row">
                <h1 className='font-semibold mt-4 text-blue-500'>Description</h1>
              </div>
              <div className="row"> 
                <p className='font-light'>I'm a programmer who likes coffee a bit too much for it to be normal. I've got experience in front-end and back-end development and planning.</p>
              </div>
              <div className="row">
                <h1 className='font-semibold mt-4 text-blue-500'>Interests</h1>
              </div>
              <div className="row mb-2"> 
                <p className='font-light'>Full-stack development is in my interests. In terms of education, I'm thinking of getting a master's degree in Oulu University after I'm done with my
                candidate-level degree in Oulu University of Applied Sciences (OAMK).</p>
                <p className='font-light'>I studied at Master's level in St. Pölten Fachhochschule. There, I studied organisational innovation, cybersecurity and resilience, among many other things.</p>
              </div>
            </div>
          </div>

        <div className="flex-row border-t-8 border-t-orange-600 pt-2 mb-3">
              <div className='row'>
                <h1 className=' font-semibold text-4xl mt-4 text-blue-500 '>Coding projects</h1>
              </div>

              <div className='column'> 
                <div className='card rounded-none shadow-xl shadow-gray-500 mt-5 border-t-2 bg-gradient-to-b from-orange-50 to-white'>
                    <div className=''>
                      <p className='font-medium leading-tight text-2xl mb-2 text-blue-600 transition ease-in-out hover:-translate-y-1 hover:text-blue-400 duration-500 delay-50 md:w-fit'>
                        <a target='_blank' href='https://github.com/n0laja00/react_vite_shopping_cart' className='capitalize'>
                          Shopping cart using React Vite and typescript
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className=' font-light'>
                        This React shopping cart project is made with React Vite using Typescript and React Bootstrap.
                      </p>
                    </div>
                    <div>
                      <div className='row'>
                      <p className='font-bold leading-tight text-lg mt-6 mb-2 text-blue-500'>
                          Links and tags
                        </p>
                      </div>
                      <div>
                        
                      </div>
                      <div className='flex row'>
                        <p className=' text-sm mb-2 md:w-1/6'>
                          Github:
                          </p>
                        <p className='font-thin leading-tight text-md mb-2 text-blue-500 md:w-5/6 '>
                          <a className='no-underline cursor:pointer' target='_blank' href='https://github.com/n0laja00/react_vite_shopping_cart'>
                            /n0laja00/react_vite_shopping_cart
                          </a>
                        </p>
                      </div>
                      <div className='flex row'>
                        <div className='md:w-1/6 text-sm'>
                          <p>Tags:</p>
                        </div>
                        <div className='md:w-5/6 font-light leading-tight'>
                          React, Bootstrap, Typescript, React Vite
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              
              <div className='column'> 
                <div className='card rounded-none shadow-xl shadow-gray-500 mt-5 border-t-2 bg-gradient-to-b from-orange-50 to-white'>
                    <div className=''>
                      <p className='font-medium leading-tight text-2xl mb-2 text-blue-600 transition ease-in-out hover:-translate-y-1 hover:text-blue-400 duration-500 delay-50 md:w-fit'>
                        <a target='_blank' href='https://github.com/n0laja00/react_password_generator' className='capitalize'>
                          Password Generator
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className=' font-light'>
                        This React Application is made using This project generates passwords with scandinavian characters as an option! In this project, I've used Toastify, Tailwind, Uil icons, and React.
                      </p>
                    </div>
                    <div>
                      <div className='row'>
                      <p className='font-bold leading-tight text-lg mt-6 mb-2 text-blue-500'>
                          Links and tags
                        </p>
                      </div>
                      <div>
                        
                      </div>
                      <div className='flex row'>
                        <p className=' text-sm mb-2 md:w-1/6'>
                          Github:
                          </p>
                        <p className='font-thin leading-tight text-md mb-2 text-blue-500 md:w-5/6 '>
                          <a className='no-underline cursor:pointer' target='_blank' href='https://github.com/n0laja00/react_password_generator'>
                            /n0laja00/react_password_generator
                          </a>
                        </p>
                      </div>
                      <div className='flex row'>
                        <div className='md:w-1/6 text-sm'>
                          <p>Tags:</p>
                        </div>
                        <div className='md:w-5/6 font-light leading-tight'>
                          React, TailwindCSS, Uil Icons, Toastify
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              
              <div className='column'> 
                <div className='card rounded-none shadow-xl shadow-gray-500 mt-5 border-t-2 bg-gradient-to-b from-orange-50 to-white'>
                    <div className=''>
                      <p className='font-medium leading-tight text-2xl mb-2 text-blue-600 transition ease-in-out hover:-translate-y-1 hover:text-blue-400 duration-500 delay-50 md:w-fit '>
                        <a target='_blank' href='https://github.com/n0laja00/react_weather_location' className='capitalize'>
                          React Weather forecast application
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className=' font-light'>
                        Hello! In this project weather application I've used Toastify, Tailwind, Luxon, uuid, Uil icons, React, and Open Weather API.
                      </p>
                    </div>
                    <div>
                      <div className='row'>
                      <p className='font-bold leading-tight text-lg mt-6 mb-2 text-blue-500'>
                          Links and tags
                        </p>
                      </div>
                      <div>
                        
                      </div>
                      <div className='flex row'>
                        <p className=' text-sm mb-2 md:w-1/6'>
                          Github:
                          </p>
                        <p className='font-thin leading-tight text-md mb-2 text-blue-500 md:w-5/6 '>
                          <a className='no-underline cursor:pointer' target='_blank' href='https://github.com/n0laja00/react_weather_location'>
                            /n0laja00/react_weather_location
                          </a>
                        </p>
                      </div>
                      <div className='flex row'>
                        <div className='md:w-1/6 text-sm'>
                          <p>Tags:</p>
                        </div>
                        <div className='md:w-5/6 font-light leading-tight'>
                          React, TailwindCSS, Uil Icons, Toastify, uuid, Open Weather API
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              
              <div className='column'> 
                <div className='card rounded-none shadow-xl shadow-gray-500 mt-5 border-t-2 bg-gradient-to-b from-orange-50 to-white'>
                    <div className=''>
                      <p className='font-medium leading-tight text-2xl mb-2 text-blue-600 transition ease-in-out hover:-translate-y-1 hover:text-blue-400 duration-500 delay-50 md:w-fit'>
                        <a target='_blank' href='https://github.com/n0laja00/todolist' className='capitalize'>
                          A terrible-looking todo-list
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className=' font-light'>
                        In this horrible-looking todo-list project I've used React, uuid, bootstrap, and moment.
                      </p>
                    </div>
                    <div>
                      <div className='row'>
                      <p className='font-bold leading-tight text-lg mt-6 mb-2 text-blue-500'>
                          Links and tags
                        </p>
                      </div>
                      <div>
                        
                      </div>
                      <div className='flex row'>
                        <p className=' text-sm mb-2 md:w-1/6'>
                          Github:
                          </p>
                        <p className='font-thin leading-tight text-md mb-2 text-blue-500 md:w-5/6 '>
                          <a className='no-underline cursor:pointer' target='_blank' href='https://github.com/n0laja00/todolist'>
                            /n0laja00/todolist
                          </a>
                        </p>
                      </div>
                      <div className='flex row'>
                        <div className='md:w-1/6 text-sm'>
                          <p>Tags:</p>
                        </div>
                        <div className='md:w-5/6 font-light leading-tight'>
                          React, Bootstrap
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
      
      </div>
    </>
  );
}

export default App;
