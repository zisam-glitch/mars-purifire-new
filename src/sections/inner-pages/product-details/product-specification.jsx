const ProductDetailsTable = (props) => {
    const productData = props.productData;
  
    const specifications = [
      { label: "Model", value: productData.model },
      { label: "CADR", value: productData.cadr },
      { label: "Coverage Area", value: `${productData.coverage}m²` },
      { label: "Noise Level", value: productData.noiseLevel },
      { label: "Power Consumption", value: `${productData.power}W` },
      { label: "Voltage", value: `${productData.voltage}V` },
      { label: "Rated Frequency", value: `${productData.ratedFrequency}Hz` },
      {
        label: "Product Dimensions",
        value: `${productData.productDimensions}mm`,
      },
      {
        label: "Package Dimensions",
        value: `${productData.packageDimensions}mm`,
      },
      { label: "Net Weight", value: `${productData.netWeight}kg` },
      { label: "Gross Weight", value: `${productData.grossWeight}kg` },
    ];
  
    return (
      <div className="w-100">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr key={index}>
                <td>{spec.label}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ProductDetailsTable;