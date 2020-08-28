import React from "react";

export default function FilterComponent({ filter, filterAction }) {
  const yearArray = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  return (
    <div className="filterContainer">
      <div style={{ fontWeight: "bold" }}>Filters</div>
      <div>
        <div className="filterLabels">Launch Year</div>

        <br />
        {yearArray.map((year) => (
          <button
            className={filter.year === year ? "activeButton" : "buttonstyle"}
            onClick={() => {
              filterAction({
                ...filter,
                year: filter.year !== year ? year : "",
              });
            }}
          >
            {year}
          </button>
        ))}
      </div>
      <div>
        <div className="filterLabels">Successful Launch</div>
        <br />
        <button
          className={filter.launch === "true" ? "activeButton" : "buttonstyle"}
          onClick={() =>
            filterAction({
              ...filter,
              launch: filter.launch !== "true" ? "true" : "",
            })
          }
        >
          True
        </button>
        <button
          className={filter.launch === "false" ? "activeButton" : "buttonstyle"}
          onClick={() =>
            filterAction({
              ...filter,
              launch: filter.launch !== "false" ? "false" : "",
            })
          }
        >
          False
        </button>
      </div>
      <div>
        <div className="filterLabels">Successful Landing</div>
        <br />
        <button
          className={filter.land === "true" ? "activeButton" : "buttonstyle"}
          onClick={() =>
            filterAction({
              ...filter,
              land: filter.land !== "true" ? "true" : "",
            })
          }
        >
          True
        </button>
        <button
          className={filter.land === "false" ? "activeButton" : "buttonstyle"}
          onClick={() =>
            filterAction({
              ...filter,
              land: filter.land !== "false" ? "false" : "",
            })
          }
        >
          False
        </button>
      </div>
    </div>
  );
}
