export default create => data => {
  console.log('Create with ')
  return create({
    email: data['email'],
    redirectUrl: `http://localhost:3001/reset-password`,
  })
}
