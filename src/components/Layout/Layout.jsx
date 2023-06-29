import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { Footer } from '../Footer/Footer'
import './Layout.css'

export const Layout = () => {
    return(
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className="tags top-tags">
                    &lt;win&gt;
                </span>
                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/win&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/ethic&gt;</span>
                </span>
            </div>
            <Footer/>
        </div>
    )
}