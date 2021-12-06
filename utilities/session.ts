function ext_session(req: any){
  if(req.session.user){
    return true
  }else{
    return false
  }
}

export { ext_session }