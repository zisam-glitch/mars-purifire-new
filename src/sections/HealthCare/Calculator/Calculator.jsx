import React, { useState } from "react";

function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [volume, setVolume] = useState(null);
  const [tableData, setTableData] = useState([
    { name: "GEN S", cadr: 180, volume: "0.00", ach100: "0.00", ach50: "0.00" },
    { name: "GEN X", cadr: 727, volume: "0.00", ach100: "0.00", ach50: "0.00" },
    { name: "GEN Y", cadr: 633, volume: "0.00", ach100: "0.00", ach50: "0.00" },
    { name: "GEN Z", cadr: 1156, volume: "0.00", ach100: "0.00", ach50: "0.00" },
  ]);

  const calculate = () => {
    const num1 = Number(length);
    const num2 = Number(width);
    const num3 = Number(height);
    const res = num1 * num2 * num3;
    setVolume(res.toFixed(2));
    updateTable(res);
    clearForm();
  };

  const updateTable = (res) => {
    const newTableData = [
      { name: "GEN S", cadr: 180 },
      { name: "GEN X", cadr: 727 },
      { name: "GEN Y", cadr: 633 },
      { name: "GEN Z", cadr: 1156 },
    ].map((item) => ({
      ...item,
      volume: res.toFixed(2),
      ach100: (item.cadr / res).toFixed(2),
      ach50: (item.cadr / (res * 2)).toFixed(2),
    }));

    setTableData(newTableData);
  };

  const clearForm = () => {
    setLength("");
    setWidth("");
    setHeight("");
  };

  return (
    <div className="container ">
      <div className="p-20 form-box-style__form-wrapper bg-light-2 mb-120 mt-120 flex-row flex ">
        <div className="form-section  col-lg-4">
          <form className="form pr-0 p-40">
            <div>
              <div className="form-group">
                <label className="form-box-style-title">
                  Length (m)
                  <b className="required">*</b>
                </label>
                <input
                  className="form-control bg-white"
                  placeholder="Length (m)"
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-box-style-title">
                  Width (m)
                  <b className="required">*</b>
                </label>
                <input
                  className="form-control bg-white"
                  placeholder="Width (m)"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-box-style-title">
                  Height (m)
                  <b className="required">*</b>
                </label>
                <input
                  className="form-control bg-white"
                  placeholder="Height (m)"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="form-box-style__form-input-button">
              <button
                className="btn-masco rounded-pill w-100"
                type="button"
                onClick={calculate}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
        <div className="table-section col-lg-8">
          <div className="p-40 pl-80 ">
            <div className="form-group">
              <label className="form-box-style-title">Room Volume (m3)</label>
              <input
                className="form-control bg-white"
                placeholder="Room Volume (m3)"
                type="text"
                id="volume"
                value={volume || ""}
                readOnly
              />
            </div>
            <h3 className="heading-md">Air Changes per Hour</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>{""}Name{""}</th>
                  <th>CADR (m3/h)</th>
                  <th>Room Volume</th>
                  <th>100% ACH</th>
                  <th>50% ACH</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.cadr}</td>
                    <td>{item.volume}</td>
                    <td>{item.ach100}</td>
                    <td>{item.ach50}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
