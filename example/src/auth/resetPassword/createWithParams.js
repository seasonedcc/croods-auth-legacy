export default (create, props) => data => {
  const params = new URLSearchParams(props.location.search)
  create({
    password: data['password'],
    passwordConfirmation: data['passwordConfirmation'],
    resetPasswordToken: params.get('reset_password_token'),
  })
}
