import React from "react";
import "./_modalSize.scss";
import { useState } from "react";

const Row = (props) => {
  return (
    <>
      <div className={props.rowClassName}>
        {Array.from({ length: 9 }).map((el, index) => (
          <div
            className={"c-row__item c-row__item-" + index}
            key={"c-rows__item" + index}
          >
            <p className="c-row__item-name">{props.rowName[`${index}`]}</p>
          </div>
        ))}
      </div>
    </>
  );
};
const Table = (props) => {
  return (
    <>
      <div className="c-table">
        <div className="c-table__rows">
          <Row rowName={props.rowNameEurope} rowClassName="c-row c-row-0" />
          <Row rowName={props.rowNameUSA} rowClassName="c-row c-row-1" />
          <Row
            rowName={props.rowNameUnitedKingdom}
            rowClassName="c-row c-row-2"
          />
          <Row rowName={props.rowNameChine} rowClassName="c-row c-row-3" />
          <Row rowName={props.rowNameUkraine} rowClassName="c-row c-row-4" />
          <Row rowName={props.rowNameItaly} rowClassName="c-row c-row-5" />
          <Row rowName={props.rowNameSouthKorea} rowClassName="c-row c-row-6" />

          {/* {Array.from({ length: 7 }).map((el, index) => (
            <Row rowName={props.rownName + index} key={Math.random} />
          ))} */}
        </div>
      </div>
    </>
  );
};
const ModalSize = (props) => {
  const [tab, setTab] = useState(0);
  const toggleTab = (index) => {
    setTab(index);
  };
  const [tabMeasurement, setTabMeasurement] = useState(0);
  const toggleMeasurementTab = (index) => {
    setTabMeasurement(index);
  };
  const tabCategory = ["Women", "Men", "Kids"];
  const tabMeasurementCategory = ["cm", "Inches"];
  const womenEuropeSize = [
    "Europe",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ];
  const menEuropeSize = [
    "Europe",
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "44",
  ];
  const kidsEuropeSize = [
    "Europe",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "19",
    "19.5",
    "20",
  ];
  const womenUSASize = ["USA", "5", "6", "6.5", "7.5", "8", "9", "10", "11"];
  const menUSASize = ["USA", "7", "8", "9", "10", "11", "12", "13", "14"];
  const kidsUSASize = ["USA", "1", "1.5", "2", "2.5", "3", "4", "5", "5.5"];
  const womenUnitedKindomSize = [
    "United Kingdom",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const menUnitedKindomSize = [
    "United Kingdom",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "9",
    "10",
    "11",
  ];
  const kidsUnitedKindomSize = [
    "United Kingdom",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "4",
    "5",
    "5.5",
  ];
  const womenChineSize = [
    "Chine",
    "230/83",
    "235/84",
    "240/85",
    "245/86",
    "255/87",
    "260/88",
    "265/89",
    "275/90",
  ];
  const menChineSize = [
    "Chine",
    "250/83",
    "255/84",
    "260/85",
    "275/86",
    "280/87",
    "285/88",
    "290/89",
    "295/90",
  ];
  const kidsChineSize = [
    "Chine",
    "190/83",
    "195/84",
    "200/85",
    "205/86",
    "210/87",
    "215/88",
    "220/89",
    "225/90",
  ];
  const womenUkraineSize = [
    "Ukraine",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ];
  const menUkraineSize = [
    "Ukraine",
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "44",
  ];
  const kidsUkraineSize = [
    "Ukraine",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "19",
    "19.5",
    "20",
  ];
  const womenItalySize = [
    "Italy",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ];
  const menItalySize = [
    "Italy",
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "44",
  ];
  const kidsItalySize = [
    "Italy",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "19",
    "19.5",
    "20",
  ];
  const womenSouthKoreaSize = [
    "South Korea",
    "230",
    "235",
    "240",
    "245",
    "255",
    "260",
    "265",
    "275",
  ];
  const menSouthKoreaSize = [
    "South Korea",
    "250",
    "255",
    "260",
    "270",
    "275",
    "280",
    "285",
    "290",
  ];
  const kidsSouthKoreaSize = [
    "South Korea",
    "190",
    "195",
    "200",
    "205",
    "210",
    "215",
    "220",
    "225",
  ];

  const centimeters = [
    "Foot length",
    "22.4cm",
    "23cm",
    "23.6cm",
    "24.9cm",
    "25.5cm",
    "26.2cm",
    "26.8cm",
  ];
  const inches = [
    "Foot length",
    "8.6inch",
    "9inch",
    "9.4inch",
    "9.8inch",
    "9.9inch",
    "10inch",
    "10.2inch",
  ];
  return (
    <>
      <div className={`c-modal-size ${props.isOpened ? "open" : "close"}`}>
        <div className="c-modal-size__wrapper">
          <div className="c-modal-size__close" onClick={props.onModalClose}>
            ✕
          </div>
          <h3 className="c-modal-size__title">Size chart</h3>

          <div className="c-modal-size__tabs">
            {Array.from({ length: 3 }).map((el, index) => (
              <>
                <div
                  className={
                    tab === index
                      ? "c-modal-size__open-tab"
                      : "c-modal-size__hide-tab"
                  }
                  onClick={() => toggleTab(index)}
                  key={"c-modal-size__open-tab" + index}
                >
                  <span className="c-modal-size__tab-name">
                    {tabCategory[`${index}`]}
                  </span>
                </div>
              </>
            ))}
          </div>
          <div className="c-modal-size__table">
            <h5 className="c-modal-size__table-name">Footwear</h5>
            <div
              className={
                tab === 0
                  ? "c-modal-size__table-women"
                  : "c-modal-size__table-women-hide"
              }
            >
              <Table
                rowNameEurope={womenEuropeSize}
                rowNameUSA={womenUSASize}
                rowNameUnitedKingdom={womenUnitedKindomSize}
                rowNameChine={womenChineSize}
                rowNameUkraine={womenUkraineSize}
                rowNameItaly={womenItalySize}
                rowNameSouthKorea={womenSouthKoreaSize}
              />
            </div>
            <div
              className={
                tab === 1
                  ? "c-modal-size__table-men"
                  : "c-modal-size__table-men-hide"
              }
            >
              <Table
                rowNameEurope={menEuropeSize}
                rowNameUSA={menUSASize}
                rowNameUnitedKingdom={menUnitedKindomSize}
                rowNameChine={menChineSize}
                rowNameUkraine={menUkraineSize}
                rowNameItaly={menItalySize}
                rowNameSouthKorea={menSouthKoreaSize}
              />
            </div>
            <div
              className={
                tab === 2
                  ? "c-modal-size__table-kids"
                  : "c-modal-size__table-kids-hide"
              }
            >
              <Table
                rowNameEurope={kidsEuropeSize}
                rowNameUSA={kidsUSASize}
                rowNameUnitedKingdom={kidsUnitedKindomSize}
                rowNameChine={kidsChineSize}
                rowNameUkraine={kidsUkraineSize}
                rowNameItaly={kidsItalySize}
                rowNameSouthKorea={kidsSouthKoreaSize}
              />
            </div>
          </div>
          <div className="c-modal-size__divider"></div>
          <div className="c-modal-size__measurement">
            <h5 className="c-modal-size__measurement-name">
              I want to see size equivalence in:
            </h5>
            <div className="c-modal-size__tabs-measurement">
              {Array.from({ length: 2 }).map((el, index) => (
                <div
                  className={
                    tabMeasurement === index
                      ? "c-modal-size__tab-measurement"
                      : "c-modal-size__tab-measurement-hide"
                  }
                  onClick={() => toggleMeasurementTab(index)}
                  key={"c-modal-size__tab-measurement" + index}
                >
                  <span className="c-modal-size__tab-measurement-name">
                    {tabMeasurementCategory[`${index}`]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="c-modal-size__tabel-measurement">
            <div
              className={
                tabMeasurement === 0
                  ? "c-modal-size__tabel-centimeters"
                  : "c-modal-size__tabel-centimeters-hide"
              }
            >
              <h5 className="c-modal-size__table-name">
                Equivalence in centimetres
              </h5>
              <Row rowName={centimeters} rowClassName="c-row c-row-0" />
            </div>
            <div
              className={
                tabMeasurement === 1
                  ? "c-modal-size__tabel-inches"
                  : "c-modal-size__tabel-inches-hide"
              }
            >
              <h5 className="c-modal-size__table-name">
                Equivalence in Inches
              </h5>

              <Row rowName={inches} rowClassName="c-row c-row-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalSize;
