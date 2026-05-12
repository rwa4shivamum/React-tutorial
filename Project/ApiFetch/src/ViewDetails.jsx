import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const ViewDetails = () => {
    const [obj, setObj] = useState(null);
    const {id} = useParams()
    console.log(id)
    const getData = async() => {
       const res =  await fetch(`https://dummyjson.com/products/${id}`,{
            method:"GET"
        })
        const result = res.json();
        return result
    }
    useEffect(()=>{
        getData().then((data)=> setObj(data)).catch((error)=> console.log(error))
    },[])
    if(!obj){
        return(
            <p>Loading....</p>
        )
    }
    return(
        <div className="container py-5">

      <div className="card border-0 shadow-lg p-4">

        <div className="row">

          {/* Product Image */}
          <div className="col-md-5">
            <img
              src={obj.images[0]}
              alt={obj.title}
              className="img-fluid rounded"
              style={{
                height: "450px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-7">

            <h1 className="fw-bold">{obj.title}</h1>

            <p className="text-muted mt-3">
              {obj.description}
            </p>

            {/* Tags */}
            <div className="mb-3">
              {obj.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-secondary me-2 p-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mb-3">
              <h2 className="text-success fw-bold">
                ${obj.price}
              </h2>

              <span className="badge bg-danger">
                {obj.discountPercentage}% OFF
              </span>
            </div>

            {/* Ratings */}
            <div className="mb-4">
              ⭐ {obj.rating} / 5
            </div>

            {/* Info */}
            <div className="row">

              <div className="col-sm-6 mb-3">
                <strong>Brand:</strong> {obj.brand}
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Category:</strong> {obj.category}
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Stock:</strong> {obj.stock}
              </div>

              <div className="col-sm-6 mb-3">
                <strong>SKU:</strong> {obj.sku}
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Weight:</strong> {obj.weight} gm
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Status:</strong>{" "}
                <span className="badge bg-success">
                  {obj.availabilityStatus}
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 mt-4">

              <button className="btn btn-dark px-4">
                Add To Cart
              </button>

              <button className="btn btn-outline-dark px-4">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* Extra Details */}
        <div className="mt-5">

          <h3 className="border-bottom pb-2 mb-4">
            Product Details
          </h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <strong>Warranty:</strong>{" "}
              {obj.warrantyInformation}
            </div>

            <div className="col-md-6 mb-3">
              <strong>Shipping:</strong>{" "}
              {obj.shippingInformation}
            </div>

            <div className="col-md-6 mb-3">
              <strong>Return Policy:</strong>{" "}
              {obj.returnPolicy}
            </div>

          </div>

        </div>

        {/* Dimensions */}
        <div className="mt-5">

          <h3 className="border-bottom pb-2 mb-4">
            Dimensions
          </h3>

          <div className="row text-center">

            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Width</h5>
                <p>{obj.dimensions.width} cm</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Height</h5>
                <p>{obj.dimensions.height} cm</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>Depth</h5>
                <p>{obj.dimensions.depth} cm</p>
              </div>
            </div>

          </div>

        </div>

        {/* Reviews */}
        <div className="mt-5">

          <h3 className="border-bottom pb-2 mb-4">
            Customer Reviews
          </h3>

          {obj.reviews.map((review, index) => (
            <div
              key={index}
              className="card p-3 mb-3 border-0 shadow-sm"
            >

              <h5>{review.reviewerName}</h5>

              <p>
                {"⭐".repeat(review.rating)}
              </p>

              <p>{review.comment}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
    )
}