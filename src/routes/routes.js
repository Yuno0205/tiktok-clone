
import {HeaderOnly} from '~/layouts'
import routesConfig from '~/config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';


const publicRoutes = [
  {path : routesConfig.home , component : Home},
  {path : routesConfig.following , component : Following},
  {path : routesConfig.profile , component : Profile},
  {path : routesConfig.search , component : Search , layout : null },
  {path : routesConfig.upload , component : Upload , layout : HeaderOnly},

]

const privateRoutes = [

]

export {publicRoutes , privateRoutes}