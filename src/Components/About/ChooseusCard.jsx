import React from 'react';
import './ChooseusCard.css'; // Import your CSS file

const ChooseusCard = () => {
  return (
    <div className="void" id="void">
      <div className="Choose text-center font-extrabold font">Why Choose Us</div>
      <div className="crop">
        <ul id="card-list" style={{ '--count': 6 }}>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name">Unparalleled Expertise</span><span className='span-main'>Benefit from our years of industry experience, where a team of seasoned professionals understands the unique requirements of engineering education and industrial training. This expertise allows us to curate a catalog of equipment that aligns seamlessly with the evolving demands of modern curricula and industry standards.</span></a></div></li>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name">Extensive Product Portfolio</span><span className='span-main'>Explore our extensive range of laboratory equipment designed to cater to diverse disciplines within engineering. From state-of-the-art electronics and electrical engineering tools to precision instruments for mechanical labs, we have it all. Our commitment to providing comprehensive solu0ons makes us a one-stop destination for all your laboratory needs.</span></a></div></li>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name">Quality Assurance</span><span className='span-main'>Quality for Knowledge" is not just a tagline for us; it's our commitment to excellence. All our products undergo stringent quality checks to ensure they meet the highest standards. Rest assured, when you choose Associated Scientific Corporation, you are inves0ng in reliability and durability, building a strong founda0on of knowledge.</span></a></div></li>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name">Customized Solutions</span><span className='span-main'>Recognizing that every institution has unique requirements, we offer tailored solutions to meet specific needs. Whether you are setting up a new lab or upgrading existing facilities, our team is dedicated to working closely with you to provide customized packages that align perfectly with your goals.</span></a></div></li>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name">Technological Innovation</span><span className='span-main'>In a rapidly evolving technological landscape, we stay at the forefront of innovation. Our commitment to incorporating the latest advancements ensures that your institution remains equipped with state-of-the-art tools, preparing students for the challenges of the future.</span></a></div></li>
          <li className='card-li'><div className="card"><a href="#whychoose" className='card-link'><span className="model-name"> Customer-Centric Approach</span><span className='span-main'>Associated Scientific Corporation is committed to customer satisfaction. Our support team is dedicated to assisting you from equipment selection to after-sales service. We prioritize long-term partnerships and strive to exceed expectations at every turn. Join us in elevating engineering education and industrial training with our quality lab equipment. Partner with us to shape the innovators of tomorrow!</span></a></div></li>
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask flex justify-center items-center h-full">
        <div className="text-center font-extrabold font">Why Choose Us</div>
      </div>
      <div className="center-circle flex items-center justify-center ASC-center">ASC</div>
    </div>
  );
};

export default ChooseusCard;
