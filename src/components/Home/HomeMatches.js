import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


//This Is Added From npm.js site
export default function HomeMatches() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (

        <Carousel
            swipeable={false}
            draggable={false}
            //showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className='px-2 '>
            <div class="card text-center ">
                <div class="card-body">
                    <div class="row">
                        <div class="  col-8 fw-light" >2nd Test • Ireland tour of Sri Lanka, 2023</div>
                        <div class=" col-4 float-end  text-end   "><span class="badge text-bg-danger">Test</span></div>
                    </div>
                    <div>

                        <div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172141/ireland.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >IRE</span></div>

                                    </div>
                                    <div class="col-xl-6 float-xl-end">450-6</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172119/sri-lanka.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >SL</span></div>
                                    </div>
                                    <div class="col-xl-6 float-xl-end">45-0</div>
                                </div>
                            </div>

                            <div title="Day 2: 2nd Session" class="text-danger float-start">Day 2: 2nd Session</div>

                        </div>

                    </div>
                </div>
                <div class="card-footer text-body-secondary text-end">
                    SCHEDULE
                </div>
            </div>
            </div>
                


            <div className='px-2'>
            <div class="card text-center">
                <div class="card-body">
                    <div class="row">
                        <div class="  col-8 fw-light" >2nd Test • Ireland tour of Sri Lanka, 2023</div>
                        <div class=" col-4 float-end  text-end   "><span class="badge text-bg-danger">Test</span></div>
                    </div>
                    <div>

                        <div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c225641/chennai-super-kings.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >CSK</span></div>

                                    </div>
                                    <div class="col-xl-6 float-xl-end">450-6</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c225643/royal-challengers-bangalore.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >RCB</span></div>
                                    </div>
                                    <div class="col-xl-6 float-xl-end">45-0</div>
                                </div>
                            </div>

                            <div title="Day 2: 2nd Session" class="text-danger float-start">Royal Challengers Bangalore opt to bowl
</div>

                        </div>

                    </div>
                </div>
                <div class="card-footer text-body-secondary text-end">
                    SCHEDULE
                </div>
            </div>
            </div>
           







        <div className='px-2'>
            <div class="card text-center">
                <div class="card-body">
                    <div class="row">
                        <div class="  col-8 fw-light" >2nd Test • Ireland tour of Sri Lanka, 2023</div>
                        <div class=" col-4 float-end  text-end   "><span class="badge text-bg-danger">Test</span></div>
                    </div>
                    <div>

                        <div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172141/ireland.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >IRE</span></div>

                                    </div>
                                    <div class="col-xl-6 float-xl-end">450-6</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c172119/sri-lanka.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >SL</span></div>
                                    </div>
                                    <div class="col-xl-6 float-xl-end">45-0</div>
                                </div>
                            </div>

                            <div title="Day 2: 2nd Session" class="text-danger float-start">Day 2: 2nd Session</div>

                        </div>

                    </div>
                </div>
                <div class="card-footer text-body-secondary text-end">
                    SCHEDULE
                </div>
            </div>
            </div>



            <div className='px-2'>
            <div class="card text-center">
                <div class="card-body">
                    <div class="row">
                        <div class="  col-8 fw-light" >39TH Match,Indian Premier League, 2023</div>
                        <div class=" col-4 float-end  text-end   "><span class="badge text-bg-danger">T20</span></div>
                    </div>
                    <div>

                        <div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c235085/gujarat-titans.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >Gujrat Titans</span></div>

                                    </div>
                                    <div class="col-xl-6 float-xl-end">150-6</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="" >
                                    <div class="col-xl-6 float-start" >
                                        <div ><img width="18px" height="12px" src="https://www.cricbuzz.com/a/img/v1/25x18/i1/c225649/sunrisers-hyderabad.jpg" title="Ireland" class="cb-img-rad-0" /> <span  >SunRisers Hyderabad</span></div>
                                    </div>
                                    <div class="col-xl-6 float-xl-end">45-0</div>
                                </div>
                            </div>

                            <div title="Day 2: 2nd Session" class="text-danger float-start">Gujarat Titans won by 55 runs
</div>

                        </div>

                    </div>
                </div>
                <div class="card-footer text-body-secondary text-end">
                    SCHEDULE
                </div>
            </div>
            </div>
            

        </Carousel>
    )




}
