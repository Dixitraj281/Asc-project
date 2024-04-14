import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-600 text-center text-lg-start text-muted text-white">
      <section className="flex justify-center justify-between p-4 border-b border-gray-300">
        <div className="me-5 hidden lg:block">
          <span>Get connected with us:</span>
        </div>

      </section>

      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 ">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <h6 className="text-lg font-bold ">Associated Scientific Corporation</h6>
                
              </div>
              <p className="hover:text-blue-300 text-5xl text-white font-extrabold">
                Since 1963
              </p>
            </div>

            <div className="col-span-1">
              <h6 className="text-lg font-bold mb-4">Contact</h6>
              <ul className="list-none">
                <li className="mb-2 text-center">
                 First Floor, 21 North Avenue Road, West punjabi Bagh, New Delhi-110026
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6 className="text-lg font-bold mb-4">Email</h6>
              <ul className="list-none ">
                <li className="mb-2">
                  saleassociates@gmail.com
                </li>
                <li className="mb-2">
                  granthkohli@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6 className="text-lg font-bold mb-4">Contact</h6>
              <ul className="list-none">
                <li className="mb-2">                  
                  +91 96545 90021
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-500 py-4">
        <div className="container mx-auto text-center">
          Copyright © {new Date().getFullYear()}
          <a href="#ASC" className="text-secondary font-bold"> Associated Scientific Corporation</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
