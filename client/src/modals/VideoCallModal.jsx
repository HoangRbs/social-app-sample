export default function VideoCallModal() {
    return (
        <div class="modal call fade" id="videoCall" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="call">
                            <div>
                                <figure class="mb-4 avatar avatar-xl">
                                    <img src="./dist/media/img/women_avatar1.jpg" class="rounded-circle" alt="image" />
                                </figure>
                                <h4>Brietta Blogg <span class="text-success">video calling...</span></h4>
                                <div class="action-button">
                                    <button type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                    <button type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}