function SearchSort({setSearch,setSort,sort}){

return(

<div className="controls">

<input

className="search-bar"

type="text"

placeholder="Search by name or email"

onChange={(e)=>setSearch(e.target.value)}

/>

<button

onClick={()=>setSort(!sort)}

>

Sort {sort?"A-Z":"Z-A"}

</button>

</div>

)

}

export default SearchSort