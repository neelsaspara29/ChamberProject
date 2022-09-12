import React from 'react'

function Events() {
  return (
      <>
        <div id="about_section">
        <div class="wrapper">
            <div id="about_top">
                <h2 className='text-danger'> <b>  EVENTS</b></h2>
                <h5>The Chamber hosts more than <span className='text-danger'> 200 events</span> annually. Here is a look at&nbsp; Past And what's next.</h5>
            </div>

            <div id="about_icons" class="flow-offset-1 wow fadeInUp">
                <div class="col2">
                  

                    <div class="about_item">
                        <a class="about_icon" href="events/2022/09/08/events/greater-west-broward-business-leads-group/"><span class="fa fa-users"></span></a>
                        <div class="about_desc">
                            <p class="about_title"><a href="#">PAST EVENTS</a></p>
                            <div style={{width:"14em"}}>
                              
                            <button class="slide w-100">LOOK AT PAST</button>
                              </div>                        </div>
                          </div>
                          

                </div>
                <div class="col2">
                   

                    <div class="about_item">
                        <a class="about_icon" href="events/2022/09/09/events/membership-council-meeting/"><span class="fa fa-calendar-check-o"></span></a>
                        <div class="about_desc">
                            <p class="about_title"><a href="events/2022/09/09/events/membership-council-meeting/">UPCOMING EVENTS</a></p>
                            <div style={{width:"14em"}}>
                              <button class="slide w-100">LOOK IN FUTURE</button>
                              </div>
                        </div>
                          </div>
                         

                </div>
                <div class="clear"></div>
            </div>


        </div>
    </div>
      </>
  )
}

export default Events