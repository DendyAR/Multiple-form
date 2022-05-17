import React, { useContext } from "react";
import { multiStepContex } from "../StepContex.js";

export default function Review() {
  const { finalData } = useContext(multiStepContex);
  console.log(finalData);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          Owner Information
          <tr>
            <th scope="col">Owner Information</th>
            <th scope="col">Owner Email</th>
            <th scope="col">Owner Phone Number</th>
            <th scope="col">
              <img src="" alt="" />
              Owner Identification Cardr
            </th>
          </tr>
        </thead>

        {finalData.map((data) => (
          <>
            <tbody key={data.email}>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
              </tr>
              <tr>
                <th>{data.bussinessName}</th>
                <td>{data.bussinesnumber}</td>
                <td>{data.address}</td>
                <td>{data.pin}</td>
                <td>{data.file}</td>
              </tr>
            </tbody>
          </>
        ))}
        {/* {finalData.map((data) => (
          <>
            <tbody key={data.email}>
              <tr>
                <th>{data.bussinessName}</th>
                <td>{data.bussinesnumber}</td>
                <td>{data.address}</td>
                <td>{data.pin}</td>
                <td>{data.file}</td>
              </tr>
            </tbody>
          </>
        ))} */}
      </table>
    </div>
  );
}
