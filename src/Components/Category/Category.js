import React, { Fragment, useState } from 'react'
import data from '../data/data'
import Filter from '../Filter/Filter'
import "./Category.css"

const Category = ({themeToggel}) => {
    const [datas, setdata] = useState(data)
    const [filter, setFilter] = useState("")

    const delet =(e)=>{
        const result = data.filter((el)=>{
            return  el.type === e 
        })
        setdata(result)
    }

    const filterColors=(colors)=>{
        setFilter(colors)
        
    }

    const colorHandelar =()=>{
        if(filter.length !== 0){
            return datas.filter(({colors}) =>colors.includes(filter))
        }
        return datas
    }
    return (
        <Fragment>
        <div className='btn btn-warning mt-3  mb-2 dark' onClick={themeToggel}>Dark Mode</div>
            <h3 className='text-info text-center mt-10 hhh'>Category</h3>
            <div className='container-fluid mx-6'>
                <div className='row'>
                
                    <div className='col-md-3'>
                        <div className='btn btn-warning w-100 mb-2' onClick={()=>delet("man")}>man</div>
                        <div className='btn btn-warning w-100 mb-2' onClick={()=>delet("women")}>women</div>
                        <div className='btn btn-warning w-100 mb-2' onClick={()=>delet("children")}>children</div>
                        <div className='btn btn-warning w-100 mb-2' onClick={()=>setdata(data)}>all</div>
<Filter filteration={filterColors}/>

                    </div>


                    <div className='col-md-9'>
                        <div className='row'>
                        {colorHandelar().map((e)=>{
                            const {id , title , price , image , colors} = e;
                            return(
                                <Fragment>
                                <div className='col-md-4 mb-4' key={id}>
                                <div class="card" >
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p>price: {price}</p>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button class="btn btn-dark mx-2">buy now</button>{colors}
                                    </div>
                                </div>

                            </div>
                                </Fragment>
                            )
                        })}
                            

                            
                        </div>
                    </div>
                </div>



            </div>
        </Fragment>
    )
}

export default Category
