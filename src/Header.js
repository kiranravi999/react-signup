
 
 
  const Header=()=>{
    
    return (
      <div className="px-4">
        <div className="pt-3 mb-3 d-flex justify-content-end">
          <p className="mr-2">Help</p>
          <p className="mr-2">Orders&Returns</p>
          <p>Hi,John</p>
        </div>
        <div className=" d-flex justify-content-between align-items-center">
          <h3 className="mr-2">ECOMMERCE</h3>
          <div className="d-flex">
            <p className="mr-2">Categories</p>
            <p className="mr-2">Sale</p>
            <p className="mr-2">Clearance</p>
            <p className="mr-2">New stock</p>
            <p className="">Trending</p>
          </div>
          <div className="d-flex">
            <p className="mr-2">Search</p>
            <p className="">Cart</p>
          </div>
        </div>
        <div className="bg-secondary container-fluid d-flex justify-content-center align-items-center">
          <p className="m-0 p-0 mr-3">&lt;</p>
          <p className="m-0 p-0 mr-3">Get 10% off on business sign up</p>
          <p className="m-0 p-0 ">&gt;</p>
        </div>
      </div>
    );
   }
   
   export default Header;