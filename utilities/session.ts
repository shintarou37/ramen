exports.login_confirmation = (req:any, res:any, next:any) =>{
  console.log("----------------login_confirmationに入りました。")
  if(req.session.user){
    next();
  }else{
    res.redirect('/user/sign_in');
  }
}