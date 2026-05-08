// import {holdings} from "../data/data";      //----- Holdings data [Local] -> now coming from Dashboard -----
import { ChartVertical } from "./ChartVertical";

const Holdings = ({holdings}) => {

  const labels = holdings.map((subArray)=>(subArray["name"]));    //----- Data for Vertical Chart -----
  const data = {
    labels,
    datasets: [
      {
        label: 'P&L',
        data: holdings.map((stock) => ((stock.price*stock.qty)-(stock.avg*stock.qty))),
        backgroundColor: 'rgba(103,201,136, 0.8)',
      },
    ],
  };
  

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          

            {holdings.map((stock,index)=>{
              let curValue = stock.price * stock.qty;
              let isProfit = curValue - stock.avg*stock.qty >= 0.0;
              let profClass = isProfit ? "profit" : "loss";
              let dayClass = stock.isLoss ? "loss" : "profit";

              return(
                <tr>
                  <td>{stock.name}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{(curValue - stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <br></br>
      <div className="chart">
        <ChartVertical data={data} />
      </div>
    </>
  );
};

export default Holdings;
