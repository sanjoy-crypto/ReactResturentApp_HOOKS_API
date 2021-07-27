import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((curEle) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItem(curEle)}>{curEle}</button>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar

