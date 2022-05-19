import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
    return (
        <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default NotFoundPage
