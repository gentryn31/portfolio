import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Footer.scss';

const Footer = props => {
    return (
        <div className='Footer'>
            <div className='footer-grid'>
                <svg width="166" height="61" viewBox="0 0 166 61" fill="none">
                    <g>
                        <path d="M137.375 24.5218C136.069 24.5218 134.974 24.2785 134.092 23.7917C133.21 23.305 132.544 22.6597 132.092 21.8557C131.64 21.0518 131.414 20.1686 131.414 19.2061C131.414 18.3091 131.572 17.5216 131.888 16.8433C132.203 16.1652 132.672 15.5882 133.292 15.1124C133.913 14.6366 134.675 14.251 135.579 13.9556C136.363 13.7259 137.25 13.5236 138.241 13.3486C139.232 13.1736 140.274 13.0096 141.368 12.8564C142.463 12.7033 143.549 12.5502 144.627 12.397L143.385 13.0862C143.407 11.697 143.116 10.6661 142.511 9.99333C141.907 9.32074 140.87 8.98444 139.4 8.98444C138.475 8.98444 137.626 9.20044 136.853 9.63243C136.08 10.0645 135.541 10.7782 135.236 11.7735L132.051 10.7892C132.486 9.26876 133.317 8.06008 134.542 7.16316C135.766 6.26624 137.397 5.81778 139.433 5.81778C141.012 5.81778 142.386 6.08851 143.557 6.62997C144.727 7.17143 145.585 8.02734 146.129 9.19768C146.412 9.77734 146.586 10.3899 146.652 11.0353C146.717 11.6806 146.75 12.3751 146.75 13.1188V24.0296H143.728V19.9771L144.316 20.5022C143.587 21.8584 142.659 22.8674 141.532 23.5293C140.405 24.191 139.019 24.5218 137.375 24.5218ZM137.979 21.7163C138.948 21.7163 139.781 21.544 140.478 21.1994C141.175 20.8548 141.736 20.4146 142.16 19.8786C142.585 19.3427 142.863 18.7848 142.993 18.205C143.178 17.6801 143.285 17.0895 143.312 16.4332C143.339 15.7769 143.353 15.2518 143.353 14.858L144.463 15.2684C143.385 15.4323 142.405 15.5799 141.523 15.7112C140.642 15.8424 139.844 15.971 139.131 16.0969C138.418 16.2226 137.783 16.373 137.228 16.548C136.76 16.712 136.343 16.9089 135.979 17.1387C135.614 17.3684 135.325 17.6473 135.113 17.9755C134.901 18.3036 134.795 18.7029 134.795 19.1732C134.795 19.6326 134.909 20.0564 135.138 20.4447C135.366 20.833 135.715 21.142 136.183 21.3717C136.651 21.6014 137.25 21.7163 137.979 21.7163ZM165.749 24.0296H162.287V15.3176C162.287 14.6284 162.23 13.9202 162.116 13.1929C162.001 12.4654 161.783 11.7899 161.462 11.1664C161.141 10.5431 160.689 10.0399 160.107 9.65704C159.524 9.27414 158.765 9.08269 157.828 9.08269C157.219 9.08269 156.641 9.1839 156.097 9.38631C155.553 9.58872 155.076 9.91412 154.668 10.3625C154.26 10.811 153.939 11.4017 153.704 12.1346C153.47 12.8674 153.353 13.7588 153.353 14.8088L151.23 14.0049C151.23 12.397 151.53 10.9778 152.128 9.74721C152.727 8.51675 153.587 7.55696 154.709 6.86782C155.83 6.17869 157.186 5.83412 158.776 5.83412C159.995 5.83412 161.019 6.03102 161.846 6.42481C162.674 6.8186 163.346 7.33544 163.863 7.97536C164.38 8.61527 164.775 9.31254 165.047 10.0672C165.319 10.8219 165.504 11.5603 165.602 12.2822C165.7 13.0041 165.749 13.6384 165.749 14.1854V24.0296ZM153.353 24.0296H149.891V6.31002H152.945V11.4291H153.353V24.0296ZM128.692 24.0296H125.23V15.3176C125.23 14.6284 125.172 13.9202 125.058 13.1929C124.944 12.4654 124.726 11.7899 124.405 11.1664C124.084 10.5431 123.632 10.0399 123.049 9.65704C122.467 9.27414 121.707 9.08269 120.771 9.08269C120.161 9.08269 119.584 9.1839 119.04 9.38631C118.495 9.58872 118.019 9.91412 117.611 10.3625C117.202 10.811 116.881 11.4017 116.647 12.1346C116.413 12.8674 116.296 13.7588 116.296 14.8088L114.173 14.0049C114.173 12.397 114.472 10.9778 115.071 9.74721C115.67 8.51675 116.53 7.55696 117.651 6.86782C118.773 6.17869 120.128 5.83412 121.718 5.83412C122.938 5.83412 123.961 6.03102 124.789 6.42481C125.616 6.8186 126.288 7.33544 126.806 7.97536C127.323 8.61527 127.718 9.31254 127.99 10.0672C128.262 10.8219 128.447 11.5603 128.545 12.2822C128.643 13.0041 128.692 13.6384 128.692 14.1854V24.0296ZM116.296 24.0296H112.833V0.403564H115.888V13.1517H116.296V24.0296ZM110.231 21.1256V24.0296C109.121 24.2484 108.032 24.3414 106.965 24.3086C105.898 24.2758 104.945 24.0679 104.107 23.685C103.268 23.3023 102.637 22.7007 102.212 21.8803C101.831 21.1474 101.627 20.4009 101.6 19.6408C101.573 18.8805 101.559 18.0191 101.559 17.0565V1.38784H104.989V16.8925C104.989 17.6036 104.997 18.2216 105.013 18.7465C105.03 19.2716 105.141 19.7146 105.348 20.0755C105.74 20.7536 106.363 21.1392 107.218 21.2323C108.073 21.3252 109.077 21.2897 110.231 21.1256ZM110.231 9.06635H98.1783V6.31002H110.231V9.06635ZM87.0615 24.5218C85.755 24.5218 84.6608 24.2785 83.7788 23.7917C82.897 23.305 82.2301 22.6597 81.7783 21.8557C81.3263 21.0518 81.1003 20.1686 81.1003 19.2061C81.1003 18.3091 81.2582 17.5216 81.5741 16.8433C81.8897 16.1652 82.3579 15.5882 82.9785 15.1124C83.5992 14.6366 84.3614 14.251 85.265 13.9556C86.049 13.7259 86.9364 13.5236 87.9272 13.3486C88.9181 13.1736 89.9605 13.0096 91.0547 12.8564C92.149 12.7033 93.2351 12.5502 94.3129 12.397L93.0717 13.0862C93.0935 11.697 92.8023 10.6661 92.1979 9.99333C91.5938 9.32074 90.5567 8.98444 89.0867 8.98444C88.1612 8.98444 87.312 9.20044 86.539 9.63243C85.766 10.0645 85.227 10.7782 84.922 11.7735L81.7373 10.7892C82.1728 9.26876 83.0031 8.06008 84.228 7.16316C85.4529 6.26624 87.0833 5.81778 89.1195 5.81778C90.6981 5.81778 92.0727 6.08851 93.2432 6.62997C94.4137 7.17143 95.2711 8.02734 95.8156 9.19768C96.0986 9.77734 96.2728 10.3899 96.3381 11.0353C96.4035 11.6806 96.4361 12.3751 96.4361 13.1188V24.0296H93.4147V19.9771L94.0027 20.5022C93.2732 21.8584 92.345 22.8674 91.2182 23.5293C90.0912 24.191 88.7057 24.5218 87.0615 24.5218ZM87.666 21.7163C88.635 21.7163 89.4679 21.544 90.1647 21.1994C90.8615 20.8548 91.4223 20.4146 91.8469 19.8786C92.2716 19.3427 92.5492 18.7848 92.6797 18.205C92.8649 17.6801 92.971 17.0895 92.9982 16.4332C93.0255 15.7769 93.0392 15.2518 93.0392 14.858L94.1497 15.2684C93.0718 15.4323 92.0919 15.5799 91.2099 15.7112C90.328 15.8424 89.5304 15.971 88.8172 16.0969C88.1041 16.2226 87.4698 16.373 86.9145 16.548C86.4464 16.712 86.0299 16.9089 85.6653 17.1387C85.3004 17.3684 85.0119 17.6473 84.7995 17.9755C84.5872 18.3036 84.481 18.7029 84.481 19.1732C84.481 19.6326 84.5954 20.0564 84.824 20.4447C85.0527 20.833 85.4011 21.142 85.8693 21.3717C86.3376 21.6014 86.9365 21.7163 87.666 21.7163ZM78.9228 24.0296H75.4603V15.3176C75.4603 14.6284 75.4032 13.9202 75.2888 13.1929C75.1745 12.4654 74.9567 11.7899 74.6356 11.1664C74.3144 10.5431 73.8626 10.0399 73.2801 9.65704C72.6976 9.27414 71.9382 9.08269 71.0018 9.08269C70.392 9.08269 69.8149 9.1839 69.2704 9.38631C68.7261 9.58872 68.2497 9.91412 67.8414 10.3625C67.4331 10.811 67.1119 11.4017 66.8779 12.1346C66.6438 12.8674 66.5267 13.7588 66.5267 14.8088L64.4037 14.0049C64.4037 12.397 64.7031 10.9778 65.3019 9.74721C65.9008 8.51675 66.7609 7.55696 67.8824 6.86782C69.0039 6.17869 70.3594 5.83412 71.9489 5.83412C73.1685 5.83412 74.192 6.03102 75.0193 6.42481C75.8468 6.8186 76.5192 7.33544 77.0365 7.97536C77.5537 8.61527 77.9484 9.31254 78.2205 10.0672C78.4927 10.8219 78.6778 11.5603 78.7758 12.2822C78.8738 13.0041 78.9228 13.6384 78.9228 14.1854V24.0296ZM66.5267 24.0296H63.0645V6.31002H66.1184V11.4291H66.5267V24.0296Z" fill="white" />
                        <path d="M151.864 59.911H148.614L152.027 50.5754L152.076 53.332L144.384 34.316H147.944L153.693 49.0005H152.648L158.135 34.316H161.597L151.864 59.911ZM137.595 52.0358H134.149V34.316H137.187V38.6148L136.762 38.0568C136.98 37.4881 137.263 36.9658 137.611 36.4899C137.96 36.0142 138.363 35.6232 138.82 35.3168C139.266 34.9888 139.764 34.7346 140.314 34.5541C140.864 34.3736 141.428 34.2642 142.005 34.2258C142.582 34.1875 143.137 34.2176 143.671 34.316V37.5319C143.093 37.3787 142.454 37.3349 141.752 37.4006C141.049 37.4662 140.404 37.6905 139.816 38.0734C139.261 38.4344 138.823 38.8719 138.501 39.3859C138.18 39.8999 137.949 40.4714 137.807 41.1004C137.666 41.7293 137.595 42.3938 137.595 43.0938V52.0358ZM130.441 49.1316V52.0358C129.331 52.2545 128.242 52.3474 127.175 52.3146C126.108 52.2818 125.155 52.074 124.317 51.6912C123.479 51.3083 122.847 50.7068 122.423 49.8865C122.041 49.1537 121.837 48.4071 121.81 47.6468C121.783 46.8867 121.769 46.0253 121.769 45.0628V29.394H125.199V44.8985C125.199 45.6096 125.207 46.2277 125.223 46.7527C125.24 47.2776 125.351 47.7206 125.558 48.0815C125.95 48.7598 126.574 49.1454 127.428 49.2383C128.283 49.3312 129.287 49.2957 130.441 49.1316ZM130.441 37.0726H118.388V34.316H130.441V37.0726ZM117.191 52.0358H113.728V43.3236C113.728 42.6344 113.671 41.9262 113.557 41.1989C113.443 40.4714 113.225 39.796 112.904 39.1726C112.582 38.5491 112.131 38.0459 111.548 37.663C110.966 37.2803 110.206 37.0889 109.27 37.0889C108.66 37.0889 108.083 37.19 107.539 37.3923C106.994 37.5947 106.518 37.9202 106.109 38.3687C105.701 38.8171 105.38 39.4077 105.146 40.1406C104.912 40.8734 104.795 41.7649 104.795 42.815L102.672 42.0111C102.672 40.4031 102.971 38.9839 103.57 37.7534C104.169 36.5228 105.029 35.563 106.15 34.874C107.272 34.1849 108.627 33.8403 110.217 33.8403C111.436 33.8403 112.46 34.0372 113.288 34.431C114.115 34.8247 114.787 35.3414 115.304 35.9814C115.822 36.6213 116.216 37.3186 116.489 38.0734C116.761 38.828 116.946 39.5663 117.044 40.2882C117.142 41.0102 117.191 41.6446 117.191 42.1914V52.0358ZM104.795 52.0358H101.332V34.316H104.386V39.4351H104.795V52.0358ZM90.232 52.528C88.479 52.528 86.9411 52.1424 85.6183 51.3713C84.2953 50.6001 83.2664 49.5227 82.5315 48.139C81.7966 46.7554 81.4291 45.1502 81.4291 43.3236C81.4291 41.3876 81.7911 39.7086 82.5151 38.2866C83.2392 36.8646 84.2491 35.7654 85.5448 34.9888C86.8404 34.2123 88.3484 33.824 90.0687 33.824C91.8652 33.824 93.395 34.2423 94.6581 35.079C95.9211 35.9158 96.8656 37.1053 97.4916 38.6475C98.1178 40.1899 98.3654 42.022 98.2346 44.1438H94.8214V42.8969C94.7996 40.8405 94.4103 39.3202 93.6536 38.3358C92.897 37.3514 91.7456 36.8591 90.1994 36.8591C88.49 36.8591 87.2052 37.4006 86.345 38.4835C85.4848 39.5663 85.0548 41.1304 85.0548 43.1759C85.0548 45.1229 85.4848 46.6297 86.345 47.696C87.2052 48.7626 88.4464 49.2958 90.0687 49.2958C91.1357 49.2958 92.0584 49.0524 92.8369 48.5657C93.6154 48.0789 94.2225 47.3815 94.6581 46.4737L98.0061 47.5401C97.3201 49.1261 96.2803 50.354 94.8867 51.2236C93.493 52.0932 91.9414 52.528 90.232 52.528ZM96.5361 44.1438H83.9443V41.4696H96.5361V44.1438ZM70.9059 60.4032C69.9585 60.4032 69.0412 60.2556 68.1539 59.9604C67.2664 59.6651 66.4579 59.2303 65.7285 58.656C64.999 58.0817 64.3947 57.3735 63.9157 56.5313L67.0679 54.9235C67.4489 55.6781 67.9932 56.2304 68.7009 56.5805C69.4087 56.9305 70.1545 57.1055 70.9384 57.1055C71.9075 57.1055 72.7351 56.9332 73.4211 56.5886C74.1069 56.2442 74.6267 55.7274 74.9806 55.0383C75.3346 54.3491 75.506 53.496 75.4951 52.4788V47.5237H75.9033V34.316H78.9248V52.5115C78.9248 52.9818 78.9084 53.4303 78.8758 53.8569C78.8431 54.2835 78.7833 54.7101 78.6963 55.1367C78.4458 56.329 77.9694 57.3134 77.2671 58.0899C76.5649 58.8665 75.6721 59.4462 74.5886 59.8291C73.5053 60.2119 72.2777 60.4032 70.9059 60.4032ZM70.6444 52.528C69.0004 52.528 67.5822 52.1178 66.3899 51.2974C65.1978 50.477 64.2777 49.3586 63.6297 47.9422C62.9821 46.5257 62.6582 44.9315 62.6582 43.1596C62.6582 41.3766 62.9848 39.7824 63.638 38.3768C64.2913 36.9712 65.2195 35.861 66.4227 35.0461C67.6258 34.2314 69.0549 33.824 70.7099 33.824C72.3757 33.824 73.7775 34.2314 74.9153 35.0461C76.0531 35.861 76.9133 36.974 77.4958 38.3851C78.0783 39.796 78.3695 41.3875 78.3695 43.1596C78.3695 44.9315 78.0755 46.5229 77.4875 47.9339C76.8997 49.345 76.0341 50.4634 74.8908 51.2892C73.7475 52.1151 72.332 52.528 70.6444 52.528ZM71.1181 49.4269C72.2396 49.4269 73.1542 49.159 73.8618 48.623C74.5696 48.0871 75.0868 47.3488 75.4133 46.4081C75.74 45.4675 75.9033 44.3847 75.9033 43.1596C75.9033 41.9345 75.7373 40.8516 75.4053 39.911C75.0732 38.9702 74.5614 38.2373 73.8701 37.7123C73.1787 37.1873 72.2995 36.9249 71.2324 36.9249C70.1 36.9249 69.1691 37.2038 68.4396 37.7615C67.7102 38.3194 67.1685 39.0686 66.8147 40.0092C66.4607 40.95 66.2837 42.0001 66.2837 43.1596C66.2837 44.3299 66.4607 45.3882 66.8147 46.3343C67.1685 47.2804 67.702 48.0325 68.4152 48.5903C69.1283 49.1481 70.0293 49.4269 71.1181 49.4269Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7696 8.10446C20.638 7.0722 18.2834 6.51978 15.875 6.51978H0V38.4109H27.5886V52.2686H29.6645C33.874 52.2686 37.915 50.5847 40.8916 47.5994C43.8634 44.6091 45.5395 40.5494 45.5395 36.3205V6.51978H29.6645C27.2561 6.51978 24.9015 7.0722 22.7696 8.10446ZM26.9298 11.0265C26.9868 11.079 27.0422 11.1338 27.0972 11.189C30.074 14.1793 31.7451 18.2388 31.7451 22.4677V34.2351V38.4109V47.9041C34.4472 47.4155 36.8941 45.9833 38.652 43.8687C40.4148 41.7544 41.3781 39.0785 41.3781 36.3205V10.7003H29.6645C28.7362 10.7003 27.8186 10.8111 26.9298 11.0265ZM18.6095 11.0265C17.7207 10.8111 16.8033 10.7003 15.875 10.7003H4.1612V34.2351H18.9562C18.5263 33.8405 18.1166 33.4206 17.7293 32.9772C15.1958 30.0691 13.7942 26.3336 13.7942 22.4677C13.7942 18.2388 15.4655 14.1793 18.4421 11.189C18.4971 11.1338 18.5524 11.079 18.6095 11.0265ZM22.7696 12.9549C23.258 13.3131 23.7214 13.7104 24.1544 14.1453C26.3507 16.3517 27.5886 19.3467 27.5886 22.4677V34.0479C25.2558 33.6241 23.0852 32.4932 21.3849 30.7853C19.1886 28.5789 17.9509 25.5837 17.9509 22.4677C17.9509 19.3467 19.1886 16.3517 21.3849 14.1453C21.8179 13.7104 22.2813 13.3131 22.7696 12.9549Z" fill="white" />
                    </g>
                </svg>
                <div className='footer-link-list'>
                    <Link smooth to={`#experience`}>Experience</Link>
                    <Link smooth to={`#projects`}>Projects</Link>
                    <Link smooth to={`#education`}>Education</Link>
                    <Link smooth to={`#contact`}>Contact</Link>
                </div>
                <div className='footer-link-list'>
                    <a href='mailto:hello@nathangentry.me' target='_blank' rel='noopener noreferrer'>Email</a>
                    <a href='https://github.com/gentryn31' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href='https://www.linkedin.com/in/nathan-gentry' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://bit.ly/resume_fall2020' target='_blank' rel='noopener noreferrer'>Resume</a>
                </div>
                <p id='footer-copyright'>&copy; 2020 Nathan Gentry</p>
            </div>
        </div>
    );
}

export default Footer;