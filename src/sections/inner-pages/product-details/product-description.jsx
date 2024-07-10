const ProductDescription = ({ productData }) => {
    const categoryDescriptions = {
        "Domestic": "Designed for home use, our domestic air purifiers provide a healthier breathing environment for you and your family.",
        "Industrial": "Our industrial air purifiers are designed to handle larger spaces, making them ideal for businesses and large homes.",
        "Clinical": "Designed for healthcare settings, our clinical air purifiers help to reduce airborne contaminants and promote a healthier environment."
    };

    return (
        <div>
            <div className="product-description-container">
                <h2 className="form-title">Introducing the Powerful and Efficient {productData.model}</h2>
                <h3 className="form-title">{productData.category} Air Purifier</h3>
                <p className="text-18">
                    The {productData.model} is a {productData.category} air purifier designed to combat air pollution
                    and create a
                    healthier breathing environment for your home or workplace. Equipped with a CADR
                    of {productData.cadr},
                    it effectively removes dust, allergens, smoke, and other airborne contaminants from rooms up
                    to {productData.coverage}.
                </p>
                <h3 className="form-title">Key Features:</h3>
                <ul className="form-group  styled-list">
                    <li>Powerful CADR of {productData.cadr} for cleaner air</li>
                    <li>Ideal for rooms up to {productData.coverage}</li>
                    <li>Quiet operation at only {productData.noiseLevel}</li>
                    <li>Power consumption of {productData.power}</li>
                    <li>User-friendly controls for easy operation</li>
                </ul>
                <p className="text-18">
                    Enjoy Cleaner Air and Improved Well-being: The {productData.model} helps
                    to improve indoor air quality, promoting better breathing and overall
                    well-being. Its quiet operation ensures a peaceful environment while
                    effectively purifying the air. With its sleek design and user-friendly
                    controls, the {productData.model} seamlessly integrates into any home or workplace.
                </p>
                <h3 className="form-title">Ideal for {productData.category} Use:</h3>
                <p className="text-18">
                    {categoryDescriptions[productData.category]}
                </p>
                <h3 className="form-title">Product Dimensions and Weight:</h3>
                <ul className="form-group  styled-list">
                    <li>Product Dimensions: {productData.productDimensions}</li>
                    <li>Package Dimensions: {productData.packageDimensions}</li>
                    <li>Net Weight: {productData.netWeight}</li>
                    <li>Gross Weight: {productData.grossWeight}</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductDescription;