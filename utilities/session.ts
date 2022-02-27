import express from 'express';
exports.login_confirmation = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("----------------login_confirmationに入りました。")
  if(req.session.user){
    next();
  }else{
    res.redirect('/user/sign_in');
  }
}