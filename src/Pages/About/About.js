import React from 'react';
import Profile from '../../images/profile-1.jpeg';

const About = () => {
    return (
        <div>
           <div classNameName="">
            <h2 classNameName="title text-center">About me</h2>
            <div classNameName="d-flex justify-content-center">
            <img className='w-25' src={Profile} alt="" />
                <div classNameName="">
                    <div classNameName="text"><h3 className='text-center'>I'm Shafi and I'm a Photographer</h3><span classNameName="typing-2"></span></div>
                    <p className='text-center'>Photographers create visual images for an exceptional range of creative, technical and documentary purposes.

                    As a professional photographer, you'll usually work to a brief set by the client or employer.

                    Examples of content you could work on include wedding, family and baby, fashion, food, architecture, and landscape photography.

                    A large proportion of professional photographers are self-employed. You could also find work with a variety of employers, including creative businesses, publishers and photographic agencies, or in the education and public sectors.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;