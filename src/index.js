import React from 'react';
import ReactDOM from "react-dom";
import "./style.css"
import Postt from './Postt';



function Post(prop) {
    return (
   <>
   
    <div className="main-container">
           <div className="min-container">
               <div className="profile">
                 <img src={prop.src}  className="pro" alt="profile-img" />
               </div>
               <div className="name"><h3> {prop.name}</h3></div>
               <div className="time"><p>{prop.time}. <i class={prop.icon}></i></p></div>
           </div>
        <div className="main-bainner">
            <div className="bainner">
                <img src={prop.bainner}
                    className="min-bainner"
                    alt="lorum-picsum" />
            </div>
        </div>
        <div className="seprator"></div>
        <div className="icon">
            <ul>
                <li> <a href="#"> <i className="fal fa-thumbs-up animation"> </i> <strong>Like</strong ></a></li>
                <li> <a href="#"> <i className="fal fa-comment-alt"> </i>  <strong>comment</strong></a></li>
                <li> <a href="#"> <i className="fal fa-share" ></i> <strong>Share</strong ></a></li>
            </ul>
        </div><div className="seprator"></div>
    </div>
   </>
     )}
ReactDOM.render(
<> 
     <Postt />
     <Post name="Ilyas Hadi"
        icon="fas fa-globe"
        src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/128882385_215475533307308_8804194483117000121_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHs6yACfjF-8BwN4-icXoviKFAsGMEnSUYoUCwYwSdJRhfFLjCqn8BNDUZkAdcSIJLKOcNYnHwgIp2vURg2sFRr&_nc_ohc=DJE5kd3VtDkAX8Hxqaa&_nc_ht=scontent.fkhi2-1.fna&oh=d4b2dee44c3ffa5db50b80b5821750d6&oe=5FF164E6"
        time="56m"
        bainner="https://cdn.pixabay.com/photo/2014/05/02/21/50/blogging-336376_960_720.jpg" /><br />
    <Post name="Iqra shafiq"
        icon="fal fa-user"
        src="https://i.pinimg.com/originals/b6/35/88/b63588d0f7f5345ba856871aa07aaf22.jpg"
        time="2h"
        bainner="https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg" /><br />
    <Post name="Hareem noor"
        icon="fal fa-users"
        src="https://i.pinimg.com/originals/1b/57/5f/1b575f6fbe951badf29258ab2ff98838.jpg"
        time="3h"
        bainner="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg" /><br />
    <Post name="Arham yousafzaii" 
        icon="fal fa-user-lock"
        src="https://i.pinimg.com/originals/71/4d/0d/714d0d74db5a6bae91c3e7f03a810076.jpg"
        time="4h45m"
        bainner="https://cdn.pixabay.com/photo/2014/05/02/21/46/office-336368_960_720.jpg" /><br />
    <Post name="Sania Zamir"
        icon="fal fa-user-friends"
        src="https://i.pinimg.com/originals/da/43/38/da43383dd521cc0fb9adcf7d1802f2fd.jpg"
        time="12h"
        bainner="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_960_720.jpg" /><br />
    
</>, document.querySelector('#root')); 