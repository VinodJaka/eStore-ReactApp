/* eslint-disable jsx-a11y/anchor-is-valid */

import Products from '../Products';
import SideNav from '../SideNav';
import './_main-component.scss';

const MainComponent = ()=>{

    return(
        <div>
            <div className='container-fluid '>
                <div className="row">
                    <div className='col-lg-2 col-md-3 col-sm-4'>
                        <SideNav/>
                    </div>
                    <div className='col-lg-10 col-md-9 col-sm-8'>
                        <Products/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainComponent;

