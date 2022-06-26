import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewGroupModal({ open, handleOpen, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}

        <div style ={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <img src = 'https://img.freepik.com/free-vector/website-construction-with-laptop_24911-54680.jpg'/>
        </div>
      </Modal>
    </div>
  );
}



// export default function NewGroupModal() {
//     return (
//         <div className ="modal fade" id="newGroup" tabindex="-1" role="dialog" aria-hidden="true">
//             <div className ="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
//                 <div className ="modal-content">
//                     <div className ="modal-header">
//                         <h5 className ="modal-title">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className ="feather feather-users mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> New Group
//                         </h5>
//                         <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
//                             <i className ="ti-close"></i>
//                         </button>
//                     </div>
//                     <div className ="modal-body">
//                         <form>
//                             <div className ="form-group">
//                                 <label for="group_name" className ="col-form-label">Group name</label>
//                                 <div className ="input-group">
//                                     <input type="text" className ="form-control" id="group_name" />
//                                     <div className ="input-group-append">
//                                         <button className ="btn btn-light" data-toggle="tooltip" title="" type="button" data-original-title="Emoji">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className ="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className ="mb-2">The group members</p>
//                             <div className ="form-group">
//                                 <div className ="avatar-group">
//                                     <figure className ="avatar" data-toggle="tooltip" title="" data-original-title="Tobit Spraging">
//                                         <span className ="avatar-title bg-success rounded-circle">T</span>
//                                     </figure>
//                                     <figure className ="avatar" data-toggle="tooltip" title="" data-original-title="Cloe Jeayes">
//                                         <img src="./dist/media/img/women_avatar4.jpg" className ="rounded-circle" alt="image" />
//                                     </figure>
//                                     <figure className ="avatar" data-toggle="tooltip" title="" data-original-title="Marlee Perazzo">
//                                         <span className ="avatar-title bg-warning rounded-circle">M</span>
//                                     </figure>
//                                     <figure className ="avatar" data-toggle="tooltip" title="" data-original-title="Stafford Pioch">
//                                         <img src="./dist/media/img/man_avatar1.jpg" className ="rounded-circle" alt="image" />
//                                     </figure>
//                                     <figure className ="avatar" data-toggle="tooltip" title="" data-original-title="Bethena Langsdon">
//                                         <span className ="avatar-title bg-info rounded-circle">B</span>
//                                     </figure>
//                                     <a href="#" title="Add friends">
//                                         <figure className ="avatar">
//                                             <span className ="avatar-title bg-primary rounded-circle">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className ="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
//                                             </span>
//                                         </figure>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className ="form-group">
//                                 <label for="description" className ="col-form-label">Description</label>
//                                 <textarea className ="form-control" id="description"></textarea>
//                             </div>
//                         </form>
//                     </div>
//                     <div className ="modal-footer">
//                         <button type="button" className ="btn btn-primary">Create Group</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }