import React from 'react'
import './Content.css'
import topImg from '../../images/top_bg.png'
import starImg from '../../images/star_bg.png'

const Content = () => {
    return (
        <>
            <div className='mainTopImage'>
                <img src={topImg} alt='topImg' className='topImg' />
                <img src={starImg} alt='startImg' className='starImg' />
            </div>
            <div className='container mx-auto px-6'>
                <div className='credential-box m-20 p-3 pl-4'>
                    <h1 className='text-white heading-label'>Login</h1>
                    <div class="mb-4 ">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 rounded-t-lg border-b-2 border-custom-yellow text-white" id="phone-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Phone</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white-600 hover:border-custom-yellow text-white dark:hover:text-gray-300" id="email-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Email</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="phone" role="tabpanel" aria-labelledby="profile-tab">
                            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="email" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Content