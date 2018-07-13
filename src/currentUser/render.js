export default ({ render, renderLoading }) => (currentUser, props) => {
  const { fetchingInfo, info } = props

  if (fetchingInfo && renderLoading) {
    return renderLoading()
  }

  return render(info, props)
}
