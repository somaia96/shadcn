import NotFoundSvg from "../assets/SVG/NotFoundSvg"

const PageNotFound = () => {
  return (
    <div>
      <a href="/">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 mt-5 mb-5">
              <NotFoundSvg />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PageNotFound
