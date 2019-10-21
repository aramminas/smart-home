import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// used components
import image_team from '../../img/workers/team.jpg';
import worker_1 from '../../img/workers/worker_1.jpeg';
import worker_2 from '../../img/workers/worker_2.jpg';
import worker_3 from '../../img/workers/worker_3.jpg';
import worker_4 from '../../img/workers/worker_4.png';
import worker_5 from '../../img/workers/worker_5.png';

class Team extends Component {
    render() {
        let order_position = '.order-1';
        const team = [
            {
                "full_name": 'worker worker I',
                "icon" : 'fab fa-react',
                "image": '/img/workers/worker_1.jpeg',
                "specialty" : "specialty A",
                "about": `Suspendisse at felis nec quam condimentum molestie. Sed ultricies, ante id dictum finibus,
                 justo augue semper elit, egestas maximus orci eros et leo.Aenean tortor arcu, scelerisque sed nulla quis, 
                 dapibus auctor enim. Nunc tristique viverra metus. Cras sem dui, lobortis vitae leo ac, dapibus iaculis nunc. `,
            },
            {
                "full_name": 'worker worker II',
                "icon" : 'fab fa-css3',
                "image": '/img/workers/worker_2.jpg',
                "specialty" : "specialty B",
                "about": `Nunc a ex eget felis laoreet suscipit et ut arcu. Cras vel fringilla massa. Integer nibh augue, 
                luctus non commodo vitae, pharetra in sapien. In varius ante ac enim tincidunt vehicula. Vestibulum sit amet 
                convallis neque.`,
            },
            {
                "full_name": 'worker worker III',
                "icon" : 'fab fa-php',
                "image": '/img/workers/worker_3.jpg',
                "specialty" : "specialty C",
                "about": `Donec at urna eu arcu sagittis fringilla id et lectus. Mauris in volutpat libero. Nulla facilisi. 
                Duis condimentum velit at molestie tempus.`,
            },
            {
                "full_name": 'worker worker IV',
                "icon" : 'fab fa-node-js',
                "image": '/img/workers/worker_4.png',
                "specialty" : "specialty D",
                "about": ` Nam vel ante in lacus porta rhoncus id quis nisi. Quisque dolor purus, vestibulum ut risus quis,
                 mollis lobortis magna. Duis pretium ipsum vel posuere commodo. Mauris blandit pulvinar vestibulum. Proin eu diam enim. `,
            },
            {
                "full_name": 'worker worker V',
                "icon" : 'fab fa-html5',
                "image": '/img/workers/worker_5.png',
                "specialty" : "specialty E",
                "about": ` Aliquam et viverra odio. Sed nibh ex, rhoncus in laoreet nec, mattis eget risus. Nulla ac ex et nisl 
                pulvinar pulvinar eu ut est. Sed vestibulum leo sit amet urna iaculis aliquet.`,
            },
        ];
        const team_content = team.map((tm, index) => (
                <div key={index} className="worker-block">
                    <i className={tm.icon}></i>
                    <h2>{tm.full_name}</h2>
                    <div className="team-body">
                        <div className={`worker-image ${index%2 === 0 ? '' : 'order-1'}`}>
                            <img src={tm.image} alt='worker name' />
                        </div>
                        <div className="worker-desc">
                            <h3>{tm.specialty}</h3>
                            <p className="about-worker-desc">{tm.about}</p>
                        </div>
                    </div>
                </div>
            )
        );
        return (
            <div className="team-content">
                <h2>Our team</h2>
                <div className="line"> </div>
                <div className="team-content">
                    <img src={image_team} alt="team" />
                </div>
                <div className="team-content-group">
                    {team_content}
                </div>
                <div className="cooperate">
                    <h3>We are the whole team ready to accept the offer from you and will be happy to cooperate with you.</h3>
                    <p>Contact us at this link. <NavLink to="/contact"><i className="far fa-external-link"></i> contact.</NavLink></p>
                </div>
            </div>
        );
    }
}

export default Team;

