exports.login_confirmation = (req:any, res:any, next:any) =>{
  if(req.session.user){
    next();
  }else{
    res.redirect('/user/sign_in',{req: req});
  }
}