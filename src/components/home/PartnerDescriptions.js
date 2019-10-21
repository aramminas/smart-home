import React, { useState, useEffect } from 'react';

import part_1 from '../../img/partners/partner_1.jpg';
import part_2 from '../../img/partners/partner_2.jpg';
import part_3 from '../../img/partners/partner_3.jpg';
import part_4 from '../../img/partners/partner_4.jpg';
import part_5 from '../../img/partners/partner_5.jpg';
import part_6 from '../../img/partners/partner_6.jpg';

function PartnerDescriptions (){
    const partners = [
        {
            'image': part_1,
            'topic': 'Amazon Dash',
            'description': `Cras nunc purus, luctus id metus eget,
             viverra tincidunt nisl. Nunc aliquam tellus augue, non molestie neque fringilla eu. Donec et imperdiet eros.`
        },
        {
            'image': part_2,
            'topic': 'Conrad Connect',
            'description': `Proin tempus eros non turpis dictum venenatis. Vestibulum ornare nunc id ex sagittis, a
             feugiat justo vehicula. Sed vel suscipit ipsum..`
        },
        {
            'image': part_3,
            'topic': 'Nest',
            'description': `Cras at nisl urna. Vivamus ultricies nec felis ac sagittis. Vestibulum iaculis ligula vel
             mollis ultrices. Donec mollis augue sed pulvinar posuere.`
        },
        {
            'image': part_4,
            'topic': 'Encycle',
            'description': `Nulla metus metus, tempor et libero nec, euismod feugiat nibh. Sed pulvinar lorem id ultricies
             consectetur. Pellentesque auctor turpis massa, non pellentesque tortor ornare nec.`
        },
        {
            'image': part_5,
            'topic': 'Energy Hub',
            'description': `Pellentesque arcu orci, eleifend vitae faucibus ut, tristique ut diam. In rutrum diam ipsum, 
             sit amet egestas orci placerat et. Suspendisse eget vehicula nulla.`
        },
        {
            'image': part_6,
            'topic': 'Energy Hub',
            'description': `Quisque dapibus diam mauris. Proin vel nisl neque. Curabitur at metus vitae sapien hendrerit
             suscipit et dictum massa.`
        },

    ];
    const desc_content = partners.map((partner, index) => (
            <div key={index} className="partner-description">
                <div className="partner-description-img">
                    <img src={partner.image} alt="slider image"/>
                </div>
                <h4 className="partner-description-title">{partner.topic}</h4>
                <p className="partner-description-data">
                    {partner.description}
                </p>
            </div>
        )
    );
    return (
        <div className="partners-descriptions">
            <h2 className="partners-topic">-Brief description of partners-</h2>
            <div>
                {desc_content}
            </div>
        </div>
    );
}

export default PartnerDescriptions;