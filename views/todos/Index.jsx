const React = require('react')
const Layout = require('../Layouts/Layout')

function Index (props) {
    return (
        <Layout>
            <div>
                <h1>Todos Index Page</h1>
                <ul>
                    {
                        props.todos.map((todo) => {
                            return (
                                <li key={todo._id}>
                                    <a href={`/todos/${todo._id}`}>{todo.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
        
    )
}

module.exports = Index