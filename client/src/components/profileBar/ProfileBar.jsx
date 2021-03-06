export default function ProfileBar ({user, isProfileBarActive, setProfileBarActive}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div class="sidebar-group">
            <div id="contact-information" class= {isProfileBarActive ? "sidebar active" : "sidebar"} >
                <header>
                    <span>Profile</span>
                    <ul class="list-inline">
                        <li class="list-inline-item" onClick = {() => { setProfileBarActive(false); }}>
                            <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <div class="sidebar-body" tabindex="6" style={{overflow: "hidden", outline: "none" }}>
                    <div class="pl-4 pr-4">
                        <div class="text-center">
                            <figure class="avatar avatar-xl mb-4">
                                <img src={
                                    user.profilePicture
                                        ? user.profilePicture
                                        : PF + "person/noAvatar.png"
                                    } 
                                    
                                    class="rounded-circle" alt="image" />
                            </figure>
                            <h5 class="mb-1">{ user.username }</h5>
                            {/* <small class="text-muted font-italic">Last seen: Today</small> */}

                            <ul class="nav nav-tabs justify-content-center mt-5" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Media</a>
                                </li> */}
                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p class="text-muted"> {'some description of user if necessery ......'} </p>
                                <div class="mt-4 mb-4">
                                    <h6>Phone</h6>
                                    <p class="text-muted">(555) 555 55 55</p>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6>City</h6>
                                    <p class="text-muted">Ha noi - Cau giay - Washinton DC</p>
                                </div>
                                <div class="mt-4 mb-4">
                                    <h6>Website</h6>
                                    <p>
                                        <a href="#">google.com</a>
                                    </p>
                                </div>
                                {/* <div class="mt-4 mb-4">
                                    <h6 class="mb-3">Social media accounts</h6>
                                    <ul class="list-inline social-links">
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-facebook" data-toggle="tooltip" title="" data-original-title="Facebook">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-twitter" data-toggle="tooltip" title="" data-original-title="Twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-dribbble" data-toggle="tooltip" title="" data-original-title="Dribbble">
                                                <i class="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-whatsapp" data-toggle="tooltip" title="" data-original-title="Whatsapp">
                                                <i class="fa fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-linkedin" data-toggle="tooltip" title="" data-original-title="Linkedin">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-google" data-toggle="tooltip" title="" data-original-title="Google">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-behance" data-toggle="tooltip" title="" data-original-title="Behance">
                                                <i class="fa fa-behance"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" class="btn btn-sm btn-floating btn-instagram" data-toggle="tooltip" title="" data-original-title="Instagram">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <div class="mt-4 mb-4">
                                    <h6 class="mb-3">Settings</h6>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch11" />
                                            <label class="custom-control-label" for="customSwitch11">Block</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch12" />
                                            <label class="custom-control-label" for="customSwitch12">Mute</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-item custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch13" />
                                            <label class="custom-control-label" for="customSwitch13">Get
                                                notification</label>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h6 class="mb-3 d-flex align-items-center justify-content-between">
                                    <span>Recent Files</span>
                                    <a href="#" class="btn btn-link small">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload
                                    </a>
                                </h6>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-pdf-o text-danger mr-2"></i> report4221.pdf
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-image text-muted mr-2"></i> avatar_image.png
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-excel-o text-success mr-2"></i>
                                                excel_report_file2020.xlsx
                                            </a>
                                        </li>
                                        <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i class="fa fa-file-text-o text-warning mr-2"></i> articles342133.txt
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


