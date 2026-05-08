import React from "react";
import { ChartDoughnout } from "./ChartDoughnout";

const Summary = ({holdings}) => {

  const data = {                       //----- Data for Doughnout Chart -----
  labels: holdings.map((subArray)=> subArray["name"]),
  datasets: [
    {
      label: 'Current Value',
      data: holdings.map((stock)=>(stock.price*stock.qty)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(199, 199, 199, 0.5)',
        'rgba(83, 102, 255, 0.5)',
        'rgba(255, 99, 255, 0.5)',
        'rgba(121, 85, 72, 0.5)',
        'rgba(255, 87, 34, 0.5)',
        'rgba(0, 200, 83, 0.5)',
        'rgba(0, 188, 212, 0.5)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)',
        'rgba(83, 102, 255, 1)',
        'rgba(255, 99, 255, 1)',
        'rgba(121, 85, 72, 1)',
        'rgba(255, 87, 34, 1)',
        'rgba(0, 200, 83, 1)',
        'rgba(0, 188, 212, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <>
      {/* <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div> */}
      <div className="section">
        <span>
          <p style={{margin:"0"}}><i class="bi bi-clock"></i>&nbsp; Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <p>Margin available :</p>
            <h3>&#8377; 3.74k</h3>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used: <span>0</span>{" "}
            </p>
            <p>
              Opening balance: <span>&#8377; 3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p style={{margin:"0"}}><i class="bi bi-calendar4"></i>&nbsp; Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <p>P&L : </p>
            <h3 className="profit">
              &#8377; 1.55k <small>+5.20%</small>
            </h3>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value: <span>&#8377; 31.43k</span>{" "}
            </p>
            <p>
              Investment: <span>&#8377; 29.88k</span>{" "}
            </p>
          </div>
        </div>
        <div className="chart" style={{height:"35em",display:"flex",justifyContent:"center"}}>
          <ChartDoughnout data={data} />
        </div>
        <br></br>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
