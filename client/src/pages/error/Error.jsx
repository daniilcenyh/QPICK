import { Link } from "react-router-dom"

import './error.css'

function Error() {
  return (
    <div className="error__container">
      <section id="error__block">
        <h1>404</h1>
        <p>not found</p>
        <Link to="/">Вернуться обратно в магазин</Link>
      </section>
    </div>
  )
}

export default Error
