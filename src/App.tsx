import {Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import {QueryClientProvider,QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ContryInfoPage from './pages/ContryInfoPage/ContryInfoPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function App() {
  const queryClient = new QueryClient({
    defaultOptions : {
      queries : {
        refetchOnWindowFocus : false,
        retry : false,
      }
    }
  })


  return (
   <>
   <QueryClientProvider client={queryClient}>
    
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:name' element={<ContryInfoPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/notFound' element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
   </>
  )
}

export default App
