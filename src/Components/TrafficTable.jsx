import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const TrafficTable = props => {
  const DisplayTableData = () =>
    props.trafficData?.map((info, index) => {
      return (
        <tr key={index}>
          <td>{info.ts || ""}</td>
          <td>{info.segment_id || ""}</td>
          <td>{info.lane || ""}</td>
          <td>{info.label || ""}</td>
          <td>{info.count || ""}</td>
          <td>{info.speed || ""}</td>
          <td>{info.congestion || ""}</td>
          <td>{info.congestion_level || ""}</td>
        </tr>
      );
    });

  return (
    <StylesTrafficTable>
      <table>
        <thead>
          <tr>
            <th>TS</th>
            <th>Segment Id</th>
            <th>Lane</th>
            <th>Label</th>
            <th>Count</th>
            <th>Speed</th>
            <th>Congestion</th>
            <th>Congestion Level</th>
          </tr>
        </thead>
        <tbody>{DisplayTableData()}</tbody>
      </table>
    </StylesTrafficTable>
  );
};

TrafficTable.propTypes = {
  trafficData: PropTypes.array,
};

export default TrafficTable;

const StylesTrafficTable = Styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
