import Search from '@/pages/search';
import Notes from '@/pages/notes';
import Stars from '@/pages/stars';
import WriteBar from '@/pages/writeBar';
import { Redirect } from 'react-router-dom';
const  router = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/notes" />
        )
    },
    {
        path: "/search",
        component:Search,
    },
    {
        path: "/notes",
        component: Notes,
    },
    {
        path: "/collection",
        component: Stars,
    },
    {
        path: "/addnote",
        component: WriteBar,
    },
    
]
export default router;