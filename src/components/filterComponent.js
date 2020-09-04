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

  const yearElements = yearArray.map((year) => (
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
  ));

  const ButtonComponent = ({ filter, filterAction, btn, mode }) => (
    <button
      className={filter[`${mode}`] === btn ? "activeButton" : "buttonstyle"}
      onClick={() => {
        return mode === "launch"
          ? filterAction({
              ...filter,
              launch: filter.launch !== btn ? btn : "",
            })
          : filterAction({
              ...filter,
              land: filter.land !== btn ? btn : "",
            });
      }}
    >
      {btn}
    </button>
  );

  const LaunchContainer = () => (
    <div className="btn-container">
      <ButtonComponent
        filter={filter}
        filterAction={filterAction}
        btn="true"
        mode="launch"
      />
      <ButtonComponent
        filter={filter}
        filterAction={filterAction}
        btn="false"
        mode="launch"
      />
    </div>
  );

  const LandingContainer = () => (
    <div className="btn-container">
      <ButtonComponent
        filter={filter}
        filterAction={filterAction}
        btn="true"
        mode="land"
      />
      <ButtonComponent
        filter={filter}
        filterAction={filterAction}
        btn="false"
        mode="land"
      />
    </div>
  );

  return (
    <div className="filterContainer">
      <div style={{ fontWeight: "bold" }}>Filters</div>
      <div>
        <div className="filterLabels">Launch Year</div>
        <br />
        <div className="btn-container">{yearElements}</div>
      </div>
      <div>
        <div className="filterLabels">Successful Launch</div>
        <br />
        <LaunchContainer />
      </div>
      <div>
        <div className="filterLabels">Successful Landing</div>
        <br />
        <LandingContainer />
      </div>
    </div>
  );
}
