import React from 'react'
import ImageSrc from "../Image/david-von-diemar-jM6Y2nhsAtk-unsplash.jpg";
import "./Section.css";
import TimeLine from "./Timeline";
function Section() {
  return (
    <div className="section-container">
    <div className="section-header">
        <h2 className="s-h2">Count:<span className="c-value">100</span></h2>
    </div>
    <div className="section-timeline">
    <TimeLine />

    </div>
    <div className='section-flex-box'>
    <div className='box-1'>
        <div className='inner-box-1'>
            <div className='img-box-1'>
                <img className='img-inner' src={ImageSrc} type='Img/jpg' />
                <h3 className='box-1-m-crime-l-h3'><i id="fa-solid" class="fa-solid fa-location-pin"></i>Coimbatore,Tamil Nadu,India-624404</h3>
            </div>    
            <div className='box-1-m-crime-l-main'>
                <div className='box-1-m-crime-l-middle'>
                <div className='box-1-m-crime-l-center'>
                <h2 className='box-1-m-crime-l-center-h2'>The Crime-"The Girl"</h2>
                <p className='box-1-m-crime-l-center-p'>the summary about yhe crime event done by an criminal in location in public.so that begin self protect your self in that description.</p>
                <div className='box-1-m-crime-l-center-button-main'>
                <div className='.box-1-m-crime-l-center-button-bg'>
                    <button className='box-1-m-crime-l-center-button'>
                    <i id='fa-solid-fa-arrow-right' class="fa-solid fa-arrow-right"></i>
                </button></div></div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='box-1'>
        <div className='inner-box-1'>
            <div className='img-box-1'>
                <img className='img-inner' src={ImageSrc} type='Img/jpg' />
                <h3 className='box-1-m-crime-l-h3'><i id="fa-solid" class="fa-solid fa-location-pin"></i>Coimbatore,Tamil Nadu,India-624404</h3>
            </div>    
            <div className='box-1-m-crime-l-main'>
                <div className='box-1-m-crime-l-middle'>
                <div className='box-1-m-crime-l-center'>
                <h2 className='box-1-m-crime-l-center-h2'>The Crime-"The Girl"</h2>
                <p className='box-1-m-crime-l-center-p'>the summary about yhe crime event done by an criminal in location in public.so that begin self protect your self in that description.</p>
                <div className='box-1-m-crime-l-center-button-main'>
                <div className='.box-1-m-crime-l-center-button-bg'>
                    <button className='box-1-m-crime-l-center-button'>
                    <i id='fa-solid-fa-arrow-right' class="fa-solid fa-arrow-right"></i>
                </button></div></div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='box-1'>
        <div className='inner-box-1'>
            <div className='img-box-1'>
                <img className='img-inner' src={ImageSrc} type='Img/jpg' />
                <h3 className='box-1-m-crime-l-h3'><i id="fa-solid" class="fa-solid fa-location-pin"></i>Coimbatore,Tamil Nadu,India-624404</h3>
            </div>    
            <div className='box-1-m-crime-l-main'>
                <div className='box-1-m-crime-l-middle'>
                <div className='box-1-m-crime-l-center'>
                <h2 className='box-1-m-crime-l-center-h2'>The Crime-"The Girl"</h2>
                <p className='box-1-m-crime-l-center-p'>the summary about yhe crime event done by an criminal in location in public.so that begin self protect your self in that description.</p>
                <div className='box-1-m-crime-l-center-button-main'>
                <div className='.box-1-m-crime-l-center-button-bg'>
                    <button className='box-1-m-crime-l-center-button'>
                    <i id='fa-solid-fa-arrow-right' class="fa-solid fa-arrow-right"></i>
                </button></div></div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Section;