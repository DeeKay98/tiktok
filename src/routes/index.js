import { HeaderOnly } from '@/components/Layout';
import Search from '@/components/Layout/components/Search';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
