import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Routes, Route, Navigate } from 'react-router-dom'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { setCurrentUser } from './store/user/user.reducer'
import { selectCurrentUser } from './store/user/user.selector'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      const pickedUser =
        user &&
        (({ accessToken, email, displayName }) => ({ accessToken, email, displayName }))(user)

      dispatch(setCurrentUser(pickedUser))
    })

    return unsubscribe
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route
          path='auth'
          element={(!currentUser && <Authentication />) || (currentUser && <Navigate to='/' />)}
        />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
