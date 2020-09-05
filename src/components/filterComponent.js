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

  const YearsComponent = ({ filter, filterAction, yearArray }) => (
    <div className="btn-container">
      {yearArray.map((year) => (
        <button
          className={
            filter && filter.year === year ? "activeButton" : "buttonstyle"
          }
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
  );

  const ButtonComponent = ({ filter, filterAction, btn, mode }) => (
    <button
      className={
        filter && filter[`${mode}`] === btn ? "activeButton" : "buttonstyle"
      }
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

  const ButtonContainer = ({ filter, filterAction, mode, header }) => (
    <div>
      <header>
        <div className="filterLabels">{header}</div>
      </header>
      <div className="btn-container">
        <ButtonComponent
          filter={filter}
          filterAction={filterAction}
          btn="true"
          mode={mode}
        />
        <ButtonComponent
          filter={filter}
          filterAction={filterAction}
          btn="false"
          mode={mode}
        />
      </div>
    </div>
  );

  return (
    <div className="filterContainer">
      <nav>
        <div style={{ fontWeight: "bold" }}>Filters</div>
        <div>
          <div className="filterLabels">Launch Year</div>
          <br />
          <YearsComponent
            filter={filter}
            filterAction={filterAction}
            yearArray={yearArray}
          />
        </div>
      </nav>
      <main>
        <ButtonContainer
          filter={filter}
          filterAction={filterAction}
          header="Successful Launch"
          mode="launch"
        />
        <ButtonContainer
          filter={filter}
          filterAction={filterAction}
          header="Successful Land"
          mode="land"
        />
      </main>
    </div>
  );
}
