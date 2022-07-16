import React, { useContext } from "react"
import { AuthContext } from "App"
import { useMyTasksQuery } from "generated/graphql"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  const {data} = useMyTasksQuery()
  console.log(data)
  
  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <h1>Signed in successfully!</h1>
            <h2>Email: {currentUser?.email}</h2>
            <h2>Name: {currentUser?.name}</h2>
            <ul>
              {data && data.myTasks.map(({ name }, i) => <li key={i}>{name}</li>)}
            </ul>
          </>
        ) : (
          <h1>Not signed in</h1>
        )
      }
    </>
  )
}

export default Home
