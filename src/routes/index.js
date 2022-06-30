
import {HeaderOnly} from '~/components/Layout'
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const publicRoutes = [
  {path : '/' , component : Home},
  {path : '/following' , component : Following},
  {path : '/profile' , component : Profile},
  {path : '/search' , component : Search , layout : null },
  {path : '/upload' , component : Upload , layout : HeaderOnly},

]

const privateRoutes = [

]

export {publicRoutes , privateRoutes}