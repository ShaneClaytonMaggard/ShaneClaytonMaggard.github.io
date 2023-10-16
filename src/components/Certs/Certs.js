import React from 'react';
import A from './A.jpg';
import JSDS from './JSDS.png';
import RWP from './RWD.png'
import LinkedIn from './LinkedIn-Blue-14@2x.png'
import GitHub from './Github.jpg'
import Gmail from './3545-gmail.png'
import './Certs.css';



export default function Certs() {
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entery) =>{
            if(entery.isIntersecting){
                entery.target.classList.add('show');
            }else{
                entery.target.classList.remove('show');
            }
        });
    });
    const hiddenElemetns = document.querySelectorAll('.hidden');
    hiddenElemetns.forEach((el) => observer.observe(el));

  return (
    <div>
      <section class="hidden">
        <h2 style={{'textAlign': 'center', 'textShadow': '0px 5px 5px gold'}}>Check Out My Certifications</h2>
      </section>
            <section class="hidden">
        <h2 className='Emoji'id="certs">👇</h2>
      </section>
      <div class = "certs" >
        <div class="cert hidden">
        <a style={{'text-decoration': 'none'}} href='https://www.freecodecamp.org/certification/Shane_Clayton_Maggard/javascript-algorithms-and-data-structures' rel="noopener" target='_blank'><p style={{'textAlign': 'center','color': 'navy', 'textShadow': '0.5px 0.5px 0px gold', 'fontSize': 'large'}}>Free Code Camp JS Algorithms and Data Structures</p></a>
        </div>
        <div class="cert hidden">
          <a style={{'text-decoration': 'none'}} href='https://www.credly.com/badges/005c5958-de68-411e-ae1d-95d8a0dccfc2/linked_in_profile'rel="noopener" target='_blank'><p style={{'textAlign': 'center','color': 'red', 'textShadow': '0.5px 0.5px 0px gold', 'fontSize': 'large'}}>Comptia A+</p></a>
        </div>
        <div class="cert hidden">
        <a style={{'text-decoration': 'none'}} href='https://www.freecodecamp.org/certification/Shane_Clayton_Maggard/responsive-web-design'rel="noopener" target='_blank'><p style={{'textAlign': 'center','color': 'navy', 'textShadow': '0.5px 0.5px 0px gold', 'fontSize': 'large'}}>Free Code Camp Responsive Web Design</p></a>          
        </div>
      </div>
      <div class = "certs" >
        <div class="cert hidden" alt="JSDS img">
          <a href='https://www.freecodecamp.org/certification/Shane_Clayton_Maggard/javascript-algorithms-and-data-structures' rel="noopener" target='_blank' alt='JSDS img'><img src={JSDS}/></a>            
        </div>
        <div class="cert hidden">
            <a href='https://www.credly.com/badges/005c5958-de68-411e-ae1d-95d8a0dccfc2/linked_in_profile' rel="noopener" target='_blank'><img src={A} alt='Comptia A+ img'/></a>
        </div>
        <div class="cert hidden">
        <a style={{'text-decoration': 'none'}} href='https://www.freecodecamp.org/certification/Shane_Clayton_Maggard/responsive-web-design'rel="noopener"  target='_blank'><img src={RWP} alt="RWD img"/></a>            
        </div>
      </div>
      <section id = 'contact' class="hidden">
        <h2>Contact</h2>
        </section >
        <div class = "certs" >
        <div class="cert hidden">
        <a style={{'text-decoration': 'none'}} href='www.linkedin.com/in/shane-maggard-847783268' rel="noopener" target='_blank'><img src={LinkedIn}></img></a>
        </div>
        <div class="cert hidden">
          <a style={{'text-decoration': 'none'}} href='https://github.com/ShaneClaytonMaggard'rel="noopener" target='_blank'><img src={GitHub}></img></a>
        </div>
        <div class="cert hidden">
          <table id="gpr">
            <tr>
              <td>Gmail:</td>
              <td>shaneclaytonmaggard@gmail.com</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>559-799-2577</td>
            </tr>
            <tr>
              <td>Resume: </td>
              <td>here</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
