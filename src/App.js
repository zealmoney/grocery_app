import './App.css';
import { createMedia } from "@artsy/fresnel"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  DesktopContainer from './Components/DesktopContainer'
import MobileContainer from './Components/MobileContainer'
import SingleProductComponent from './Components/SingleProductComponent';
import SingleProductComponentMobile from './Components/SingleProductComponentMobile';
import AllProductsComponent from './Components/AllProductsComponent';
import LoadingComponent from './Components/LoadingComponent';
import AllProductsComponentMobile from './Components/AllProductsComponentMobile';
import HistoryComponentDesktop from './Components/HistoryComponentDesktop';
import HistoryComponentMobile from './Components/HistoryComponentMobile';
import DealerPageComponentMobile from './Components/DealerPageComponentMobile';
import DealerPageComponentDesktop from './Components/DealerPageComponentDesktop';
import SearchComponent from './Components/SearchComponent';

const { MediaContextProvider, Media } = createMedia({
   breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
   }
})

const App = () => {

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<MobileContainer />} />
            <Route path='products/:productname/:prodid' element={<SingleProductComponentMobile />} />
            <Route path='openproducts/:pageno' element={<AllProductsComponentMobile />} />
            <Route path='loading' element={<LoadingComponent />} />
            <Route path='history' element={<HistoryComponentMobile />} />
            <Route path='dealer'  element={<DealerPageComponentMobile />} />
          </Routes>
        </BrowserRouter>

      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<DesktopContainer />} />
            <Route path='products/:productname/:prodid' element={<SingleProductComponent />} />
            <Route path='openproducts/:pageno' element={<AllProductsComponent />} />
            <Route path='loading' element={<LoadingComponent />} />
            <Route path='history' element={<HistoryComponentDesktop />} />
            <Route path='dealer'  element={<DealerPageComponentDesktop />} />
            <Route path='search'  element={<SearchComponent />} />

          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider>

  )
}

export default App;
