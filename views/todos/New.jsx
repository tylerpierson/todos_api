const React = require('react')
const Layout = require('../Layouts/Layout')

function New(props) {
    return(
        <Layout>
            <div>
                <h1>New Todo Page</h1>
                <a href="/todos">Go back to Index Page</a>
                <form action="/todos" method="POST">
                    Title: <input type="text" name="title"/><br/>
                    Description: <textarea rows="5" cols="33" placeholder="Add your todo description here..." name="description"></textarea><br/>
                    Completed: <input type="checkbox" name="completed"/><br/>
                    <input type="submit" value="Create Todo"/>
                </form>
            </div>
        </Layout>
    )
}

module.exports = New