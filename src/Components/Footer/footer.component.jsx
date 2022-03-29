import React from "react";
import './footer.styles.css';

import cryptex from '../../assets/images/cryptex-logo.png';

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-footer auto_margin">
                <div className="row auto_margin">
                    <div className="col-md-12 auto_margin">
                        <div className="container">
                            <div className="row mt-5">
                                <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                                    <div className="float-left">
                                        <img src={cryptex} alt="cryptex" className="cryptex-logo-footer" />


                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6 ">
                                    <div className="float-right d-flex justify-end">
                                        <div className="social-svg">
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9789 2.31367C18.7628 1.51041 18.1295 0.877212 17.3264 0.660919C15.8591 0.25946 9.99001 0.25946 9.99001 0.25946C9.99001 0.25946 4.12113 0.25946 2.65388 0.645698C1.86619 0.861763 1.21742 1.51053 1.00136 2.31367C0.615234 3.78081 0.615234 6.82345 0.615234 6.82345C0.615234 6.82345 0.615234 9.88142 1.00136 11.3332C1.21765 12.1364 1.85074 12.7696 2.654 12.9859C4.13658 13.3874 9.99023 13.3874 9.99023 13.3874C9.99023 13.3874 15.8591 13.3874 17.3264 13.0012C18.1296 12.785 18.7628 12.1518 18.9791 11.3487C19.3651 9.88142 19.3651 6.8389 19.3651 6.8389C19.3651 6.8389 19.3806 3.78081 18.9789 2.31367ZM8.12141 9.63435V4.01255L13.0019 6.82345L8.12141 9.63435Z" fill="currentColor"></path></svg>
                                        </div>

                                        <div className="social-svg">
                                            <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7113 7.52532C15.7113 11.6508 12.3236 14.9952 8.14484 14.9952C3.9661 14.9952 0.578125 11.6508 0.578125 7.52532C0.578125 3.39982 3.96585 0.0552063 8.14484 0.0552063C12.3238 0.0552063 15.7113 3.39982 15.7113 7.52532Z" fill="currentColor"></path><path d="M24.012 7.52533C24.012 11.4089 22.3182 14.5569 20.2287 14.5569C18.1392 14.5569 16.4453 11.4086 16.4453 7.52533C16.4453 3.64206 18.1392 0.493805 20.2287 0.493805C22.3182 0.493553 24.012 3.64181 24.012 7.52533Z" fill="currentColor"></path><path d="M27.4073 7.52532C27.4073 11.0048 26.8117 13.8254 26.0767 13.8254C25.3417 13.8254 24.7461 11.0048 24.7461 7.52532C24.7461 4.04586 25.3417 1.22528 26.0767 1.22528C26.8117 1.22528 27.4073 4.04586 27.4073 7.52532Z" fill="currentColor"></path></svg>

                                        </div>

                                        <div className="social-svg">
                                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3663 0.0977547C16.5854 0.0103689 16.8247 -0.0191792 17.0596 0.0121364C17.2945 0.043452 17.5166 0.134506 17.7031 0.27597C17.8895 0.417434 18.0337 0.604224 18.1208 0.817201C18.2079 1.03018 18.2348 1.26169 18.1987 1.48801C17.6791 4.75118 16.7265 10.7307 16.2208 13.9047C16.1858 14.1244 16.0928 14.3316 15.9506 14.5063C15.8084 14.6811 15.622 14.8174 15.4093 14.9022C15.1966 14.987 14.9648 15.0174 14.7364 14.9904C14.508 14.9635 14.2906 14.88 14.1054 14.7482C12.3165 13.4755 9.63451 11.5673 8.27282 10.5981C8.16774 10.5233 8.08094 10.4272 8.01855 10.3164C7.95616 10.2057 7.91971 10.0831 7.91177 9.95729C7.90383 9.83147 7.92458 9.7055 7.97258 9.58828C8.02057 9.47105 8.09463 9.36543 8.18953 9.27888C9.43726 8.14093 11.9224 5.87449 13.6322 4.31503C13.6725 4.27806 13.697 4.22791 13.701 4.17439C13.7049 4.12088 13.6881 4.06786 13.6537 4.02572C13.6193 3.98358 13.5698 3.95537 13.515 3.9466C13.4602 3.93784 13.404 3.94915 13.3574 3.97833C11.165 5.35912 7.80748 7.47357 6.16191 8.50991C5.85352 8.70414 5.50692 8.8348 5.14382 8.8937C4.78072 8.95259 4.40894 8.93847 4.05176 8.8522C3.14565 8.63348 1.83866 8.31788 0.675557 8.03716C0.493458 7.99323 0.330359 7.89492 0.209492 7.75625C0.0886243 7.61757 0.0161521 7.44561 0.00239799 7.26484C-0.0113562 7.08407 0.0343093 6.90372 0.132889 6.74948C0.23147 6.59523 0.377937 6.47496 0.55143 6.4058C4.60034 4.79079 12.524 1.63053 16.3663 0.0977547Z" fill="currentColor"></path></svg>
                                        </div>

                                        <div className="social-svg">
                                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <hr className="hr-color" />
                            </div>
                            <div className="row mt-2">
                                <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6">
                                    <div className="float-left">
                                        <p className="hr-color">© 2021 - 2022 CryptEx. All Rights Reserved.
                                            <br />
                                            Powered by HashEx</p>



                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-6 col-sm-12 col-lg-6 col-xxl-6 ">
                                    <div className="float-right d-flex justify-end">
                                        <div class="nav"><a target="_blank" rel="nofollower" href="/#" data-rb-event-key="" class="nav-link1 nav12">Docs</a><a href="/#" data-rb-event-key="" class="nav-link1 nav12">Privacy Policy</a><a href="/#" data-rb-event-key="" class="nav-link1 nav12">Terms Of Service</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;